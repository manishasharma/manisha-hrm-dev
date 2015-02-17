//Template.documentation.rendered = function(){
//$('#check').bootstrapToggle();
//$('#check1').bootstrapToggle();
//$('#check2').bootstrapToggle();
//$('#check3').bootstrapToggle();
//$('#check4').bootstrapToggle();
//$('#check5').bootstrapToggle();
//$('#check6').bootstrapToggle();
//$('#check7').bootstrapToggle();
//$('#check8').bootstrapToggle();
//$('#check9').bootstrapToggle();
//$('#check10').bootstrapToggle();
//$('#check11').bootstrapToggle();
//$('#check12').bootstrapToggle();
//$('#check13').bootstrapToggle();
//$('#check14').bootstrapToggle();
//};

Template.documentation.events({
   "submit #docs": function (event, template) {
    var id=template.find("#user_id").value;
    console.log("user_id",id);
    var Offer_Letter  =$('#check').prop("checked");
    var ID_Proof  =$('#check1').prop("checked");
    var Address_Proof  =$('#check2').prop("checked");
    var Birth_certificate =$('#check3').prop("checked");
    var Training_Certificate  =$('#check4').prop("checked");
    var Salary_Slips  =$('#check5').prop("checked");
    var Photographs  =$('#check6').prop("checked");
    var Qualification_Certificates =$('#check7').prop("checked");
    var Experience_letter  =$('#check8').prop("checked");
    var Medical_Certificate   =$('#check9').prop("checked");
    var Account_Number  =$('#check10').prop("checked");
    var Joining_Report   =$('#check11').prop("checked");
    var Ethical_Standards  =$('#check12').prop("checked");
    var Employee_Agreement= $('#check13').prop("checked");
    var Appointment_Letter  =$('#check14').prop("checked");
    console.log("emp_info",Offer_Letter);
    
    Meteor.call('insert_doc',id,Offer_Letter,ID_Proof,Address_Proof,Birth_certificate,Training_Certificate,Salary_Slips
                ,Photographs, Qualification_Certificates,Experience_letter,Medical_Certificate,Account_Number,
                Joining_Report ,Ethical_Standards,Employee_Agreement,Appointment_Letter, function(err,res){
      if (err) {
        //alert(err);
       
      }
      else{
        // console.log("insert",res);
      }
     
      });
    
    return false;
  }
   
  });

if (Meteor.isClient) {
Template.documentation.helpers({
    employee: function () {
          //  console.log("employee",employee);
            emp= employee.reactive();
            //console.log("manisha",emp);
            return emp;
    }
})

Template.documentation.helpers({
    employee1: function () {
          //  console.log("employee",employee);
            emp1= empid.reactive();
            //console.log("emp",emp1);
            return emp1;
    },
    isMyCheckboxChecked: function(value){
        //console.log("sharma",value);
        if(value == 'true')
            return 'checked';
        else
            return '';
        
  },
  doc: function () {
          //  console.log("employee",employee);
            docs= doc.reactive();
            //console.log("manisha",docs);
            return docs;
    },
    isMyselected:function(name,username){
     if (name === username) {
     return 'selected';
   }
   else{
      return '';
   }
  }
  
})
}
