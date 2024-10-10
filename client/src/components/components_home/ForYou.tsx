import ForYouItems from '../logic/component_home/ForYouItems'
import '../../css/styles_home/for_you.css'

const ForYou = () => {
    return (
        <div className="flex flex-col items-center mt-[100px] mb-[120px]">
            <div className="font-bold text-4xl text-center text-white capitalize">
                <span >Como saber si </span>
                <span style={{ color: '#0561ac' }}>LexCom </span>
                <span >es para </span>
                <span style={{ color: '#0561ac' }}>Ti</span>
            </div>
            <div className="div-152">
                {ForYouItems.map((item, index) => (
                    <div key={index} className={(item.key % 2 === 1) ? "box-left" :
                        (item.key % 2 === 0) ? "box-right" : ''}>
                        {item.text}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ForYou