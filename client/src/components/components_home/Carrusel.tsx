import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { id: 1, name: 'Ana G.', text: '¡Increíble plataforma! Descubrí qué productos vuelan de los estantes y optimiza tus ventas con sus herramientas de e-commerce integradas.', stars: 5, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/foto-titulo-Yun.jpg' },
  { id: 2, name: 'Luis M.', text: 'Con esta plataforma, mi tienda online se ha vuelto imparable. Sus datos sobre productos más vendidos son oro puro.', stars: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpy5CIYElFyHqVgnOQ-Ci427-Rs3kLqSpVffuOUzmNw&s' },
  { id: 3, name: 'Sofía P.', text: 'Desde que empecé a usar esta plataforma, mis ventas se han disparado. Sus herramientas de e-commerce son realmente efectivas.', stars: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XH-ZxgwguDjXaI0c4I7yiBgH7aWiEtuunFNb7YxvhQkjjklVYN74_4Blqsg2wpnHs-E&usqp=CAU' },
  { id: 4, name: 'Carlos Q.', text: 'Esta plataforma no solo te dice qué productos son los más populares, sino que también te da las herramientas para venderlos con éxito.', stars: 5, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color-4.jpg' },
  { id: 5, name: 'Lucía R.', text: 'Gracias a esta plataforma, ahora puedo anticiparme a las tendencias y adaptar mi estrategia de ventas con confianza.', stars: 4, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color.jpg' },
  { id: 6, name: 'Jorge S.', text: 'Increíble herramienta, me ha ayudado a identificar los productos más populares y rentables en el mercado local.', stars: 5, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/infantil-color-2.jpg' },
  { id: 7, name: 'Daniela T.', text: 'La plataforma proporciona datos precisos sobre las tendencias de ventas, lo que facilita la toma de decisiones estratégicas.', stars: 4, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/infantil-color-1-1.jpg' },
  { id: 8, name: 'Manuel U.', text: 'La suscripción vale cada centavo, el retorno de inversión es evidente desde las primeras semanas de uso.', stars: 5, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/pasaporte-40-x-50-mm.jpg' },
  { id: 9, name: 'Sara V.', text: 'Muy útil. Gracias a su ayuda, pude optimizar mi estrategia de ventas, ofreciendo los productos más demandados con eficacia y aumentando mis ingresos.', stars: 4, photoUrl: 'https://vizualmexico.com.mx/wp-content/uploads/2019/08/titulo-color-2.jpg' },
  { id: 10, name: 'David W.', text: 'Altamente recomendado. Su capacidad para identificar los productos más vendidos combinada con sus herramientas de e-commerce fue clave para el éxito de mi negocio en línea.', stars: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbKyH5e2j1gF9hjLTmcckcLfaEYw4BxC1W33NBxJAQYAPDQjDWUa36iRoKdKbFUNJ3dk&usqp=CAU' },
];

const containerStyle = {
  maxWidth: 'calc(100% - 40px)',
  margin: '0 auto',
};

const testimonialStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  outline: 'none',
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};

const photoContainerStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginRight: '20px',
};

const photoStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const textContainerStyle = {
  flex: 1,
  marginLeft: '20px',
  marginRight: '20px',
};

const testimonialTextStyle = {
  fontSize: '18px',
  color: '#FFF',
  marginBottom: '10px',
};

const testimonialStarsStyle = {
  color: 'gold',
  fontSize: '20px',
};

const testimonialNameStyle = {
  fontStyle: 'italic',
  marginTop: '10px',
  fontWeight: 'bold',
  color: '#FFF',
};

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={testimonialStyle}>
            <div style={contentContainerStyle}>
              <div style={photoContainerStyle}>
                <img src={testimonial.photoUrl} alt={`Foto de ${testimonial.name}`} style={photoStyle} />
              </div>
              <div style={textContainerStyle}>
                <div style={{ ...testimonialTextStyle, textAlign: 'justify' }}>{testimonial.text}</div>
                <div style={testimonialNameStyle}>- {testimonial.name}</div>
                <div style={testimonialStarsStyle}>
                  {'★'.repeat(testimonial.stars)}
                  {'☆'.repeat(5 - testimonial.stars)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};




export default TestimonialCarousel;