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
import { TransitionX } from '../Section'
import TestimonialCarousel from './Carrusel'

const How_work: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className='container-page-how-work' id={id}>
      <div className="div-27">
        <div className="div-28">
          <div className="div-29" id="div-29">
            <div className="div-section">
              <TransitionX>
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
              </TransitionX>
            </div>
            <div className="div-section">
              <TransitionX>
                <div className="div-44">
                  <div className="div-47">
                    <div className="div-48" >
                      <TestimonialCarousel/>
                    </div>
                  </div>
                </div>
              </TransitionX>
            </div>
          </div>
          <div className="div-section">
            <TransitionX>
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
            </TransitionX>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How_work