Template.register.events({
    
  
    "click #signup-form": function (event, template) {
    var user = template.find('#signup-username').value;
    var password = template.find('#signup-password').value;
    
    alert(user);
     Meteor.call('login_form', user,password, function(err,res){
      if (err) {
        alert("error");
       
      }
      else
      {
        alert("success");
      }
     
      });
  
    return false;
  }
   
  });

//Template.table.events({
//    "click #submit": function (event, template) {
//        event.preventDefault();
//    alert("submit");
//    var id = this.id ;
//     Router.go('/pending/'+id);
//    
//   
//   
//    console.log(id);
//    
//    }
//   
//  });

Template.table.events({
    "click #action": function (event, template) {
    event.preventDefault();
    var id = this.id ;
    Router.go('/doc/'+id);
    console.log(id);
    }
    });

Template.home.events({
    "click #Intiate": function (event, template) {
    event.preventDefault();
    var id = template.find('#sel1').value;
    Router.go('/doc/'+id);
    console.log(id);
    }
    });


emp = new MysqlSubscription('allemployee');
if (Meteor.isClient) {
    Template.home.helpers({
          emp: function () {
            emp= emp.reactive();
            return emp;
            
            
    }


       
    });
   //console.log("emp",emp);
}

data = new MysqlSubscription('alldata');
if (Meteor.isClient) {
    Template.table.helpers({
          data: function () {
            console.log("data",data);
            datas= data.reactive();
            return datas;
            
        }
    })
}
Template.table.helpers({
        getid: function(id){            
            console.log (id);
         
       
            //   
            //pending_record = new MysqlSubscription('pending_record',id);
            //
            //console.log(pending_record,pending_record.length);
            //
            //pending_record1 = new MysqlSubscription('pending_record1',id);
            //console.log(Object.keys(pending_record1).length);
            //pending_record2 = new MysqlSubscription('pending_record2',id);
            //pending_record3 = new MysqlSubscription('pending_record3',id);
        
            Meteor.call('pending',id,function(err,res){            
                if (err) {
                  alert(err);
                 }
                 else{
                    console.log("employee Status=", res);
                      if (res===4) {
                          Session.set('status_of_'+id, 'complete');         
                          //res( 'complete' );        
                      }else{
                          Session.set('status_of_'+id, 'pending');
                          //console.log("pending");               
                      }
                  if (!err && res) {
                      
                  }
                 }        
            });
            
            Meteor.call('doc_pending',id,function(err,res){
             
                if (err) {
                  alert("manisha");
                 }
                 else{
                    console.log("document", res);
                      if (res) {
                          Session.set('doc_of_'+id, res);         
                          //res( 'complete' );        
                      }else{
                          Session.set('doc_of_'+id, 'complete');
                          //console.log("pending");               
                      }
                
                 }        
            });
            
            
            
        }
    });

Template.table.emp_status = function(id) {
  return Session.get('status_of_'+id);
};


Template.table.doc_status = function(id) {
  return Session.get('doc_of_'+id);
};   







