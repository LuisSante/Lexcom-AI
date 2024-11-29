import { useState } from "react";
import NavbarPricing from "../components/components_dashboard/NavbarPricing";
import About from "../components/components_home/About";
import Faq from "../components/components_home/FAQ";
import { useNavigate } from "react-router-dom";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: string;
    yearly: string;
  };
  planDescription: string;
  features: string[];
}

const PricingTab = (props: PricingTabProps) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    localStorage.setItem("selectedPlan", props.planName);
    navigate("/dashboard");
  };

  return (
    <>
      <div className={`h-full ${props.popular ? "" : ""}`}>
        <div className="relative flex flex-col h-full px-6 pt-4 rounded-2xl bg-black border-white shadow shadow-white">
          {/* <div className="absolute bg-gradient-to-tr from-white to-gray-100 opacity-5 w-full h-full inset-0 top-0"></div> */}
          {props.popular && (
            <div className="absolute top-9 right-0 mr-6 -mt-4">
              <div className="inline-flex gap-x-2 items-center text-xs font-semibold py-1.5 px-3 bg-[#44403C] text-white rounded-full shadow-sm shadow-slate-950/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9.62069C19 12.1999 17.7302 14.1852 15.7983 15.4917C15.3483 15.796 15.1233 15.9482 15.0122 16.1212C14.9012 16.2942 14.8633 16.5214 14.7876 16.9757L14.7287 17.3288C14.5957 18.127 14.5292 18.526 14.2494 18.763C13.9697 19 13.5651 19 12.7559 19H10.1444C9.33528 19 8.93069 19 8.65095 18.763C8.3712 18.526 8.30469 18.127 8.17166 17.3288L8.11281 16.9757C8.03734 16.5229 7.99961 16.2965 7.88968 16.1243C7.77976 15.9521 7.55428 15.798 7.10332 15.4897C5.1919 14.1832 4 12.1986 4 9.62069C4 5.4119 7.35786 2 11.5 2C12.0137 2 12.5153 2.05248 13 2.15244"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 2L16.7579 2.69703C17.0961 3.61102 17.2652 4.06802 17.5986 4.40139C17.932 4.73477 18.389 4.90387 19.303 5.24208L20 5.5L19.303 5.75792C18.389 6.09613 17.932 6.26524 17.5986 6.59861C17.2652 6.93198 17.0961 7.38898 16.7579 8.30297L16.5 9L16.2421 8.30297C15.9039 7.38898 15.7348 6.93198 15.4014 6.59861C15.068 6.26524 14.611 6.09613 13.697 5.75792L13 5.5L13.697 5.24208C14.611 4.90387 15.068 4.73477 15.4014 4.40139C15.7348 4.06802 15.9039 3.61102 16.2421 2.69703L16.5 2Z"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 19V20C13.5 20.9428 13.5 21.4142 13.2071 21.7071C12.9142 22 12.4428 22 11.5 22C10.5572 22 10.0858 22 9.79289 21.7071C9.5 21.4142 9.5 20.9428 9.5 20V19"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                Most Popular
              </div>
            </div>
          )}
          <div className="mb-5">
            <div className="text-slate-200 font-semibold mb-1 text-4xl">
              {props.planName}
            </div>
            <div className="text-sm text-white mb-5">
              {props.planDescription}
            </div>
            <div className="inline-flex items-baseline mb-2">
              <span className="text-slate-200 font-bold text-3xl">$</span>
              <span className="text-slate-200 font-bold text-4xl">
                {props.yearly ? props.price.yearly : props.price.monthly}
              </span>
              <span className="text-white font-medium">
                {props.yearly ? "per year" : "per month"}
              </span>
            </div>
            <a
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg no-underline bg-transparent border-white border-1 border-solid  py-2.5 text-sm font-medium text-white shadow-sm hover:bg-white hover:text-[#44403C] hover:opacity-45"
              onClick={handleGetStarted}
            >
              Get Started
            </a>
          </div>
          <div className="text-slate-200 font-medium mb-3 text-2xl">
            Plan Includes:
          </div>
          <ul className="text-white text-sm space-y-2 grow">
            {props.features.map((feature, index) => {
              return (
                <li key={index} className="flex items-center -ml-9">
                  <svg
                    className="w-3 h-3 fill-white mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const PayWrapper = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <>
      <NavbarPricing />
      <div className="flex flex-col items-center justify-center bg-black text-white p-4">
        <div className="max-w-[90rem] w-full px-6">
          <h1 className="mt-[100px] text-center text-3xl font-semibold">
            Elige el plan de LexCom adecuado para ti
          </h1>
          <p className="text-center text-lg">
            LexCom te ofrece 5 búsquedas gratuitas al comenzar. <br /> Sin
            embargo, cuando estas acaben, dispones de opciones de pago para
            aumentar tus búsquedas.
          </p>
          <div className="flex justify-center mb-8 lg:mb-16">
            <div className="relative flex w-full max-w-xs p-1 rounded-md bg-[#1C1917]">
              <span
                className="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-0 w-1/2 bg-[#44403C] rounded-md shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                    isAnnual ? "translate-x-0" : "translate-x-full"
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-base font-medium h-8 rounded-md bg-transparent border-none ${
                  isAnnual ? "text-white" : "text-[#7D7875]"
                }`}
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
              >
                Yearly Billing
              </button>
              <button
                className={`relative flex-1 text-base font-medium h-8 rounded-md bg-transparent border-none ${
                  isAnnual ? "text-[#7D7875]" : "text-white"
                }`}
                onClick={() => setIsAnnual(false)}
                aria-pressed={isAnnual}
              >
                Monthly Billing
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 justify-center items-start lg:max-w-none">
            <PricingTab
              yearly={isAnnual}
              planName="Star Plan"
              price={{ yearly: "179", monthly: "19.90" }}
              planDescription="Ideal para quienes están comenzando en el mundo del e-commerce y quieren acelerar sus resultados. Con las poderosas herramientas de StarPlan, alcanzarás tus primeros objetivos con facilidad y rapidez"
              features={[
                "LexIA Determination / Determina la probabilidad de éxito de Productos con LexIA",
                "LexCopy Pro / Copys para anuncios en FB",
              ]}
            />
            <PricingTab
              yearly={isAnnual}
              popular={true}
              planName="LexPro"
              price={{ yearly: "217", monthly: "27.90" }}
              planDescription="Perfecto para emprendedores y empresas en crecimiento y equipos que buscan escalar su negocio de ecommerce impulsado con ia, ofreciendo las herramientas más indispensables del mercado para tener un ecommerce exitoso"
              features={[
                "Busqueda Ilimitadas de nombres de productos",
                "LexIA Determination / Determina la probabilidad de éxito de Productos con LexIA",
                "LexVid Pro / Guiones de videos Estructurados para tu producto",
                "LexCopy Pro / Copys para anuncios en FB",
                "LexLanding Pro / Landing estructuradas profesionales",
              ]}
            />
            <PricingTab
              yearly={isAnnual}
              planName="Lexcom Super Pro"
              price={{ yearly: "359", monthly: "49.90" }}
              planDescription="Perfecto para Empresas y emprendedores que quieran usar la tecnologia mas rapida de lexcom y acelerar sus procesos en su ecommerce y determinar la probabilidad de exito de si realmente un producto sera escalable o no asi teniendo un ecommerce exitoso"
              features={[
                "Busqueda Ilimitadas de nombres de productos",
                "LexIA Determination / Determina la probabilidad de éxito de Productos con LexIA",
                "LexVid Pro / Guiones de videos Estructurados para tu producto",
                "LexCopy Pro / Copys para anuncios en FB",
                "LexLanding Pro / Landing estructuradas profesionales",
                "30% de Descuento en MasterGrowth - Comunidad Skoolde habilidades de alto valor digitales",
              ]}
            />
          </div>
          <div className="pt-14">
            <Faq id="faq" />
          </div>
          <About id="about" />
        </div>
      </div>
    </>
  );
};

export default PayWrapper;
