import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/login/login';
import UbicacionCreation from './routes/Ubicacion/UbicacionCreation';
import { UbicacionesContext } from './context/UbicacionesContext';
import { useContext, useEffect } from 'react';
import UbicacionDisplay from './routes/Ubicacion/UbicacionDisplay';


function App() {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext)
  useEffect(() => {
    setUbicaciones([...ubicaciones,
      {
        id: 1,
        country: "San Salvador de Jujuy",
        lat:-24.1945700,
        lon:-65.2971200,
        temperature:14.2,
        windspeed:4.7,
        photo_url:`https://media.todojujuy.com/p/b1ed814cb60f25485bb501ccb3183f3a/adjuntos/227/imagenes/003/042/0003042326/san-salvador-jujuyjpg.jpg`,
    },
    { 
      id: 2,
      country: "San pedro de Jujuy",
      lat:-24.2333300,
      lon:-64.8667700,
      temperature:22.4,
      windspeed:4.7,
      photo_url:`https://www.vivijujuy.com.ar/wp-content/uploads/2016/06/municipalidad-san-pedro.jpg`,
    },
    {
      id: 3,
      country: "Salta Capital",
      lat:-24.785900,
      lon:-65.4116600,
      temperature:16.5,
      windspeed:4.7,
      photo_url:`https://www.argentinaenviaje.com/wp-content/uploads/2019/01/salta.jpg`,
    }
  ])
  }, []);

  return (
      <div className='App'>
        <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='ubicacion/create' element={<UbicacionCreation/>}/>
            <Route path='ubicacion/:id' element={<UbicacionDisplay/>} />
        </Route>
        </Routes>
      </div>
  );
}

export default App;
