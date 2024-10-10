import line_chart from '../../assets/line_chart.svg'
import shop from '../../assets/shop.svg'
import kevin_systrom from '../../assets/kevin_systrom.svg'
import { ComponentProps } from '../../interface/home'
import { TransitionX } from '../Section'
import TestimonialCarousel from './Carrusel'

const How_work: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className="" id={id}>
      <div className="flex flex-col w-full mt-20 md:mt-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-col px-10" id="div-29">
            <div className="self-center">
              <TransitionX>
                <div className="flex flex-col max-w-[400px] md:max-w-full">
                  <div className="text-center text-4xl font-bold leading-[47px] capitalize">
                    <span className="text-[#f4eded]">¿Qué es un</span>
                    <span className="text-[#61a4fb]"> Producto Ganador?</span>
                  </div>
                  <div className="text-[#fdfbfb] text-center leading-[120%] self-center mt-10 max-w-[400px] md:max-w-[830px] md:mt-10">
                    Es aquel que la gente quiere comprar, te permite ganar dinero, no
                    tiene demasiada competencia, puede crecer más en ventas, recibe
                    buenas críticas, se adapta a las modas o estaciones, se anuncia bien
                    y llega rápido a los clientes.
                  </div>
                  <div className="mt-14 md:mt-10">
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-x-80 gap-y-12">
                      <div className="flex flex-col w-1/3 md:w-full">
                        <div className="flex flex-col items-center mt-3.5 md:mt-10">
                          <img src={line_chart} alt="Line Chart" className="w-[150px] h-[110px] object-cover" />
                          <div className="text-white text-lg font-bold leading-[115.789%] self-center whitespace-nowrap mt-6">
                            Costos 70% menos
                          </div>
                          <div className="text-white text-center w-[400px] leading-[171.429%] mt-3.5">
                            Con nuestra IA olvídate de invertir en servicios de prueba
                            para cada aplicación de tus productos ganadores
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[38%] md:w-full">
                        <div className="flex flex-col items-center flex-grow md:mt-10">
                          <img src={shop} alt="Shop" className="w-[150px] h-[130px] object-cover" />
                          <div className="text-white text-lg font-bold leading-[115.789%] self-center whitespace-nowrap mt-6">
                            Acorde al mercado actual
                          </div>
                          <div className="text-white w-[400px] text-center leading-[150%] mt-3.5">
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
            <div className="md:mt-16 mt-10">
              <TransitionX>
                <div className="flex flex-col max-w-[1042px] my-[190px] md:max-w-full md:my-10">
                  <div className="mt-10">
                    <div className="flex">
                      <TestimonialCarousel />
                    </div>
                  </div>
                </div>
              </TransitionX>
            </div>
          </div>
          <div className="-mt-10 md:mt-16 md:flex md:flex-col md:items-center md:justify-center">
            <TransitionX>
              <div className="flex flex-col md:flex justify-center items-center px-5 md:max-w-[800px]">
                <div className="text-[#aa0de8] text-center text-9xl md:text-9xl font-bold leading-[25%] self-start md:text-[450%] md:-mb-10">
                  "
                </div>
                <div className="mt-13">
                  <div className="flex md:flex-col md:items-stretch md:gap-0">
                    <div className="flex flex-col w-[11%] md:w-full">
                    </div>
                    <div className="flex flex-col w-[82%] md:w-full">
                      <div className="text-white text-center text-[254%] leading-[120%] max-w-[700px]">
                        No importa cuánto ames un producto. Si no se vende, es un
                        fracaso, no un producto ganador
                      </div>
                    </div>
                    <div className="flex flex-col w-[7%] ml-5 md:w-full">
                    </div>
                  </div>
                </div>
                <div className="text-[#0d9fe8] text-center md:text-9xl text-9xl font-bold leading-[120%] self-end md:text-[450%] md:mt-12">
                  "
                </div>
                <div className="flex justify-between items-start mt-5 md:-mt-10 mb-[5%] self-center w-[301px] max-w-full">
                  <img src={kevin_systrom} alt="Kevin Systrom" />
                </div>
              </div>
            </TransitionX>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How_work