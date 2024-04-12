import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { FormPay } from './FormPay';
import { ButtonPlanType } from '../../interface/dashboard';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ type, value_plan, name, styleButton }) => {

  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const showRegisterModal = (planType: string) => {
    setSelectedPlan(planType);
    setButtonModalVisible(true);
  };

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  const handleOkClick = () => {
    setButtonModalVisible(false);
    // Aquí podrías realizar alguna acción adicional al hacer clic en "OK"
  };

  const handleButtonClick = () => {
    showRegisterModal(type || "");
  };

  return (
    <>
      <Button value={value_plan} onClick={handleButtonClick} style={styleButton}>
        {name}
      </Button>
      <Modal
        title="Finaliza tu compra"
        visible={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <FormPay
          plan={selectedPlan}
          totalPrice={value_plan}
          onOkClick={handleOkClick}
        />
      </Modal>
    </>
  )
}
