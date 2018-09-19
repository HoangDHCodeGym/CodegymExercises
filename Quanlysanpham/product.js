let Product = function(name) {
    this.name = name;
    this.editName = function(newName) {
        this.name = newName;
    }
}