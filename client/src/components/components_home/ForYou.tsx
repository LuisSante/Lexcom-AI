import ForYouItems from '../logic/ForYouItems'
import '../../css/styles_home/for_you.css'

const ForYou = () => {
    return (
        <div className="div-150">
            <div className="div-151">
                <span >Como saber si </span>
                <span style={{color: '#0561ac'}}>LexCom </span>
                <span >es para </span>
                <span style={{color: '#0561ac'}}>Ti</span>
            </div>
            <div className="div-152">
                {ForYouItems.map((item, index) => (
                    <div key={index} className={(item.key%2 === 1) ? "box-left" : 
                                                (item.key%2 === 0) ? "box-right" : ''}>
                        {item.text}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ForYou