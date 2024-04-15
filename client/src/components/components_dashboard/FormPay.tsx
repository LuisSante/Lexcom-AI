// FormPay.tsx
import React from 'react';
import { Button, Flex } from 'antd';
import { FormPayProps } from '../../interface/dashboard';

export const FormPay: React.FC<FormPayProps> = ({ plan, totalPrice, onClick }) => {
    const handlePagarClick = () => {
        // Llama a la función proporcionada cuando se hace clic en "Pagar"
        onClick();
    };

    return (
        <div style={{ color: 'white' }}>
            <p>Tu pedido: {plan}</p>
            <p>Total: ${totalPrice}</p>
            <Flex vertical gap="small" style={{ width: '100%' }}>
                <Button onClick={handlePagarClick} type="primary" block>
                    Pagar
                </Button>
            </Flex>
        </div>
    );
}
