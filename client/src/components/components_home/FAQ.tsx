import '../../css/styles_home/faq.css';
import { Collapse, ConfigProvider } from 'antd';
import React from "react";
import { ComponentProps } from '../../interface/home';

const Faq: React.FC<ComponentProps> = ({ id }) => {

  const { Panel } = Collapse;

  return (
    <div id={id} className="faq-container">
      <div className="div-166">
        <span>Nuestras más </span>
        <span className='text-[#0561ac]'>frecuentes </span>
        <span >preguntas</span>
      </div>
      <div>
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
              fontSize: 15,
            },
          }}
        >
          <Collapse accordion>
            <Panel
              header="¿Qué es Lexcom.AI ?"
              key="1"
            >
              Lexcom es un Software de Inteligencia artificial que su principal función es determinar la probabilidad de éxito de productos que tú subes y te dará la probabilidad de éxito, por otra parte, tenemos otras herramientas como Lexcopy Pro, LexVid Pro, LexLandig Pro, Finance Pro.
            </Panel>
            <Panel
              header="¿Cómo funciona Lexcom?"
              key="2"
            >
              <p>LexIA Determination: Determinar la probabilidad de éxito de Productos Ganadores que tú selecciones y subas a nuestra AI donde te daremos la probabilidad de éxito de tu producto, usamos un algoritmo y te brindaremos datos para tomar las mejores decisiones.</p>
              <p>LexCopy Pro: Te Permite hacer copys estructurados para Facebook Ads de tu producto y olvidarte de tener copys con mucha información y poca eficaz.</p>
              <p>LexVidPro: Te permite hacer Guiones estructurados para tu video de tu Producto para que puedas tener más claridad a la hora de grabar contenido de tu producto o editarlo, así sacaras varios creativos.</p>
              <p>LexLanding Pro: Te brinda información estructurada para tu landing para darte como guía a la hora de desarrollarla.</p>
              <p>Finance Pro: Con Finance Pro podrás calcular tu rentabilidad de tu producto con nuestros cuadros automatizados y podrás ver cuanto ganas realmente por producto, configurado para 3 Países (Colombia, Ecuador, Perú) próximamente más países.</p>
            </Panel>
            <Panel
              header="¿Cuáles son los beneficios de utilizar Lexcom?"
              key="3"
            >
              <p>1. Te ahorrarás Cientos o Miles de Dólares en malos testeos en publicidad de productos que no son buenos así filtrando con Lexcom los mejores y evitar ello.</p>
              <p>2. Te ahorrarás mucho tiempo en haber desarrollado en vano páginas de producto y videos de productos que no eran ganadores.</p>
              <p>3. Aumenta tu Productividad un 70% más a la hora de iniciar tu e-commerce, ya que te brindamos las herramientas principales para que lo ejecutes.</p>
              <p>4. Podrás olvidarte de Pensar tediosos guiones o formas de editar un video para tu producto gracias a LexVid Pro.</p>
              <p>5. Deja de agobiarte con Copys largos generados por otra AI que no son estructurados para Facebook Ads, y saca diferentes propuestas con solo un clic.</p>
              <p>6. Ahórrate tiempo pensando en la información de tu landing con LexLanding Pro podrás tener una, guía de como hacerlo y así sacar las mejores landings donde llegarán tus clientes a la hora de visitar la información de tu producto gracias al tráfico generado con Facebook Ads.</p>
              <p>7. Aumenta tu Probabilidad de éxito a la hora de comenzar tu ecommerce de Productos y ser parte del Club Rentable Ecommerce.</p>
            </Panel>
            <Panel
              header="¿Qué medidas de seguridad tiene Lexcom para proteger la privacidad de los usuarios?"
              key="4"
            >
              <p>Nuestra Web es Segura y los datos de los usuarios son totalmente privados y están protegidos que ingresen a nuestra AI.</p>
            </Panel>
            <Panel
              header="¿Cuáles son los costos asociados con el uso de Lexcom?"
              key="5"
            >
              <p>Lexcom tiene diferentes tarifas mensuales que parten desde los 19,90$ a 49.90$ de forma mensual eso depende qué funciones quieres tener, ello lo encontrarás en la parte de planes.</p>
            </Panel>
            <Panel
              header="¿Qué sucede si no estoy satisfecho con los servicios proporcionados por Lexcom?"
              key="6"
            >
              <p>El cliente tiene una prueba gratuita por 6 días, después de eso se efectuará el pago del plan que haya elegido. Es importante comunicarse a soporte por cualquier inconveniente en nuestra web.</p>
            </Panel>
            <Panel
              header="¿Puedo cancelar mi suscripción o dejar de utilizar los servicios de Lexcom en cualquier momento?"
              key="7"
            >
              <p>Procedimientos para cancelar una suscripción o dejar de utilizar los servicios de Lexcom, normal puedes hacerlo en configuraciones anular suscripción pero solo se anulará la del próximo mes eso quiere decir si pagas un 2 de mayo se renueva 2 de junio si cancelas no se cobrará junio mayo ya se efectuó el pago.</p>
            </Panel>
            <Panel
              header="¿Lexcom AI es una Primera Versión información para los primeros clientes?"
              key="8"
            >
              <p>Los nuevos usuarios que ingresen, ya que es una primera versión de nuestra AI, a veces pueden presentar algunos errores, pero no son graves solo eran como pequeños bugs, y ello, pero pasará muy poco. Lo avisamos para que lo consideren, recuerden que es una primera versión y es totalmente normal.</p>
            </Panel>
          </Collapse>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Faq;