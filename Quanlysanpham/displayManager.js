let DisplayManager = function (addButtonId, addTextInputId, editButtonId, editTextInputId, deleteButtonId, tableId, NotificationId, NotificationContentId) {
    this.addButton = $("#" + addButtonId);
    this.addTextInput = $("#" + addTextInputId);
    this.editButton = $("#" + editButtonId);
    this.editTextInput = $("#" + editTextInputId);
    this.deleteButton = $("#" + deleteButtonId);
    this.notification = $("#" + NotificationId);
    this.notificationContent = $("#" + NotificationContentId);
    this.table = $("#" + tableId);
    let products = new ProductManager();
    let self = this;
    let button_edit = "<button class='btn btn-primary' data-toggle='modal' data-target='#IDeditProduct'>Edit</button>";
    let button_delete = "<button class='btn btn-primary' data-toggle='modal' data-target='#IDdeleteConfirmation'>Delete</button>"
    //this.deleteNoti = $("#"+deleteNotiId);



    //Add new product
    this.addButton.click(function () {
        if (self.addTextInput.val() != '') {
            products.list.push(self.addTextInput.val());
            self.notificationContent.html("<p>New product has been added successfully</p>");
            self.notification.modal("show");
            let pid = products.list.length - 1; //last element of product list
            let result = "<tr id= p-'" + pid + "'> <td>" + products.list[pid] + "</td> <td>" + button_edit + "</td> <td>" + button_delete + "</td> </tr>";
            self.table.append(result);
        }
    });

    //Edit a product
}