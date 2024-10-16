import logo from '../../assets/vectores.svg';
import Register from '../components_home/Register';
import GoogleIcon from '../../assets/google-icon.svg';
import { Segmented } from 'antd';
import { useState } from 'react';
import Login from '../components_home/Login';
import { reachGoogle } from '../logic/components_form/redirect-oauth';

const initialFormData = {
    email: "",
    password: "",
    remember: "",
};

const AuthPage = () => {

    const [value, setValue] = useState<string | number>('Sign up');

    return (
        <>
            <div className='relative flex bg-[#000C26] w-full h-screen'>
                <div>
                    <div className='top-0 right-0 z-0 absolute bg-[#C62D28] blur-[100px] sm:blur-[150px] rounded-full w-60 sm:w-96 h-60 sm:h-96' />
                    <div className='bottom-0 left-0 z-0 absolute bg-[#C62D28] blur-[150px] sm:blur-[200px] rounded-full w-60 sm:w-96 h-60 sm:h-96' />
                </div>
                <div className="relative lg:flex justify-center items-center hidden w-1/2 h-full">
                    <img src={logo} alt="Logo" className="z-10 px-6 w-full max-w-full h-full max-h-full" />
                </div>
                <div className='z-10 flex flex-col w-full lg:w-1/2 h-full text-white overflow-y-auto'>
                    <div className='flex justify-center items-center pt-36'>
                        <Segmented
                            options={['Sign up', 'Sign in']}
                            value={value}
                            onChange={setValue}
                            className='border-[#000C26] border-4 bg-[#000C26] text-white'
                        />
                    </div>
                    <div className='flex flex-col flex-grow justify-center items-center gap-5 pt-8'>
                        {value === 'Sign in' ? (
                            <div className='flex flex-col justify-center items-center md:mr-20 py-6 w-full'>
                                <p className='-mt-56 md:pl-28 text-4xl text-center'>
                                    Inicia Sesión
                                </p>
                                <div className='flex flex-col w-full max-w-md'>
                                    <Login {...initialFormData} />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='text-4xl'>
                                    Regístrate
                                </div>
                                <div className='flex flex-col w-full max-w-md'>
                                    <div className='flex justify-center items-center'>
                                        <button className='flex justify-center items-center gap-x-2 bg-[#F2F2F2] hover:bg-slate-300 px-3 py-[6px] border-none rounded-md w-full max-w-36 font-medium font-poppins cursor-pointer' onClick={reachGoogle}>
                                            <img src={GoogleIcon} className='max-w-4' />
                                            <span>Google</span>
                                        </button>
                                    </div>
                                    <div className='flex justify-between items-center my-4'>
                                        <hr className="flex-grow border-[#F2F2F2] border-t" />
                                        <span className="px-3 text-[#F2F2F2]">o</span>
                                        <hr className="flex-grow border-[#F2F2F2] border-t" />
                                    </div>
                                    <Register />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage;
