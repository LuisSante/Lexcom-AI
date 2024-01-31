import '../../css/styles_home/welcome.css';
import welcome from '../../assets/welcome.svg'

const Welcome = () => {
    return (
        
        <div className="welcome-container">
        <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'></link>
            <div className="phrase-up">
                Encuentra facilmente tu
                <br />
                Producto Ganador
            </div>
            <div>
                <img src={welcome} alt="welcome"/>
            </div>
            <div className="phrase-down">
                Potencia tus ventas con nuestra IA de productos ganadores:
                <br />
                ¡Descubre el éxito en el comercio electrónico de manera confiable!
            </div>
        </div>
    )
}

export default Welcome