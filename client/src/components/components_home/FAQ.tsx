import '../../css/styles_home/faq.css';
import { Collapse, ConfigProvider } from 'antd';
import FAQItems from '../logic/FAQItems';
import React from "react";

interface ComponentProps {
  id: string;
}

const Faq: React.FC<ComponentProps> = ({ id }) => {

  const { Panel } = Collapse;

  return (
    <div id={id} className="faq-container">
      <div className="div-166">
        <span style={{}}>Nuestras más </span>
        <span style={{ color: '#0561ac' }}>frecuentes </span>
        <span style={{}}>preguntas</span>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorTextHeading: "rgba(255, 255, 255, 1)", // question
              colorBgContainer: "rgba(58, 64, 75, 0.92)", // answer
              headerBg: "rgba(58, 64, 75, 0.92)",
              colorText: "rgba(255, 255, 255, 1)",
              colorBorder: "rgba(255, 255, 255, 1)",
              lineHeight: 1.5,
              motionDurationMid: "0.5s",
            },
          },
          token: {
            fontFamily: "Poppins, sans-serif",
            padding: 20,
            motionEaseInOut: "cubic-bezier(1, 1, 1, 1)",
            marginSM: 20,
            fontSizeIcon: 20,
            fontSize: 20,
          },
        }}
      >
        <Collapse accordion>
          {FAQItems.map((item) => (
            <Panel header={item.question} key={item.key}>
              {item.answer}
            </Panel>
          ))}
        </Collapse>
      </ConfigProvider>
    </div>
  )
}

export default Faq;