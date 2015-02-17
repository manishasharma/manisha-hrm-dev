if (Meteor.isClient) {
Template.HR.rendered = function(){
$('#toggle-one').bootstrapToggle();
$('#toggle').bootstrapToggle();
$('#toggle2').bootstrapToggle();
$('#toggle3').bootstrapToggle();
};
Template.HR.events({
   "submit #hr_form": function (event, template) {
   var id = template.find('#user_id').value;
    var emp_info =$('#toggle-one').prop("checked");
    var address_book =$('#toggle').prop("checked");
    var  Biometric_System =$('#toggle2').prop("checked");
    var Folder_Updated =$('#toggle3').prop("checked");
    //console.log("emp_info",emp_info);
    alert('manisha');
    Meteor.call('insert',id,emp_info,address_book,Biometric_System,Folder_Updated,function(err,res){
      if (err) {
       // alert(err);
       }
      else{
        console.log("aaa",res);
        //Router.go('/doc/'+id);
      }
   });
  
    return false;
  }
  
   
  });

Template.HR.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    }
})

Template.HR.helpers({
    employee1: function () {
            emp1= empid.reactive();
            return emp1;
    }
})
 //hr = new MysqlSubscription('hr_doc',1);

Template.HR.helpers({
    hr: function () {
            console.log("hr",hr);
            hrs= hr.reactive();
            console.log("hrs1",hrs);
            return hrs;
    },
     
    
    isMyCheckboxChecked: function(value){
      console.log('value',value);
         if(value == 'true')
         {
         // console("checked");
         return 'checked';
         }else{ //console.log("false");
            return '';
         }
        
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







