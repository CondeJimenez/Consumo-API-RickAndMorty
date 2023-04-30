import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [infoCharacter, setInfoCharacter] = useState({});
  const [idCharacter, setIdCharacter] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`)
      .then((res) => res.json())
      .then((character) => setInfoCharacter(character));
  },[idCharacter]);

  const handleChangeCharacterId = () => {
    setIdCharacter(idCharacter + 1);
  };

  console.log("characterS", infoCharacter);

  // Muestrame un character de la API | Listo
  // muestra su nombre | Listo
  // muestra su imagen | Listo
  // muestra su genero | Listo
  // muestra su especie | Listo
  // muestralo los elementos centrados y alineados al centro

  return (
    <section className="card" >

      <h1>Nombre: {infoCharacter.name}</h1>
      <h1>Genero: {infoCharacter.gender} </h1>
      <h1>Especie: {infoCharacter.species}</h1>
      <h1 className="img">
        Imagen: 
        <img src={infoCharacter.image} alt={`imagen de ${infoCharacter.name}`}/>
      </h1>
      {/* TE DEJO LA IMG NORMITA, ok Eu ,  Muchas gracias Eu */}
      {/* YOU CAN DO IT */}  
      <button onClick={handleChangeCharacterId}>Cambiar Personaje</button>
      
     
    </section>
  );
}

export default App;
