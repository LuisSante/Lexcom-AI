export const reachGoogle = async () => {
  const clientID = import.meta.env.VITE_CLIENDID;
  const callBackURI = import.meta.env.VITE_CALLBACKURI;
  const URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURI}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`;
  window.location.replace(URL);
};
