import './App.css';
import   Testimonio from './componentes/Testimonio';
import { dataTestimonios } from './data/data';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp: </h1>

        {dataTestimonios.map(testimonio => (
          <Testimonio key={testimonio.name}
          name={testimonio.name}
          country={testimonio.country}
          img={testimonio.img}
          position={testimonio.position}
          company={testimonio.company}
          testimonial={testimonio.testimonial}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
