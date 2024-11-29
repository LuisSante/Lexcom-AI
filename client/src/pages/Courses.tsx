import UpCommerceIcon from "../assets/bg_lexcom.jpeg";
import {
  BookOutlined,
  CalculatorOutlined,
  RobotOutlined,
} from "@ant-design/icons";

const Courses = () => {
  return (
    <div className="max-w-[90rem] w-full bg-[#1D1D18] text-[#FCFAF9] px-40 pt-10 pb-28 border-none">
      <p className="font-bold text-2xl">¡Hola!</p>
      <p className="text-base">
        ¿Estas listo para hacer crecer su negocio de comercio electrónico?
      </p>
      <h2>Nuestro kit de herramientas</h2>
      <div className="flex gap-x-6 text-base pb-10">
        <div className="max-w-80 w-full shadow-white border-solid rounded-lg p-4 bg-[#282625] border-[0.2px]">
          <div className="flex gap-x-2 font-bold">
            <RobotOutlined />
            Creador de LexcomAI
          </div>
          <p>
            Genere investigaciones de productos, textos y creatividades
            publicitarias de alta conversación.
          </p>
        </div>
        <div className="max-w-80 w-full shadow-white border-solid rounded-lg p-4 bg-[#282625] border-[0.2]">
          <div className="flex gap-x-2 font-bold">
            <BookOutlined />
            Plantillas de IA
          </div>
          <p>
            Plantillas especializadas de marketing y redacción de textos
            publicitarios.
          </p>
        </div>
        <div className="max-w-80 w-full shadow-white border-solid rounded-lg p-4 bg-[#282625] border-[0.2]">
          <div className="flex gap-x-2 font-bold">
            <CalculatorOutlined />
            Herramientas Financieras
          </div>
          <p>
            Optimice su ROI, márgenes de ganancia y proyecciones financieras.
          </p>
        </div>
      </div>
      <div>
        <h2>Centro de Aprendizaje</h2>
        <div className="flex justify-center p-5 gap-4 border-[0.2px] border-solid border-white rounded-xl">
          <img className="w-1/2 h-80 rounded-xl" src={UpCommerceIcon} />
          <div className="flex-col flex max-w-1/2 justify-between">
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 items-center flex justify-center bg-[#44403C] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#FFFFFF"
                    fill="none"
                  >
                    <path
                      d="M2 8C2 9.34178 10.0949 13 11.9861 13C13.8772 13 21.9722 9.34178 21.9722 8C21.9722 6.65822 13.8772 3 11.9861 3C10.0949 3 2 6.65822 2 8Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.99414 11L6.23925 16.6299C6.24415 16.7426 6.25634 16.8555 6.28901 16.9635C6.38998 17.2973 6.57608 17.6006 6.86 17.8044C9.08146 19.3985 14.8901 19.3985 17.1115 17.8044C17.3956 17.6006 17.5816 17.2973 17.6826 16.9635C17.7152 16.8555 17.7274 16.7426 17.7324 16.6299L17.9774 11"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4734 9.5V16.5M20.4734 16.5C19.6814 17.9463 19.3312 18.7212 18.9755 20C18.8983 20.455 18.9596 20.6843 19.2732 20.8879C19.4006 20.9706 19.5537 21 19.7055 21H21.2259C21.3876 21 21.5507 20.9663 21.6838 20.8745C21.9753 20.6735 22.0503 20.453 21.9713 20C21.6595 18.8126 21.2623 18.0008 20.4734 16.5Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p>Centro de aprendizaje</p>
              </div>
              <p>
                Explora nuestro completo centro de educación sobre el comercio
                electrónico y mejora tus habilidades
              </p>
            </div>
            <div className="">
              <a
                className="flex justify-center items-center w-full text-white bg-[#44403C] py-2 cursor-pointer rounded-md font-medium "
                href="https://www.upcommercelatam.com/"
              >
                IR A LA ESCUELA{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
