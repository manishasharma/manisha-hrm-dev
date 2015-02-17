Template.tabs.helpers({
    employee1: function () {
          //  console.log("employee",employee);
            emp1= empid.reactive();
            console.log("emp",emp1);
            return emp1;
    }
})
Template.tabs.events({
    'submit #myform' : function(e, t) {
        
      e.preventDefault();
      var name1 =t.find('#res_name').value.trim();
      var Answer1=$('input[name=Answer1]:checked').val();
      var Answer2=$('input[name=Answer2]:checked').val();
      var Answer3=$('input[name=Answer3]:checked').val();
      var Answer4=$('input[name=Answer4]:checked').val();
     
      var emp_id=t.find('#empid').value.trim();
       var selectedPostId = Session.get(emp_id);
      //alert(name1);
      if (name1 == "") {
       $('#login-error').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
      Meteor.call("Inserthr1", name1, Answer1, Answer2,Answer3,Answer4,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("res",res);
                  var hrd=res;
               }
               });
      showAndDismissAlert("my", "Data Successfully Updated");
      
      }
      
      },
      
 })

 Template.hr.rendered = function () {
     paramid= Session.get("paramid");
    console.log("testt",paramid);
     Meteor.call("hrvalue1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var hr_value1=res;
                Session.set('myMethodResult5', hr_value1);
	      
	       console.log("res11",hr_value1);
               
               });
     
   

   
};


employee = new MysqlSubscription('allemployee');

  
if (Meteor.isClient) {
    
Template.hr.helpers({
    
  
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },hrdocs: function () {
        return Session.get('myMethodResult5');
          
    },isMyCheckboxChecked: function(value){
        //console.log("value",value);
        if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
    // console.log("op1",op1);
     //console.log("op2",op2);
        if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
 
})
function showAndDismissAlert(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}

//function showAndDismissAlert6(type, message) {
//    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';
//
//    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
//    $(".alert-messages").prepend(htmlAlert);
//
//    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
//    // Note: if we were appending, then should use last() instead of first()
//    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
//}
//    

}

Template.tabs.events({
    'submit #myform' : function(e, t) {
    e.preventDefault();
    
    var name1 =t.find('#res_name').value.trim();
    var Answer1=$('input[name=Answ1]:checked').val();
    var Answer2=$('input[name=Answ2]:checked').val();
    var Answer3=$('input[name=Answ3]:checked').val();
    var Answer4=$('input[name=Answ4]:checked').val();
    //var Answer5=$('input[name=Answ5]:checked').val();
    var Answer6=$('input[name=Answ6]:checked').val();
    var Answer7=$('input[name=Answ7]:checked').val();
    var Answer8=$('input[name=Answ8]:checked').val();
    var Answer9=$('input[name=Answ9]:checked').val();
    var Answer10=$('input[name=Answ10]:checked').val();
    var Answer11=$('input[name=Answ11]:checked').val();
    var Answer12=$('input[name=Answ12]:checked').val();
    var Answer13=$('input[name=Answ13]:checked').val();
    var Answer14=$('input[name=Answ14]:checked').val();
    var Answer15=$('input[name=Answ15]:checked').val();
    var Answer16=$('input[name=Answ16]:checked').val();
    var emp_id=t.find('#empid').value.trim();
  
     if (name1 == "") {
     
       
             $('#login-error1').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
    }
    else{
     
      Meteor.call("Insertdoc", name1, Answer1, Answer2,Answer3,Answer4,Answer6,Answer7,Answer8,Answer9,Answer10,Answer11,Answer12,Answer13,Answer14,Answer15,Answer16,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  //console.log(res);
               }
               });
      showAndDismissAlert1("my", "Data Successfully Updated");
      }
}
 })


if (Meteor.isClient) {
Template.document.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },
       employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },documentdocs: function () {
        return Session.get('myMethodResult4')
          
    },isMyCheckboxChecked: function(value){
        if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
            if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
})
function showAndDismissAlert1(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages1").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages1 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}


Template.tabs.events({
    'submit #myform' : function(e, t) {  
    e.preventDefault();
   
    var name1 =t.find('#res_name').value.trim();
    var Ans1=$('input[name=ans1]:checked').val();
    var Ans2=$('input[name=ans2]:checked').val();
    var Ans3=$('input[name=ans3]:checked').val();
    var emp_id=t.find('#empid').value.trim();
    //alert("data is successfully updated");
      //alert(emp_id);
      if (name1 == "") {
       $('#login-error2').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
      Meteor.call("Insertrbd", name1, Ans1,Ans2,Ans3,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manisha111",res);
                  var hrd=res;
               }
               });
      showAndDismissAlert2("my", "Data Successfully Updated");
    }
     
    }
 })


if (Meteor.isClient) {
Template.rbd.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },rbddocs: function () {
        return Session.get('myMethodResult2');
            return rbds;
          
    },isMyCheckboxChecked: function(value){
            if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
           if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
})
function showAndDismissAlert2(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages2").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages2 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}

Template.tabs.events({
    'submit #myform' : function(e, t) {  
    e.preventDefault();
    
    var name1 =t.find('#res_name').value.trim();
    var Ans12=$('input[name=ans1234]:checked').val();
    console.log('Ans1',Ans12);
    var Ans32=$('input[name=Ans32]:checked').val();
    var ans31=$('input[name=ans31]:checked').val();
    var Ans4=$('input[name=ans4]:checked').val();
    var Ans5=$('input[name=ans5]:checked').val();
    var Ans6=$('input[name=ans6]:checked').val();
    var Ans7=$('input[name=ans7]:checked').val();
    var Ans8=$('input[name=ans8]:checked').val();
    var Ans9=$('input[name=ans9]:checked').val();
    var emp_id=t.find('#empid').value.trim();
        if (name1 == "") {
       $('#login-error4').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
     
      Meteor.call("Insertnetwork",name1,Ans12,Ans32,ans31,Ans4,Ans5,Ans6,Ans7,Ans8,Ans9,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manisha12",res);
            
               }
               });
      showAndDismissAlert4("my", "Data Successfully Updated");
    }
    }
 })

if (Meteor.isClient) {
Template.network.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },networkdocs: function () {
        return Session.get('myMethodResult3');
          
    },isMyCheckboxChecked: function(value){
              if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
            if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
})
function showAndDismissAlert4(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages4").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages4 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}







