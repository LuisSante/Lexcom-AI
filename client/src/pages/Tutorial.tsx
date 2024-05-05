import { ConfigProvider, Card, Timeline, Descriptions, Button, Popover } from 'antd';
import './../css/TimelineDemo.css';

const Tutorial: React.FC = () => {

  const content1 = (
    <div>
      <p>La primera calculadora te ofrecerá cosas estandares</p>
      <p> Además podras calcular el CPA y CVU y el precio de tus productos</p>
    </div>
  )


  const content2 = (
    <div>
      <p>Recuerda que el éxito de tu producto tambien</p>
      <p> se ve influido de si esta quemado o no</p>
    </div>
  )

  const content3 = (
    <div>
      <p>Recuerda hacer búsquedas en el idioma</p>
      <p> de tu público objetivo</p>
    </div>
  )
  const content4 = (
    <div>
      <p>Cada estructura  generada puede variar</p>
      <p> por lo que te sugerimos guardarlos</p>
    </div>
  )
  const content5 = (
    <div>
      <p>Tenemos cupones y descuentos disponibles</p>
    </div>
  )
  return (
    <div className='tutorial'>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              colorText: '#fff',
              dotBorderWidth: 2,
            },
          },
        }}
      >
        <Timeline
          items={[
            {
              color: 'green',
              children: (
                <>
                  <Card title="AutoPro Finance" bordered={false}>
                    <Descriptions.Item label="UserName">Te ofrecemos tres calculadoras para que de esta forma puedas saber que precio debe tener tu producto, el CPA y CPU asi como estadísticas generales.</Descriptions.Item>
                    <p></p>
                    <Popover content={content1}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'purple',
              children: (
                <>
                  <Card title="LexIA Determination" bordered={false}>
                    <Descriptions.Item label="UserName">Aquí conocerás si tu producto tendrá éxito o no a la hora de vender. Completa el formulario y no olvides poner el interés que anotaste anteriormente.</Descriptions.Item>
                    <p></p>
                    <Popover content={content2}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'blue',
              children: (
                <>
                  <Card title="TikTok TrendFeed" bordered={false}>
                    <Descriptions.Item label="UserName">Visualizar a la competencia es clave del éxito, ya que podrás conocer sus puntos débiles y usarlo a tu favor.
                      Con esta ventana tendrás los tiktoks más populares de tu producto, úsalos de inspiración para elaborar tu propio video ganador.</Descriptions.Item>
                    <p></p>
                    <Popover content={content3}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'red',
              children: (
                <>
                  <Card title="LexGeneration / LexVid Pro" bordered={false}>
                    <Descriptions.Item label="UserName">¿Tu producto es ganador, pero no sabes como estructurar tu video para que sea una venta segura?
                      En esta módulo obtendrás ideas de como hacerlo, te brindamos una estructura ganadora para que puedas estructurar tu video. </Descriptions.Item>
                    <p></p>
                    <Popover content={content4}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'lime-10',
              children: (
                <>
                  <Card title="LexGeneration / LexLanding Pro" bordered={false}>
                    <Descriptions.Item label="UserName">Encanta a tu audiencia con mensajes que cautivan. Nuestro servicio de copywriting te ayuda a destacar entre la multitud, comunicando de manera efectiva el valor de tu producto o servicio. Haz que tus palabras vendan por ti.</Descriptions.Item>
                    <p></p>
                    <Popover content={content4}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'magenta',
              children: (
                <>
                  <Card title="LexGeneration / LexVid Pro" bordered={false}>
                    <Descriptions.Item label="UserName">¿Quieres que tus páginas web atraigan y conviertan a tus visitantes? Descubre cómo este módulo te brinda una estructura para tus landing pages..</Descriptions.Item>
                    <p></p>
                    <Popover content={content4}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'indigo',
              children: (
                <>
                  <Card title="Lexcom Courses" bordered={false}>
                    <Descriptions.Item label="UserName">¿No sabes como continuar vendiendo? Te ofrecemos una amplia variedad de cursos que te permitirán continuar tu camino al éxito.</Descriptions.Item>
                    <p></p>
                    <Popover content={content5}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },

          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Tutorial;
