import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface TokenResponse {
	access: string;
	refresh: string;
}

// const baseURL = 'http://localhost:8000/api/v1/';
const baseURL = 'http://34.42.26.12:8080/api/v1/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 100000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error: AxiosError) {
		const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
				'Looks like CORS might be the problem. ' +
				'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			window.location.href = '/';
			return Promise.reject(error);
		}

		const responseData = error.response.data;
		if (
			responseData &&
			typeof responseData === 'object' &&
			'code' in responseData &&
			'status' in error.response &&
			'statusText' in error.response
		) {
			if (
				responseData.code === 'token_not_valid' &&
				error.response.status === 401 &&
				error.response.statusText === 'Unauthorized'
			) {
				const refreshToken = localStorage.getItem('refresh_token');

				if (refreshToken) {
					const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

					// exp date in token is expressed in seconds, while now() returns milliseconds:
					const now = Math.ceil(Date.now() / 1000);

					if (tokenParts.exp > now) {
						return axiosInstance
							.post<TokenResponse>('token/refresh/', { refresh: refreshToken })
							.then((response) => {
								localStorage.setItem('access_token', response.data.access);
								localStorage.setItem('refresh_token', response.data.refresh);

								axiosInstance.defaults.headers['Authorization'] =
									'JWT ' + response.data.access;
								originalRequest.headers =
									originalRequest.headers || {}; // Ensure headers is defined
								originalRequest.headers['Authorization'] =
									'JWT ' + response.data.access;

								return axiosInstance(originalRequest);
							})
							.catch((err) => {
								console.log(err);
							});
					} else {
						// console.log('Refresh token is expired', tokenParts.exp, now);
						window.location.href = '/';
					}
				} else {
					// console.log('Refresh token not available.');
					window.location.href = '/';
				}
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;
