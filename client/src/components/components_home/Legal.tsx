import { Modal } from "antd";

export const termofUse = () => {
    Modal.info({
        title: 'Términos y Condiciones',
        content: (
            <div>
                <h2>Las siguientes condiciones se aplican al uso de nuestros servicios:</h2>
                <h3>Registro y utilización de cuentas:</h3>
                <p>
                    El uso de nuestros servicios requiere necesariamente la creación de una cuenta de usuario con nosotros. El registro es gratuito y cuenta con 2 búsquedas gratuitas. <br />
                    Usted es responsable de todas las actividades que se produzcan en su cuenta y se compromete a mantener segura su contraseña y a no compartirla con terceros. Si tiene conocimiento de cualquier uso no autorizado de su cuenta, deberá notificárlo inmediatamente.
                </p>
                <h3>
                    Productos digitales:
                </h3>
                <p>
                    Nuestros productos son exclusivamente fichas digitales que pueden utilizarse para utilizar el modelo de nuestra plataforma. Una vez realizado el pago, las búsquedas correspondientes se abonan en su cuenta en tiempo real.
                </p>
                <h3>
                    Condiciones de uso:
                </h3>
                <p>
                    Las búsquedas adquiridos sólo podrán utilizarse para los fines indicados en nuestra plataforma. No está permitido ceder o vender a terceros.
                </p>
                <h3>
                    Expiración de búsquedas y cuentas, así como cancelación de cuentas:
                </h3>
                <p>
                    Con el fin de garantizar la administración y el mantenimiento eficaces de nuestra plataforma, nos reservamos el derecho a eliminar las cuentas y las búsquedas no utilizados tras un periodo de inactividad de al menos un año. Los búsquedas pierden su valor al darse de baja. <br />
                    Esto se hace con el fin de utilizar nuestros recursos de manera eficiente y para garantizar que los usuarios no puedan reclamar sus búquedas no utilizados después de un período significativo de inactividad. Le recomendamos que acceda regularmente a su cuenta y utilice sus búsquedas.<br />
                    {/* Usted mismo tiene derecho a eliminar su cuenta en cualquier momento. Tenga en cuenta que al eliminar su cuenta se borrarán irrevocablemente todos los datos almacenados en ella y lo que haya comprado.<br /> */}
                    {/* Nos reservamos el derecho a eliminar su cuenta y poner fin a su uso de nuestros servicios si incumple estas Condiciones Generales o si tenemos conocimiento de cualquier uso indebido o ilegal de su cuenta. */}
                </p>
                <h3>
                    Cambios y rescisión de servicios:

                </h3>
                <p>
                    Nos reservamos el derecho de cambiar o interrumpir nuestros servicios en cualquier momento, incluyendo, pero no limitado a, en el caso de que nuestra cooperación con Google Cloud o cualquier otro proveedor de servicios se termine o debido a circunstancias fuera de nuestro control.<br />
                    En caso de que se produzca un cambio sustancial en nuestros Servicios o se ponga fin a los mismos, nos esforzaremos por notificárselo con antelación y tomaremos todas las medidas necesarias para minimizar el impacto sobre usted. <br />
                    Sin embargo, no garantizamos ni aceptamos responsabilidad alguna por cualquier cambio, fallo, interrupción o finalización de nuestros servicios, y no podemos garantizar que podamos proporcionar reembolsos u otras formas de compensación en tales casos.<br />
                </p>
                <h3>
                    Precios y condiciones de pago:
                </h3>

                <p>
                    Los precios de nuestros productos se indican en la descripción del producto en la pagina principal.
                </p>
            </div>
        ),
        onOk() { },
        width: '40%',
    });
};