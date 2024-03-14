import { ConfigProvider, Card, Timeline, Descriptions, Button, Popover } from 'antd';
import './../css/TimelineDemo.css';

const Tutorial: React.FC = () => {

  const content = (
    <div>
      <p>Al explorar el mapamundi, anota el porcentaje de interés</p>
      <p> del país en el que venderás tu producto. </p>
    </div>
  )

  const content1 = (
    <div>
      <p>La primera calculadora te ofrecerá cosas estandares</p>
      <p> Además podras calcular el cpa y cvu y el precio de tus productos</p>
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
          mode={'alternate'}
          items={[
            {
              color: 'green',
              children: (
                <>
                  <Card title="GeoTrend Lex" bordered={false} style={{ width: '100%' }}>
                    <p>Explora la pestaña de ranking de ventas en la parte izquierda de tu pantalla. Con esta pestaña podrás conocer si tu producto tiene un buen interés y en que países es el más buscado.</p>
                    <Popover content={content}>
                      <Button type="dashed" danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              children: (
                <>
                  <Card title="Budget Control Pro" bordered={false} style={{ width: '100%' }}>
                    <Descriptions.Item label="UserName">Te ofrecemos tres calculadoras para que de esta forma puedas saber que precio debe tener tu producto, el CPA y CPU asi como estadisticas generales.</Descriptions.Item>
                    <p></p>
                    <Popover content={content1}>
                      <Button type="dashed"danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              children: (
                <>
                  <Card title="LexIA Determination" bordered={false} style={{ width: '100%' }}>
                    <Descriptions.Item label="UserName">Aquí conocerás si tu producto tendrá éxito o no a la hora de vender. Completa el formulario y no olvides poner el interés que anotaste anteriormente.</Descriptions.Item>
                    <p></p>
                    <Popover content={content2}>
                      <Button type="dashed"danger>¡Vamos!</Button>
                    </Popover>
                  </Card>
                </>
              ),
            },
            {
              color: 'blue',
              children: (
                <>
                  <Card title="TikTok TrendFeed" bordered={false} style={{ width: '100%' }}>
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
                  <Card title="Prompt Generators" bordered={false} style={{ width: '100%' }}>
                    <Descriptions.Item label="UserName">¿Tu producto es ganador, pero no sabes como estructurar tu video para que sea una venta segura?
                      En esta pestaña obtendrás ideas de como hacerlo, te brindamos una estructura ganadora para que puedas estructurar tu video y generar tus copys.</Descriptions.Item>
                    <p></p>
                    <Popover content={content4}>
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
                  <Card title="Lexcom Courses" bordered={false} style={{ width: '100%' }}>
                    <Descriptions.Item label="UserName">¿No sabes como continuar vendiendo? Te ofrecemos una amplia variedad de cursos que te permitiran continuar tu camino al exito.</Descriptions.Item>
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
