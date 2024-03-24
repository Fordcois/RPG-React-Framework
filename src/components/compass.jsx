
import { MdNorth,MdEast,MdSouth,MdWest } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";


function Compass() {

function Move(direction){
    console.log (direction)
}


return (
<div className="StatusBarBox" style={{width:'142px',justifyContent:'center'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '140px',alignContent:'flex-end' }}>
        <div> <MdNorth title='North' className='CompassArrow' onClick={() => Move('North')}/></div>
        <div><MdWest className='CompassArrow' onClick={() => Move('West')}/> 
        <GiTreasureMap className='CompassArrow'/>
        <MdEast className='CompassArrow' onClick={() => Move('East')}/>  </div>
        <div> <MdSouth className='CompassArrow' onClick={() => Move('South')}/></div>
  </div>
</div>



);}
export default Compass;
