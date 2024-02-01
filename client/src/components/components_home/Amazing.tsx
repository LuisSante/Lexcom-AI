import '../../css/styles_home/amazing.css';
import robotlexcom from '../../assets/robot_lexcom.svg'

const Amazing = () => {
    return (
        <>
            <div className="div-182">
                <div className="div-183">
                    <div className="div-184">
                        <span className="">Vamos a </span>
                        <span style={{ color: '#0561ac' }}>Ganar </span>
                        <span style={{}}>algo </span>
                        <span style={{ color: '#0561ac' }}>Increible </span>
                        <span style={{}}>juntos!</span>
                    </div>
                    <div className="div-185">
                        Pruebe nuestros servicios sin compromiso durante 7 días.
                        <br />
                        Si no queda satisfecho, le devolvemos su dinero.
                        <br />
                        ¡Sin riesgos, garantizado!
                    </div>
                </div>
                <div className="div-148">
                    {/* <div className="div-187" onclick="showRegister()">Comenzar</div> */}
                    <a className="div-187" >Comenzar</a>
                </div>
            </div>
            <div className="div-188">
                <img loading="lazy" src={robotlexcom} className="img-back" />
            </div>
        </>
    )
}

export default Amazing