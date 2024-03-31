import { useState } from 'react';
import PlayerCharacter from "./components/playercharacter.jsx";
import Compass from "./components/compass.jsx";
import worldMap from './arrays/map.js';

function App() {

  const [currentLocationCoord, setCurrentLocationCoord] = useState([0, 0]);

  const move = (direction) => {
    console.log(`Moving ${direction}`);
    switch (direction) {
      case 'north':
        setCurrentLocationCoord(prevCoord => [prevCoord[0], prevCoord[1] + 1]);
        break;
      case 'south':
        setCurrentLocationCoord(prevCoord => [prevCoord[0], prevCoord[1] - 1]);
        break;
      case 'east':
        setCurrentLocationCoord(prevCoord => [prevCoord[0] + 1, prevCoord[1]]);
        break;
      case 'west':
        setCurrentLocationCoord(prevCoord => [prevCoord[0] - 1, prevCoord[1]]);
        break;
      default:
        console.error('Invalid direction');
    }
  };

  return (
    <div>
      <PlayerCharacter />
      <Compass move={move}/>
      <b>Current Location: </b><br/>
      X:{currentLocationCoord[0]} Y:{currentLocationCoord[1]}<br/>
      
      <b>Location Name:</b> <br/>
      {worldMap[currentLocationCoord[0]][currentLocationCoord[1]].name}<br/>
      <b>Location Description:</b> <br/>
      {worldMap[currentLocationCoord[0]][currentLocationCoord[1]].description}

      
    </div>
  );
}

export default App;
