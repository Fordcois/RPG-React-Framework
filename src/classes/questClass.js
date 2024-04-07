class Quest {
  constructor(name, description, questType, goal) {
    this.name = name;
    this.description = description;
    this.questType = questType;
    this.goal = goal;
    this.completed = false;
  }

  checkQuestComplete(currentLocation) {
    if (!this.completed) {
      if (this.questType === "Location" && currentLocation.name === this.goal) {
        console.log("Quest Complete");
        this.completed = true;
      }
    }
  }
}

export default Quest;
