import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { FormPay } from './FormPay';

interface ButtonPlanType {
  type?: string;
  name: string;
  styleButton: React.CSSProperties;
}

export const ButtonPlan: React.FC<ButtonPlanType> = ({type, name, styleButton }) => {


  const [buttonModalVisible, setButtonModalVisible] = useState(false);


  const showRegisterModal = () => {
    setButtonModalVisible(true);
  };

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  return (
    <>
      <Button value={type} onClick={showRegisterModal}
        style={styleButton}
      >
        {name}
      </Button>
      <Modal
        title="Finaliza tu compra"
        open={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <FormPay/>
      </Modal>
    </>

  )
}