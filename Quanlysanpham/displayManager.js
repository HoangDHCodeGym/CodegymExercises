let DisplayManager = function (addButtonId, addTextInputId, editButtonId, editTextInputId, deleteButtonId, tableId, NotificationId, NotificationContentId) {
    this.addButton = $("#" + addButtonId);
    this.addTextInput = $("#" + addTextInputId);
    //this.firstEditButton = $(".EDIT-BUTTON");
    this.editButton = $("#" + editButtonId);
    this.editTextInput = $("#" + editTextInputId);
    //this.firstDeleteButton = $(".DELETE-BUTTON");
    this.deleteButton = $("#" + deleteButtonId);
    this.notification = $("#" + NotificationId);
    this.notificationContent = $("#" + NotificationContentId);
    this.table = $("#" + tableId);
    let products = new ProductManager();
    let self = this;
    this.elementID = '';

    function notify(message) {
        self.notificationContent.html("<p>"+message+"</p>");
        self.notification.modal("show");
        setTimeout(function(){
            self.notification.modal('hide')
          }, 400);
    }


    function elementHTMLContent(id, name) {
        let button_edit = "<button id='e-"+id+"'class='btn btn-primary EDIT-BUTTON' data-toggle='modal' data-target='#IDeditProduct' onclick='pickID("+id+")'>Edit</button>";
        let button_delete = "<button id='d-"+id+"'class='btn btn-primary DELETE-BUTTON' data-toggle='modal' data-target='#IDdeleteConfirmation' onclick='pickID("+id+")'>Delete</button>";
        let result = "<tr> <td id='c-"+id+"'>" + name + "</td> <td>" + button_edit + "</td> <td>" + button_delete + "</td> </tr>";
        return result;
    }
    //Add new product
    this.addButton.click(function () {
        if (self.addTextInput.val() != '') {
            products.list.push(self.addTextInput.val());
            notify("The product has been added successfully");
            let pid = products.list.length - 1; //last element of product list
            let result = elementHTMLContent(pid, products.list[pid]);
            self.table.append(result);
            self.addTextInput.val('');
        } else {
            alert("Please input some text");
        }
    });

    //Edit a product
    this.editButton.click(function() {
        let position = Number(self.elementID);
        let newname = self.editTextInput.val();
        if (newname != "") {
            products.editProduct(position,newname);
            $("#c-"+self.elementID).text(newname);
            notify("The product's name has been edited successfully");
        } else {
            alert("Please input some text");
        }
    });

    this.deleteButton.click(function() {
        let position = Number(self.elementID);
        products.deleteProduct(position);
        $("#c-"+self.elementID).parent().remove();
        notify("The product has been deleted successfully");
    })
}