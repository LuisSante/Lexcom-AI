import React from 'react'
import UpCommerceIcon from '../assets/upcommerceicon.svg'

const Courses: React.FC = () => {

    // useEffect(() => {
    //     if (selectedMenu === 'Lexcom Courses') {
    //         window.location.href = 'https://home.upcommercelatam.com/login/?wppb_referer_url=https%3A%2F%2Fhome.upcommercelatam.com%2F';
    //     }
    // }, [selectedMenu]);

    return (
        <div className='tutorial3'>
            <div className='border-4 border-white border-solid rounded-md w-full h-52'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-10 text-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <img src={UpCommerceIcon} />
                            <div className='flex gap-1'>
                                <span className='font-semibold text-3xl text-white'>UP</span>
                                <span className='text-3xl text-white'>COMMERCE</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 text-white text-xl'>
                        De 0 a 100 E-COMMERCE
                    </div>
                    <button className='border-4 border-white bg-transparent border-solid rounded-md w-44 h-10 font-mono text-[15px]'>
                        <a className="text-white" href='https://www.upcommercelatam.com/'>
                            Únete a nosotros
                        </a>
                    </button>
                </div>
            </div>
        </div>
        // un modulo con un link
    )
}

export default Courses