import { useState } from 'react';
import PlayerCharacter from "./components/playercharacter.jsx";
import Compass from "./components/compass.jsx";
import worldMap from './arrays/map.js';
import Quest from './classes/questClass.js';


function App() {
  const [currentLocationCoord, setCurrentLocationCoord] = useState([0, 0]);
  const currentLocation = worldMap[currentLocationCoord[0]][currentLocationCoord[1]];
  const [ActiveQuest] = useState (new Quest ('Find the Castle','Locate The Castle in the woods','Location','Castle'))

  var validdirections = ['north','east','south','west']

// Remove impossible Directions
  //  Remove North
      if (currentLocationCoord[0] >= 4 || !currentLocation.exits.includes('north')){validdirections = validdirections.filter(direction => direction !== 'north');}
  //  Remove East
      if (currentLocationCoord[1] >= worldMap[currentLocationCoord[1]].length - 1 || !currentLocation.exits.includes('east')){validdirections = validdirections.filter(direction => direction !== 'east');}
  //  Remove South
      if (currentLocationCoord[0] <= 0 || !currentLocation.exits.includes('south')){validdirections = validdirections.filter(direction => direction !== 'south');}
  //  Remove West
      if (currentLocationCoord[1] <= 0 || !currentLocation.exits.includes('west')){validdirections = validdirections.filter(direction => direction !== 'west');}




// Current Quest - Check if complete
ActiveQuest.checkQuestComplete(currentLocation)



//  Move Function
  const move = (direction) => {
    console.log(`Moving ${direction}`);
    switch (direction) {
      case 'north':
        setCurrentLocationCoord(prevCoord => [prevCoord[0] + 1, prevCoord[1] ]);
        break;
      case 'south':
        setCurrentLocationCoord(prevCoord => [prevCoord[0] - 1, prevCoord[1] ]);
        break;
      case 'east':
        setCurrentLocationCoord(prevCoord => [prevCoord[0], prevCoord[1] + 1]);
        break;
      case 'west':
        setCurrentLocationCoord(prevCoord => [prevCoord[0], prevCoord[1] - 1]);
        break;
      default:
        console.error('Invalid direction');
    }
  };

  return (
    <div>
      <PlayerCharacter />
      <Compass validdirections={validdirections} move={move}/>
      <b>Current Location: </b><br/>
      X:{currentLocationCoord[1]} Y:{currentLocationCoord[0]}<br/>
      <b>Location Name:</b> <br/>
      {currentLocation.name}<br/>
      <b>Location Description:</b> <br/>
      {currentLocation.description}<br/>

      <b>Quest Information</b><br/>
      <b>Current Quest:</b><br/>
      {ActiveQuest.description}<br/>
      <b>Quest Complete:</b><br/>
      {ActiveQuest.completed.toString()}<br/>



    </div>
  );
}

export default App;
