import { Modal } from "antd";

export const termofUse = () => {
    Modal.info({
        title: 'Términos y Condiciones',
        content: (
            <div>
                <p>Las siguientes condiciones se aplican al uso de nuestros servicios:</p>
                <p>
                    Registro y utilización de cuentas:<br/>
                    El uso de nuestros servicios requiere necesariamente la creación de una cuenta de usuario con nosotros. El registro es gratuito y cuenta con 2 busquedas gratuitas. <br/>
                    Usted es responsable de todas las actividades que se produzcan en su cuenta y se compromete a mantener segura su contraseña y a no compartirla con terceros. Si tiene conocimiento de cualquier uso no autorizado de su cuenta, deberá notificárnoslo inmediatamente.
                </p>
                <p>
                    Productos digitales:<br/>
                    Nuestros productos son exclusivamente fichas digitales que pueden utilizarse para utilizar el modelo de nuestra plataforma. Una vez realizado el pago, las busquedas correspondientes se abonan en su cuenta en tiempo real.
                </p>
                <p>
                    Condiciones de uso:<br/>
                    Las busquedas adquiridos sólo podrán utilizarse para los fines indicados en nuestra plataforma. No está permitido ceder o vender a terceros.
                </p>
                <p>
                    Expiración de busquedas y cuentas, así como cancelación de cuentas:<br/>
                    Con el fin de garantizar la administración y el mantenimiento eficaces de nuestra plataforma, nos reservamos el derecho a eliminar las cuentas y las busquedas no utilizados tras un periodo de inactividad de al menos un año. Los busquedas pierden su valor al darse de baja. <br/>
                    Esto se hace con el fin de utilizar nuestros recursos de manera eficiente y para garantizar que los usuarios no puedan reclamar sus buquedas no utilizados después de un período significativo de inactividad. Le recomendamos que acceda regularmente a su cuenta y utilice sus busquedas.<br/>
                    Usted mismo tiene derecho a eliminar su cuenta en cualquier momento. Tenga en cuenta que al eliminar su cuenta se borrarán irrevocablemente todos los datos almacenados en ella y lo que haya comprado.<br/>
                    Nos reservamos el derecho a eliminar su cuenta y poner fin a su uso de nuestros servicios si incumple estas Condiciones Generales o si tenemos conocimiento de cualquier uso indebido o ilegal de su cuenta.
                </p>
                <p>
                    Cambios y rescisión de servicios:<br/>
                    Nos reservamos el derecho de cambiar o interrumpir nuestros servicios en cualquier momento, incluyendo, pero no limitado a, en el caso de que nuestra cooperación con Google Cloud o cualquier otro proveedor de servicios se termine o debido a circunstancias fuera de nuestro control.<br/>
                    En caso de que se produzca un cambio sustancial en nuestros Servicios o se ponga fin a los mismos, nos esforzaremos por notificárselo con antelación y tomaremos todas las medidas necesarias para minimizar el impacto sobre usted. <br/>
                    Sin embargo, no garantizamos ni aceptamos responsabilidad alguna por cualquier cambio, fallo, interrupción o finalización de nuestros servicios, y no podemos garantizar que podamos proporcionar reembolsos u otras formas de compensación en tales casos.<br/>
                </p>
                <p>
                    Precios y condiciones de pago:<br/>
                    Los precios de nuestros productos se indican en la descripción del producto en la pagina principal.
                </p>
            </div>
        ),
        onOk() {},
        width: '80%',
    });
};