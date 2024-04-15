import { Button, Modal, Radio } from 'antd';
import React, { useState } from 'react'
import { FormPay } from './FormPay';
import { ButtonPlanType } from '../../interface/dashboard';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ type, value, styleButton, onOkClick }) => {

  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  const handleOkClick = () => {
    setButtonModalVisible(false);
    // Aquí podrías realizar alguna acción adicional al hacer clic en "OK"
  };

  const handleButtonClick = () => {
    console.log("handleButtonClick" , onOkClick);
    if (onOkClick) {
      onOkClick(); // asegúrate de que esto actualiza el estado correctamente en el padre
    }
    setSelectedPlan(type);
    setButtonModalVisible(true);
  };

  return (
    <>
      <Button value={value} onClick={handleButtonClick} style={styleButton}>
        Comprar Plan {value}
      </Button>
      <Modal
        title="Finaliza tu compra"
        visible={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <FormPay
          plan={selectedPlan}
          totalPrice={value}
          onClick={handleOkClick}
        />
        <Radio.Button>

        </Radio.Button>
      </Modal>
    </>
  )
}
