import Location from "../classes/locationClass.js";

// Define locations
const Meadows = new Location('Meadows', 'The rolling meadows are laid out in front of you, filled with colorful wildflowers and gently swaying grass.',['north','east','south','west']);
const Forest = new Location('Forest', 'You find yourself surrounded by towering trees, their branches forming a canopy overhead, filtering sunlight and casting dappled shadows on the forest floor.',['north','east','south','west']);
const Beach = new Location('Beach', 'Soft sand stretches out in front of you, meeting the sparkling azure waters of the ocean. The sound of waves crashing against the shore fills the air.',['north','east','south','west']);
const Mountains = new Location('Mountains', 'You stand at the base of majestic mountains, their peaks disappearing into the clouds. The air is crisp and cool, and the views are breathtaking.',['north','east','south','west']);
const Castle = new Location('Castle', 'Before you rises an ancient castle, its turrets reaching towards the sky. The stone walls hold secrets of bygone eras, and the air is thick with a sense of history.',['north','east','south','west']);
const Cave = new Location('Cave', 'You enter a dark cave, the walls adorned with glistening stalactites and stalagmites. The air is cool and musty, and echoes of dripping water reverberate through the chamber.',['north','east','south','west']);
const NoNorth = new Location ('Dead End','The road ahead is blocked, you will have to journey back',['east','south','west'])
const TightCorridor = new Location ('A Tight Squeeze','There is a small gap between the rocks, you may be able to squeeze through',['east','west'])


// Initialize a 2D array with locations
const worldMap = [
  [Forest, Meadows, Meadows, Meadows, Castle],
  [Beach, Forest, Meadows, Forest, Cave],
  [Mountains, Meadows, Meadows, Meadows, Meadows],
  [NoNorth, Beach, TightCorridor, TightCorridor, Meadows],
  [Beach, Beach, Beach, Beach, Beach]
];

// Reverses the map so the display above matches North/South/East/West Display
worldMap.reverse();

export default worldMap;
