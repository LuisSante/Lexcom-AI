import "../../css/testimonials.css"

const testimonials = [
  { id: 1, name: 'Ana G.', text: '¡Increíble plataforma! Descubrí qué productos vuelan de los estantes y optimiza tus ventas con sus herramientas de e-commerce integradas.', stars: "★★★★★", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/foto-titulo-Yun.jpg' },
  { id: 2, name: 'Luis M.', text: 'Con esta plataforma, mi tienda online se ha vuelto imparable. Sus datos sobre productos más vendidos son oro puro.', stars: "★★★★☆", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpy5CIYElFyHqVgnOQ-Ci427-Rs3kLqSpVffuOUzmNw&s' },
  { id: 3, name: 'Sofía P.', text: 'Desde que empecé a usar esta plataforma, mis ventas se han disparado. Sus herramientas de e-commerce son realmente efectivas.', stars: "★★★★★", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XH-ZxgwguDjXaI0c4I7yiBgH7aWiEtuunFNb7YxvhQkjjklVYN74_4Blqsg2wpnHs-E&usqp=CAU' },
  { id: 4, name: 'Carlos Q.', text: 'Esta plataforma no solo te dice qué productos son los más populares, sino que también te da las herramientas para venderlos con éxito.', stars: "★★★★★", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color-4.jpg' },
  { id: 5, name: 'Lucía R.', text: 'Gracias a esta plataforma, ahora puedo anticiparme a las tendencias y adaptar mi estrategia de ventas con confianza.', stars: "★★★★☆", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color.jpg' },
  { id: 6, name: 'Jorge S.', text: 'Increíble herramienta, me ha ayudado a identificar los productos más populares y rentables en el mercado local.', stars: "★★★★★", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/infantil-color-2.jpg' },
  { id: 7, name: 'Daniela T.', text: 'La plataforma proporciona datos precisos sobre las tendencias de ventas, lo que facilita la toma de decisiones estratégicas.', stars: "★★★★☆", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/infantil-color-1-1.jpg' },
  { id: 8, name: 'Manuel U.', text: 'La suscripción vale cada centavo, el retorno de inversión es evidente desde las primeras semanas de uso.', stars: "★★★★★", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/pasaporte-40-x-50-mm.jpg' },
  { id: 9, name: 'Sara V.', text: 'Muy útil. Gracias a su ayuda, pude optimizar mi estrategia de ventas, ofreciendo los productos más demandados con eficacia y aumentando mis ingresos.', stars: "★★★★☆", picture: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color-2.jpg' },
  { id: 10, name: 'David W.', text: 'Altamente recomendado. Su capacidad para identificar los productos más vendidos combinada con sus herramientas de e-commerce fue clave para el éxito de mi negocio en línea.', stars: "★★★★★", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbKyH5e2j1gF9hjLTmcckcLfaEYw4BxC1W33NBxJAQYAPDQjDWUa36iRoKdKbFUNJ3dk&usqp=CAU' },
];

interface CardType {
  key: number;
  text: string;
  name: string;
  picture: string;
  stars: string;
}

const Card: React.FC<CardType> = ({ key, text, name, picture, stars }) => {
  return (
    <div className="flex flex-col justify-center items-start bg-transparent shadow-sharp-bl mr-4 px-4 py-3 rounded-lg w-[325px] h-[183px] text-white lg:overflow-hidden f" key={key} >
      <div className="line-clamp-4 w-[293px] h-25 text-[16px]">
        {text}
      </div>
      <div className="flex gap-2 mt-4">
        <img alt={name} src={picture} className="rounded-full w-14 h-14" />
        <div className="font-semibold text-[14px]">
          <div className="flex flex-col">
            <div>
              {name}
            </div>
            <div className="text-[#FFD700] text-[20px]">
              {stars}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialCarousel = () => {
  return (
    <div className="bannerWrapper">
      <div className="wrapper">
        <div className="card">
          {testimonials.map((item, index) => (
            <Card key={index} text={item.text} name={item.name} picture={item.picture} stars={item.stars} />
          ))}
        </div>
        <div className="card">
          {testimonials.map((item, index) => (
            <Card key={index} text={item.text} name={item.name} picture={item.picture} stars={item.stars} />
          ))}
        </div>
      </div>
    </div>
  );
};




export default TestimonialCarousel;