import '../../css/styles_home/how_work.css'
import line_chart from '../../assets/line_chart.svg'
import shop from '../../assets/shop.svg'
import kevin_systrom from '../../assets/kevin_systrom.svg'
import number_one from '../../assets/number_one.svg'
import number_two from '../../assets/number_two.svg'
import number_three from '../../assets/number_three.svg'


import michael from '../../assets/michael_lexcom.svg'
import woman from '../../assets/woman.svg'
import mostache from '../../assets/mostache_lexcom.svg'
import { ComponentProps } from '../../interface/home'

const How_work: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className='container-page-how-work' id={id}>
      <div className="div-27">
        <div className="div-28">
          <div className="div-29" id="div-29">
            <div className="div-30">
              <div className="div-31">
                <span style={{ color: 'rgb(244 237 237)' }}>¿Qué es un</span>
                <span style={{}}> Producto Ganador?</span>
              </div>
              <div className="div-32">
                Es aquel que la gente quiere comprar, te permite ganar dinero, no
                tiene demasiada competencia, puede crecer más en ventas, recibe
                buenas críticas, se adapta a las modas o estaciones, se anuncia bien
                y llega rápido a los clientes.
              </div>
              <div className="div-33">
                <div className="div-34">
                  <div className="column-6">
                    <div className="div-35">
                      <img src={line_chart} />
                      <div className="div-36">Costos 70% menos</div>
                      <div className="div-37">
                        Con nuestra IA olvídate de invertir en servicios de prueba
                        para cada aplicación de tus productos ganadores
                      </div>
                    </div>
                  </div>
                  <div className="column-7">
                    <div className="div-38">
                      <img src={shop} />
                      <div className="div-39">Acorde al mercado actual</div>
                      <div className="div-40">
                        Gracias al aprendizaje autmatico, los resultados de tus
                        búsquedas estarán siempre de acorde a las nuevas tendencias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-44">
              <div className="div-45">
                <span>¿¡Cómo </span>
                <span> LexCom funciona </span>
                <span>Para productos Ganadores</span>
                {/* <span>Trabaja</span> */}
                <span> !?</span>
              </div>
              <div className="div-46">
                ¿Te ha pasado elegir un producto sin estar seguro si se venderá
                bien? Ahora, puedes dejar atrás esas dudas gracias a nuestra IA para
                encontrar productos ganadores. Es como tener a tu mejor amigo que
                siempre te asegura el éxito. Esta herramienta hace que todo sea
                fácil y te garantiza un alto potencial de ventas. ¡No te preocupes
                más y aumenta tus ingresos con nuestra inteligencia artificial!
              </div>
              <div className="div-47">
                <div className="div-48" >

                  <div className="column-9">
                    <div className="div-49" style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }} >
                      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <img src={number_one} />
                      </div>
                      <div className="div-56">Regístrate e ingresa</div>
                      <img loading="lazy" src={michael} className="img-16" />
                      <div className="div-54">
                        Ofrecemos un periodo gratuito para que puedas probar todo
                        nuestro potencial!
                        <br />
                        Registrarse es simple, pero encontrar un producto ganador
                        sin LexCom no 😉
                      </div>
                    </div>
                  </div>

                  <div className="column-10">
                    <div className="div-55">
                      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <img src={number_two}></img>
                      </div>
                      <div className="div-56">
                        Detalla el producto que planeas vender
                      </div>
                      <img loading="lazy" src={woman} className="img-16" />
                      <div className="div-57">
                        Podras detallar sesde imágenes hasta tipo de producto, esto
                        ayudará a hacer más específica tu búsqueda
                      </div>
                    </div>
                  </div>

                  <div className="column-11">
                    <div className="div-58">
                      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <img src={number_three} />
                      </div>
                      <div className="div-56">
                        Visualiza si tendrá éxito en ventas o no
                      </div>
                      <img loading="lazy" src={mostache} className="img-16" />
                      <div className="div-63">
                        Proporcionamos, no solo una respuesta afirmativa/negativa,
                        con nosotros podras ver estadísticas de éxito de ventas de
                        tu producto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-64">
            <div className="div-65">“</div>
            <div className="div-66">
              <div className="div-67">
                <div className="column-12">

                </div>
                <div className="column-13">
                  <div className="div-68">
                    No importa cuánto ames un producto. Si no se vende, es un
                    fracaso, no un producto ganador
                  </div>
                </div>
                <div className="column-14">

                </div>
              </div>
            </div>
            <div className="div-68b">”</div>
            <div className="div-69">
              <img src={kevin_systrom} />
            </div>
          </div>
        </div>

      </div >
    </div>
  )
}

export default How_work