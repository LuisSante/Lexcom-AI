import axiosInstance, { axiosInstancewithoutPermissions } from "../axios";
import { useEffect } from "react";

import welcome from "../../assets/welcome.svg";
import plane from "../../assets/plane.svg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const redirect_oauth = () => {
    navigate("/auth");
  };

  const getGoogleAuthCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    return code;
  };

  const googleLogin = async () => {
    const code = getGoogleAuthCode();
    if (code) {
      try {
        const res = await axiosInstancewithoutPermissions.post(
          "dj-rest-auth/google/",
          {
            code: code,
          }
        );
        const { access } = res.data;
        // const { access, user } = res.data;
        localStorage.setItem("access_token", access);
        axiosInstance.defaults.headers["Authorization"] = "JWT " + access;
        // localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
      } catch (error) {
        console.error("Error en la autenticación:", error);
      }
    }
  };

  useEffect(() => {
    googleLogin();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-[140px] md:px-0 w-full md:max-w-[1000px]">
      <div
        className="py-2 font-thin text-3xl text-center sm:text-2xl md:text-5xl"
        style={{
          background: "linear-gradient(91deg, #ff1cf7 2.26%, #00f0ff 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Determina la probabilidad
        <br />
        de éxito de productos ganadores
      </div>
      <img
        src={welcome}
        className="mt-[-17px] mb-[14px] w-[55%] h-[55%]"
        alt="welcome"
      />
      <div className="mt-[-39px] font-poppins text-center text-white text-xs sm:text-lg md:text-[20px] leading-relaxed md:leading-[33px] tracking-[0.72px]">
        Potencia tu negocio y ahórrate miles de dólares y mucho tiempo a la hora
        de testear
        <br />
        malos productos y ten más asertividad con LexCom asi logrando tener más
        precisión.
      </div>

      <div className={`flex max-w-[250px] justify-center mt-[50px]`}>
        <button
          onClick={redirect_oauth}
          className="font-poppins border-white border-4 border-solid text-xs bg-[#1d1d68] hover:bg-white hover:border-black hover:font-semibold rounded-full w-full text-white hover:text-[#1d1d68] px-4 py-2"
        >
          Comenzar mi prueba gratuita por 7 dias y escalar mis ventas
        </button>
      </div>
      <img src={plane} className="w-[90%]" alt="plane" />
    </div>
  );
};

export default Welcome;
