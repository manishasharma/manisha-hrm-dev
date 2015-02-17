Template.employee.events({
    "click #relieving": function (event, template) {
    event.preventDefault();
   
    Router.go('/initiate');
    //console.log(id);
    }
    });