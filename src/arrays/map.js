import Location from "../classes/locationClass.js";

// Define locations
const Meadows = new Location('Meadows', 'The rolling meadows are laid out in front of you, filled with colorful wildflowers and gently swaying grass.');
const Forest = new Location('Forest', 'You find yourself surrounded by towering trees, their branches forming a canopy overhead, filtering sunlight and casting dappled shadows on the forest floor.');
const Beach = new Location('Beach', 'Soft sand stretches out in front of you, meeting the sparkling azure waters of the ocean. The sound of waves crashing against the shore fills the air.');
const Mountains = new Location('Mountains', 'You stand at the base of majestic mountains, their peaks disappearing into the clouds. The air is crisp and cool, and the views are breathtaking.');
const Castle = new Location('Castle', 'Before you rises an ancient castle, its turrets reaching towards the sky. The stone walls hold secrets of bygone eras, and the air is thick with a sense of history.');
const Cave = new Location('Cave', 'You enter a dark cave, the walls adorned with glistening stalactites and stalagmites. The air is cool and musty, and echoes of dripping water reverberate through the chamber.');

// Initialize a 2D array with locations
const worldMap = [
  [Meadows, Meadows, Meadows, Meadows, Meadows],
  [Beach, Forest, Castle, Forest, Cave],
  [Mountains, Meadows, Meadows, Meadows, Meadows],
  [Cave, Beach, Forest, Castle, Meadows],
  [Meadows, Meadows, Meadows, Meadows, Mountains]
];

export default worldMap;
