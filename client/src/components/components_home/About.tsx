import { Footer } from 'antd/es/layout/layout';
import React from 'react'
import { termofUse } from './Legal';
import { ComponentProps } from '../../interface/home';
import logo from '../../assets/lexcom.svg';
import InstragramIcon from '../../assets/instragramicon.svg';
import MailIcon from '../../assets/mailicon.svg';

const About: React.FC<ComponentProps> = ({ id }) => {
  return (
    <div id={id}>
      <Footer className='bg-black font-semibold text-center text-white'>
        <div className='flex md:flex-row flex-col justify-center md:justify-center items-center md:items-center gap-16'>
          <div className='flex flex-col justify-center items-center md:items-start mb-4 md:mb-0 md:w-52'>
            <img className='w-52' src={logo} alt="Lexcom Logo" />
            <a href="https://www.instagram.com/lexcom.ia?igsh=cGQ4YTJqb3V1bHB6">
              <img className="w-12" src={InstragramIcon} />
            </a>
          </div>
          <div className='flex flex-col justify-center items-start w-full md:w-60'>
            <span className='text-[15px]'>MÁS SOBRE LEXCOM</span>
            <a className="mb-4 text-[15px]" onClick={termofUse}> Legal </a>
            <span className='text-[15px]'>COMUNÍQUESE CON NOSOTROS</span>
            <div className='flex gap-4'>
              <img src={MailIcon} alt="mail icon" />
              <a className='text-[15px]' href='mailto:suptechlexcom1@gmail.com'> Support </a>
            </div>
          </div>
        </div>
        <hr className="border-white my-4 border-t"></hr>
        <div className='text-[16px]'>
          Lexcom ©{new Date().getFullYear()}, All right reserved | Created by Lexcom
        </div>
      </Footer>
    </div>
  )
}

export default About;