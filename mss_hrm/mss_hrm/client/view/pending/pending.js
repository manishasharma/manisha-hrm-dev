Template.table.events({
    "click #submit": function (event, template) {
    event.preventDefault();
    var id = this.id ;
    Router.go('/pending/'+id);
    console.log(id);
    }
    });
//pending = new MysqlSubscription('pending');
pending_emp = new MysqlSubscription('pending_emp');
pending_rbd = new MysqlSubscription('pending_rbd');
if (Meteor.isClient) {
    Template.pending.helpers({
          pending: function () {
            console.log("datadadada",pending);
            
            pending= pending.reactive();
            return pending;
            
        },
       
         pending_emp: function () {
         console.log("data",pending_emp);
         pending_emp= pending_emp.reactive();
         return pending_emp;
            
        },
        pending_rbd: function () {
            console.log("manisha",pending_rbd);
            
            pending_rbd= pending_rbd.reactive();
            return pending_rbd;
            
        },
        
          pending_network: function () {
            console.log("manisha",pending_network);
            pending_network= pending_network.reactive();
            return pending_network;
            
        },
         pending_document: function () {
            console.log("manisha sharma",pending_document);
            pending_document= pending_document.reactive();
            return pending_document;
         }
            
        
        
        
     });
    
}
