/* eslint-disable react/prop-types */
import { MdNorth,MdEast,MdSouth,MdWest } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";


function Compass({move,validdirections}) {

const NorthIsValid = validdirections.includes('north')
const EastIsValid = validdirections.includes('east')
const SouthIsValid = validdirections.includes('south')
const WestIsValid = validdirections.includes('west')

return (
<div className="StatusBarBox" style={{width:'142px',justifyContent:'center'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '140px',alignContent:'flex-end' }}>
        <div>
          <MdNorth
            title='North'
            className={ NorthIsValid ? 'CompassArrow' : 'invalidCompassArrow'}
            onClick={() => (NorthIsValid ? move('north') : null)}
          />
        </div>
        <div>
          <MdWest 
            title='West'
            className={ WestIsValid ? 'CompassArrow' : 'invalidCompassArrow'}
            onClick={() => (WestIsValid ? move('west') : null)}
          /> 

        <GiTreasureMap className='CompassArrow'/>
        <MdEast 
          title='East'
          className={ EastIsValid ? 'CompassArrow' : 'invalidCompassArrow'}
          onClick={() => (EastIsValid ? move('east') : null)}
        />  </div>
        <div> 
        <MdSouth 
          title='South'
          className={ SouthIsValid ? 'CompassArrow' : 'invalidCompassArrow'}
          onClick={() => (SouthIsValid ? move('south') : null)}
        /></div>
  </div>
</div>



);

}

export default Compass;
