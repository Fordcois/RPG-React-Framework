class Quest {
    constructor(name, description, completionDestination) {
        this.name = name;
        this.description = description;
        this.completionDestination = completionDestination;
        this.completed = false;
    }
    checkQuestComplete(currentLocation) {
        if (currentLocation.name === this.completionDestination){
            console.log('Quest Complete')
            this.completed = true
        }
    }
}

export default Quest;