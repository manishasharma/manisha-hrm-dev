Template.table.events({
    "click #submit": function (event, template) {
    event.preventDefault();
    var id = this.id ;
    Router.go('/pending/'+id);
    console.log(id);
    }
    });
//pending = new MysqlSubscription('pending');
//pending_emp = new MysqlSubscription('pending_emp');
//pending_rbd = new MysqlSubscription('pending_rbd');
if (Meteor.isClient) {
    Template.pending.helpers({
          pending: function () {
           
            
            pending= pending.reactive();
            return pending;
            
        },
       
         pending_emp: function () {
         console.log("data",pending_emp);
         pending_emp= pending_emp.reactive();
         return pending_emp;
            
        },
        pending_rbd: function () {
            
            
            pending_rbd= pending_rbd.reactive();
            return pending_rbd;
            
        },
        
          pending_network: function () {
           
            pending_network= pending_network.reactive();
            return pending_network;
            
        },
         pending_document: function () {
        
            pending_document= pending_document.reactive();
            return pending_document;
         }
            
        
        
        
     });
    
}
