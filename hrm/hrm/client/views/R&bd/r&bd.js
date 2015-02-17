 Template.rbd.rendered = function () {
  paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("rbd1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var rbd1=res;
                Session.set('myMethodResult2', rbd1);
	      
	       console.log("res",rbd1);
               
               });


  
//$('.toggle-one').bootstrapToggle();
};
