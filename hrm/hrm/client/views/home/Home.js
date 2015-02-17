Template.employee.events({
  "click #init_join": function (event, template) {
    event.preventDefault();
    var emp_name =template.find('#ename').value.trim();
    console.log(emp_name);
    var emp_id = template.find('#empid').value.trim();
    if (emp_name == "---Select Employee--") {
    
   
       $('#login-error1').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
       });

   }
   else{
      Router.go('tabs',{_id:emp_id});
    console.log(emp_id);
   }

   
  }

});
alemployee = new MysqlSubscription('allemployee');

if (Meteor.isClient) {
Template.employee.helpers({
    employee: function () {
            emp= alemployee.reactive();
            //console.log("emp",emp);
            return emp;
    }
})

Template.employee_document_table.events({
    "click #action": function (event, template) {
    event.preventDefault();
    var id = this.eid ;
    Router.go('/tabs/'+id);
    //console.log(id);
    }
    });



Template.employee_document_table.helpers({
    employname: function () {
            emp= alemployee.reactive();
            //console.log("documenttable",emp);
            return emp;
    },
    pending:function(id){
    
    var aa1=Meteor.call("pending",id,
            function(err,res){
                if (err) {
                 }
                 else{
                  if (res == 4) {
                   Session.set('status_of_'+id, 'complete');
                    //res( 'complete' );        
                      }else{
                          Session.set('status_of_'+id, 'pending');
                          //console.log("pending");               
                      }
                
                 } 
               
               });
    
     Meteor.call('doc_pending',id,function(err,res){
             
            if (err) {
              
                 }
                 else{
                  res1 = res.replace(/^[,\s]+|[,\s]+$/g, '');
                      if (res) {
                        Session.set('doc_of_'+id, res1);         
                       }
                
                 }        
            });
    },status:function(id){
    return Session.get('status_of_'+id);
    },
    doc_status:function(id){
    return Session.get('doc_of_'+id);
    }
    
    
})

}