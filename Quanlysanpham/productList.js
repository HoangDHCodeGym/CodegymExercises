let ProductManager = function() {
    this.list = [];
/*    this.addNewProduct = function(id) {
        let name = document.getElementById(id).value;
        let product = new Product(name);
        this.list.push(product);
    } */
    this.deleteProduct = function(position) {
        let startPosition = Number(position);
        this.list.splice(startPosition,1);
    }
    this.editProduct = function(position, newName) {
        this.list[position] = newName;
    }
}