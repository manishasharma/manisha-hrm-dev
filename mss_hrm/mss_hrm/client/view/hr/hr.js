Template.HR.rendered = function(){
$('#toggle-one').bootstrapToggle();
         
$('#toggle').bootstrapToggle();
$('#toggle2').bootstrapToggle();
$('#toggle3').bootstrapToggle();
};
Template.HR.events({
   "submit #hr_form": function (event, template) {
   var id = template.find('#user_id').value;
    
    console.log("id",id);
    var emp_info =$('#toggle-one').prop("checked");
    var address_book =$('#toggle').prop("checked");
    var  Biometric_System =$('#toggle2').prop("checked");
    var Folder_Updated =$('#toggle3').prop("checked");
    console.log("emp_info",emp_info);
    Meteor.call('insert',id,emp_info,address_book,Biometric_System,Folder_Updated,function(err,res){
      if (err) {
        alert(err);
       }
      else{
        alert("aaa",res);
      }
   });
  
    return false;
  }
   
  });


employee = new MysqlSubscription('allemployee');

if (Meteor.isClient) {
Template.HR.helpers({
    employee: function () {
          //  console.log("employee",employee);
            emp= employee.reactive();
            console.log("manisha",emp);
            return emp;
    }
})
}




Template.HR.helpers({
    employee1: function () {
          //  console.log("employee",employee);
            emp1= empid.reactive();
            console.log("emp",emp1);
            return emp1;
    }
})


    
    

hr = new MysqlSubscription('hr_doc');
Template.HR.helpers({
    hr: function () {
          //  console.log("employee",employee);
            hrs= hr.reactive();
            console.log("manisha",hrs);
            return hrs;
    },
    isMyCheckboxChecked: function(value){
        console.log("value",value);
        if(value == 'true')
            return 'checked';
        else
            return '';
        
  },
  isMyselected:function(name,username){
   console.log("name",name);
   console.log("name111",username);
   if (name === username) {
     return 'selected';
   }
   else{
      return "";
   }
  }
})







