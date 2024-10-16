import { useState } from 'react';
import { axiosInstancewithoutPermissions } from '../axios';
import { Button } from 'antd';
import { useEffect } from 'react';

import welcome from '../../assets/welcome.svg'
import plane from '../../assets/plane.svg'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [clicked] = useState(false);
    const navigate = useNavigate();

    const redirect_oauth = () => {
        navigate('/auth')
    }

    const getGoogleAuthCode = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        return code;
    };

    const googleLogin = async () => {
        const code = getGoogleAuthCode();
        if (code) {
            try {
                const res = await axiosInstancewithoutPermissions.post("dj-rest-auth/google/", {
                    code: code,
                });
                const { access, user } = res.data;
                localStorage.setItem("access_token", access);
                localStorage.setItem("user", JSON.stringify(user));

                // navigate("/dashboard");
            } catch (error) {
                console.error("Error en la autenticación:", error);
            }
        }
    };

    useEffect(() => {
        googleLogin();
    }, []);



    return (
        <div className="flex flex-col justify-center items-center mt-[140px]">
            <div
                className='py-2'
                style={{
                    letterSpacing: '1.6px',
                    background: 'linear-gradient(91deg, #ff1cf7 2.26%, #00f0ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'center',
                    fontWeight: 100,
                    fontSize: '45px',
                    lineHeight: '50px',
                    fontFamily: '"Poppins", sans-serif',
                    color: 'white'
                }}
            >
                Determina la probabilidad
                <br />
                de éxito de productos ganadores
            </div>
            <img src={welcome} className='mt-[-17px] mb-[14px] w-[55%] h-[55%]' alt="welcome" />
            <div className="mt-[-39px] font-poppins text-[20px] text-center text-white leading-[33px] tracking-[0.72px]">
                Potencia tu negocio y ahórrate miles de dólares y mucho tiempo a la hora de testear
                <br />
                malos productos y ten más asertividad con LexCom asi logrando tener más precisión.
            </div>


            <div className={`flex ${clicked ? 'flex-col' : 'flex-row'} gap-[50px] w-[500px] justify-center mt-[50px]`}>
                <Button className="border-2.5 border-white bg-[#1d1d68] hover:bg-white hover:border-black rounded-full w-[150px] h-[50px] text-white hover:text-[#1d1d68]" onClick={redirect_oauth}>Conoce Más!</Button>
                <Button className="border-2.5 border-white bg-[#1d1d68] hover:bg-white hover:border-black rounded-full w-[150px] h-[50px] text-white hover:text-[#1d1d68]" onClick={redirect_oauth}>Vamos</Button>
            </div>
            <img src={plane} className='mt-[-60px] w-[90%]' alt="plane" />
        </div>
    )
}

export default Welcome