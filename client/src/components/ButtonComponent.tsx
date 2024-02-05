import { Button, Modal } from 'antd';
import React, { useState } from 'react'


interface ButtonType {
  name: string;
  ButtonForm: React.ComponentType<{ onSubmit: () => void; }>;
  styleButton: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonType> = ({ name, ButtonForm, styleButton }) => {


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
        title="Pruebelo_gratis"
        open={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        {ButtonForm && <ButtonForm onSubmit={handleRegisterModalCancel} />}
      </Modal>
    </>

  )
}

export default ButtonComponent