 Template.network.rendered = function () {
    
     paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("net1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("network",res);
                 
               }
	       var net1=res;
                Session.set('myMethodResult3', net1);
	      
	       console.log("res",net1);
               
               });


   //console.log("data2",empid);
//$('.toggle-one').bootstrapToggle();
};

