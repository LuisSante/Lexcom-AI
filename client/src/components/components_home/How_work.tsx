import '../../css/styles_home/how_work.css'
import line_chart from '../../assets/line_chart.svg'
import shop from '../../assets/shop.svg'
import kevin_systrom from '../../assets/kevin_systrom.svg'
import primero from '../../assets/1.svg'
import michael from '../../assets/michael_lexcom.svg'
import woman from '../../assets/woman.svg'
import undefined from '../../assets/undefined.svg'

interface ComponentProps {
  id: string;
}

const How_work: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className='container-page-how-work' id={id}>
      <div className="div-27">
        <div className="div-28">
          <div className="div-29" id="div-29">
            <div className="div-30">
              <div className="div-31">
                {/* <span style="color: rgb(244 237 237)">¿Qué es un</span>
                            <span style="">Producto Ganador?</span> */}
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
                        Con nuestra IA olvidate de invertir en servicios de prueba
                        para cada aplicacion de tus productos ganadores
                      </div>
                    </div>
                  </div>
                  <div className="column-7">
                    <div className="div-38">
                      <img src={shop} />
                      <div className="div-39">Acorde al mercado actual</div>
                      <div className="div-40">
                        Gracias al aprendizaje automatico, los resultados de tus
                        busquedas estaran siempre de acorde a las nuevas tendencias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-44">
              <div className="div-45">
                <span>¿¡Cómo</span>
                <span>LexCom</span>
                <span>Para productos Ganadores</span>
                <span>Trabaja</span>
                <span>!?</span>
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
                    {/* <div className="div-49" style="display: flex;align-content: center;justify-content: space-between;"> */}
                    <div className="div-49">
                      {/* <div style="display: flex;justify-content: center;align-content: center;"> */}
                      <div>
                        <img />
                      </div>


                      <div className="div-56">Registrate e ingresa</div>
                      {/* <img loading="lazy" srcset="{% static 'img/dc1.png' %}" className="img-16" /> */}
                      <img src={michael} />
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
                      {/* <div style="display: flex;justify-content: center;align-content: center;"> */}
                      <div>
                        <img src={primero}></img>
                      </div>
                      <div className="div-56">
                        Detalla el producto que planeas vender
                      </div>
                      {/* <img loading="lazy" srcset="{% static 'img/img3.png' %}" className="img-16" /> */}
                      <img src={woman} />
                      <div className="div-57">
                        Podras detallar sesde imagenes hasta tipo de producto, esto
                        ayudara a hacer mas especifica tu busqueda
                      </div>
                    </div>
                  </div>
                  <div className="column-11">
                    <div className="div-58">
                      {/* <div style="display: flex;justify-content: center;align-content: center;"> */}
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" fill="white" className="bi bi-3-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                        </svg>
                      </div>
                      <div className="div-56">
                        Visualiza si tendra exito en ventas o no
                      </div>
                      {/* <img loading="lazy" srcset="{% static 'img/ps3.png' %}" className="img-16" /> */}
                      <img src={undefined} />
                      <div className="div-63">
                        Proporcionamos, no solo una respuesta afirmativa/negativa,
                        con nosotros podras ver estadisticas de exito de ventas de
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
              <div className="div-70">
                <div className="div-71">kevin systrom</div>
                <div className="div-72">
                  Co-fundador de Instagram
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </div>
  )
}

export default How_work