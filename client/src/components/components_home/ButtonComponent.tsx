import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import Register from './Register';
import { ButtonType } from '../../interface/buttoncomponent';

const ButtonComponent: React.FC<ButtonType> = ({ name, styleButton }) => {
  const [buttonModalVisible, setButtonModalVisible] = useState(false);


  const showRegisterModal = () => {
    setButtonModalVisible(true);
  };

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  return (
    <>
      <Button onClick={showRegisterModal}
        style={styleButton}
      >
        {name}
      </Button>
      <Modal
        title="Regístrate ahora"
        open={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <Register/>
      </Modal>
    </>

  )
}

export default ButtonComponent