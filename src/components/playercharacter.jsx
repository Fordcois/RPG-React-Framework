import { FaHeart } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { GiBroadsword, GiShield } from "react-icons/gi";
import { BsBackpack4Fill } from "react-icons/bs";
import { RiTreasureMapLine } from "react-icons/ri";




function PlayerCharacter() {
const PlayerName = 'Sir Conrad ';
const PlayerHealth = 100;
const PlayerGold = 100;
const PlayerAttack = 0;
const PlayerDefence = 0;

  return (
<div className="StatusBarBox">
    <div id='CharacterStats' style={{display: 'flex'}}>
        <div className="StatusBarItem" title="Health"> <FaHeart className="InventoryIcon" />: {PlayerHealth} </div>
        <div className="StatusBarItem" title="Attack"> <GiBroadsword className="InventoryIcon" />: {PlayerAttack} </div>
        <div className="StatusBarItem" title="Defence"> <GiShield className="InventoryIcon" />: {PlayerDefence} </div>
    </div> 

    <div id='RightItems' style={{display: 'flex'}}> 
        <div className="StatusBarItem" title="Gold"> <FaCoins className="InventoryIcon" />: {PlayerGold} </div>
        <div className="StatusBarItem" title="Inventory"> <BsBackpack4Fill  className="InventoryIcon" /> </div>
        <div className="StatusBarItem" title="Map"> <RiTreasureMapLine className="InventoryIcon" /> </div>
    </div>
</div>
  );
}

export default PlayerCharacter;