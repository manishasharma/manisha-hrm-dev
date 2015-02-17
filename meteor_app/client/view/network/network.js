if(Meteor.isClient){
Template.network.rendered = function(){
$('#n1').bootstrapToggle();
$('#n2').bootstrapToggle();
$('#n3').bootstrapToggle();
$('#n4').bootstrapToggle();
$('#n5').bootstrapToggle();
$('#n6').bootstrapToggle();
$('#n7').bootstrapToggle();
$('#n8').bootstrapToggle();
$('#n9').bootstrapToggle();

};

Template.network.events({
   "click #submit": function (event, template) {
   var id = template.find('#user_id').value;
    
    console.log("id manisha",id);
    var static_IP =$('#n1').prop("checked");
    var Gmail_Id =$('#n2').prop("checked");
    var Skype_Id =$('#n3').prop("checked");
    var Redmine_Account =$('#n4').prop("checked");
    var Bitbucket_Account =$('#n5').prop("checked");
    var Git_Account =$('#n6').prop("checked");
    var Dropbox_Account =$('#n7').prop("checked");
    var Database_User =$('#n8').prop("checked");
    var FTP_account =$('#n9').prop("checked");
    
    console.log("emp_info",static_IP);
    Meteor.call('insert_network1',id,static_IP,Gmail_Id,Skype_Id,Redmine_Account,Bitbucket_Account,Git_Account,Dropbox_Account,Database_User
                ,FTP_account,function(err,res){
      if (err) {
        //alert(err);
       }
      else{
             
      }
   });
  
    return false;
  }
   
  });
Template.network.helpers({
    employee1: function () {
        
            emp1= empid.reactive();
            //console.log("emp",emp1);
            return emp1;
    },
    employee: function () {
          //  console.log("employee",employee);
            emp= employee.reactive();
            return emp;
    },
     isMyCheckboxChecked: function(value){
        //console.log("value",value);
        if(value == 'true')
            return 'checked';
        else
            return '';
        
  },
   net: function () {
            nets= net.reactive();
            //console.log("manisha",nets);
            return nets;
    },
      isMyselected:function(name,username){
     if (name === username) {
     return 'selected';
   }
   else{
      return "";
   }
  }
})
}
