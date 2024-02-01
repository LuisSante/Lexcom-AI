import '../../css/styles_home/faq.css';
import { Collapse } from 'antd';
import FAQItems from '../logic/FAQItems';
interface ComponentProps {
  id: string;
}

const customPanelStyle = {
  background: '#0561ac',
  borderRadius: 0,
  border: 1,
  overflow: 'hidden',
  color: 'rgb(239 68 68)'
};

const customCollapseStyle = {
  borderRadius: 4,
  borderColor: '#0561ac',
};


const Faq: React.FC<ComponentProps> = ({ id }) => {

  const { Panel } = Collapse;

  return (
    <div id={id} className="faq-container">
      <div className="div-166">
        <span style={{}}>Nuestras más </span>
        <span style={{ color: '#0561ac' }}>frecuentes </span>
        <span style={{}}>preguntas</span>
      </div>
      <Collapse style={customCollapseStyle} accordion>
        {FAQItems.map((item) => (
          <Panel header={item.question} key={item.key} style={customPanelStyle}>
            <span className='answer'>{item.answer}</span>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default Faq;