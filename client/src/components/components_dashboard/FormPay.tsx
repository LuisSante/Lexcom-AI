// FormPay.tsx
import React from 'react';
import { Button, Flex } from 'antd';

interface FormPayProps {
    plan: string;
    totalPrice: number;
    onOkClick: () => void;
}

export const FormPay: React.FC<FormPayProps> = ({ plan, totalPrice, onOkClick }) => {
    const handlePagarClick = () => {
        // Llama a la función proporcionada cuando se hace clic en "Pagar"
        onOkClick();
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



// import React from 'react';
// import { Button, Form, Input, Select, Space } from 'antd';

// const { Option } = Select;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// export const FormPay: React.FC = () => {
//   const [form] = Form.useForm();

//   const onGenderChange = (value: string) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({ note: 'Hi, man!' });
//         break;
//       case 'female':
//         form.setFieldsValue({ note: 'Hi, lady!' });
//         break;
//       case 'other':
//         form.setFieldsValue({ note: 'Hi there!' });
//         break;
//       default:
//     }
//   };

//   const onFinish = (values: any) => {
//     console.log(values);
//   };

//   const onReset = () => {
//     form.resetFields();
//   };

//   const onFill = () => {
//     form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
//   };

//   return (
//     <Form
//       {...layout}
//       form={form}
//       name="control-hooks"
//       onFinish={onFinish}
//       style={{ maxWidth: 600 }}
//     >
//       <div>
//         Tu pedido
//       </div>
//       <br/>
//       <Form.Item name="Pay" label="Note" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//     </Form>
//   );
// };



// import React from 'react';
// import { Button, Form, Input, Select, Space } from 'antd';

// const { Option } = Select;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// export const FormPay: React.FC = () => {
//   const [form] = Form.useForm();

//   const onGenderChange = (value: string) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({ note: 'Hi, man!' });
//         break;
//       case 'female':
//         form.setFieldsValue({ note: 'Hi, lady!' });
//         break;
//       case 'other':
//         form.setFieldsValue({ note: 'Hi there!' });
//         break;
//       default:
//     }
//   };

//   const onFinish = (values: any) => {
//     console.log(values);
//   };

//   const onReset = () => {
//     form.resetFields();
//   };

//   const onFill = () => {
//     form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
//   };

//   return (
//     <Form
//       {...layout}
//       form={form}
//       name="control-hooks"
//       onFinish={onFinish}
//       style={{ maxWidth: 600 }}
//     >
//       <div>
//         Tu pedido
//       </div>
//       <br/>
//       <Form.Item name="Pay" label="Note" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//     </Form>
//   );
// };