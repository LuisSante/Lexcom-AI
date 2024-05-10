import { Modal } from "antd";

export const termofUse = () => {

    Modal.info({
        title: 'Términos y Condiciones',
        content: (
            <ol>
                <li>
                    <strong>Privacidad:</strong> La IA respeta y protege tus datos personales según las leyes de privacidad aplicables, tus datos son totalmente privados y toda información brindada hacia nosotros.
                </li>
                <li>
                    <strong>Uso Adecuado:</strong> Utilizamos la AI de manera ética y legal. No la utilices para actividades ilegales o dañinas, es importante llevar el buen manejo de nuestro software y sus diversas herramientas.
                </li>
                <li>
                    <strong>Propiedad Intelectual:</strong> Reconoce que la AI y sus resultados pueden estar protegidos por derechos de autor u otras leyes de propiedad intelectual, nuestro modelo de software está registrado y no se puede imitar a menos que sea con nuestra previa autorización.
                </li>
                <li>
                    <strong>Exactitud de la Información:</strong> Aunque la IA hace su mejor esfuerzo para proporcionar información precisa, no garantiza la precisión completa. Siempre verifica la información crítica, es importante que la IA fue creada para acelerar procesos, por ende, iguales para poder usarla, mejor apóyate con tu criterio propio a la par que usas nuestra AI para sacarle el máximo beneficio.
                </li>
                <li>
                    <strong>Responsabilidad:</strong> La responsabilidad del uso de la IA recae en el usuario. La empresa detrás de la IA no se hace responsable por cualquier daño derivado del uso de la misma.
                </li>
                <li>
                    <strong>Actualizaciones y Mantenimiento:</strong> La empresa se reserva el derecho de actualizar y mantener la AI para mejorar su funcionamiento y seguridad.
                </li>
                <li>
                    <strong>Suspensión o Terminación del Servicio:</strong> La empresa puede suspender o terminar el servicio de la AI si se violan los términos y condiciones o por otras razones justificadas.
                </li>
                <li>
                    <strong>Modificaciones en los Términos:</strong> Los términos y condiciones pueden actualizarse ocasionalmente. Es responsabilidad del usuario revisarlos periódicamente.
                </li>
                <li>
                    <strong>Consentimiento:</strong> Al utilizar la AI, aceptas automáticamente estos términos y condiciones.
                </li>
            </ol>
        ),
        onOk() { },
        width: '38%',
    });
};