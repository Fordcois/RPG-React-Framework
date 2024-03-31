/* eslint-disable react/prop-types */
import { MdNorth,MdEast,MdSouth,MdWest } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";


function Compass({move}) {

return (
<div className="StatusBarBox" style={{width:'142px',justifyContent:'center'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '140px',alignContent:'flex-end' }}>
        <div> <MdNorth title='North' className='CompassArrow' onClick={() => move('north')}/></div>
        <div><MdWest className='CompassArrow' onClick={() => move('west')}/> 
        <GiTreasureMap className='CompassArrow'/>
        <MdEast className='CompassArrow' onClick={() => move('east')}/>  </div>
        <div> <MdSouth className='CompassArrow' onClick={() => move('south')}/></div>
  </div>
</div>



);

}

export default Compass;
