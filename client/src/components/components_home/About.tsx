import React from 'react'

interface ComponentProps {
  id: string
}

const About: React.FC<ComponentProps> = ({id}) =>{
  return (
    <div id = {id}>
      <h1>
      About
      </h1>
    </div>
  )
}

export default About;