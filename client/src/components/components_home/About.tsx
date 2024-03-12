import { Footer } from 'antd/es/layout/layout';
import React from 'react'

interface ComponentProps {
  id?: string
}

const About: React.FC<ComponentProps> = ({ id }) => {
  return (
    <div id={id}>
      <Footer style={{ background: 'black', color: 'white', textAlign: 'center' }}>
        <a href='mailto:lexcomsoporte@gmail.com'> Legal </a>
        <a href='mailto:lexcomsoporte@gmail.com'> Support </a>
        <br />
        Lexcom ©{new Date().getFullYear()} Created by Lexcom
      </Footer>
    </div>
  )
}

export default About;