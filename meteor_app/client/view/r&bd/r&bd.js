if(Meteor.isClient){
Template.rbd.rendered = function(){
$('#rd1').bootstrapToggle();
$('#rd2').bootstrapToggle();
$('#rd3').bootstrapToggle();

};
Template.rbd.events({
   "click #submit1": function (event, template) {
   var id = template.find('#user_id').value;
    
    console.log("id manisha",id);
    var Biddle =$('#rd1').prop("checked");
    var cover_letter =$('#rd2').prop("checked");
    var google_drive =$('#rd3').prop("checked");
    
    console.log("emp_info",Biddle);
    Meteor.call('insert_rbd',id,Biddle,cover_letter,google_drive,function(err,res){
      if (err) {
        //alert(err);
       }
      else{
       
         
        //console.log("aaa",res);
      }
   });
  
    return false;
  }
   
  });


Template.rbd.helpers({
    employee1: function () {
          //  console.log("employee",employee);
            emp1= empid.reactive();
            return emp1;
    },
    employee: function () {
          //  console.log("employee",employee);
            emp= employee.reactive();
            return emp;
    },
     rbd: function () {
           console.log("employee",rbd);
            rbds= rbd.reactive();
            return rbds;
    },
     isMyCheckboxChecked: function(value){
         if(value == 'true')
         return 'checked';
        else
            return '';
        
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

