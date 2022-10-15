import './home.css';
import Ubicaciones from '../../components/Ubicacion/Ubicaciones';
import { useContext } from 'react';
import { UbicacionesContext } from '../../context/UbicacionesContext';



const Home = () => {
  const { ubicaciones } = useContext(UbicacionesContext)
  //<Locations locations={locations}></Locations>
  return (
    <>
      <div className='main-container'>
        <h1 className='title'>Ubicaciones</h1>
        <Ubicaciones ubicaciones={ubicaciones}></Ubicaciones>
      </div>
    </>
  );
};

export default Home;