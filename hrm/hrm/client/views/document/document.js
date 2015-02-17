 Template.document.rendered = function () {
    paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("doc1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var doc1=res;
                Session.set('myMethodResult4', doc1);
	      
	       //console.log("res",doc1);
               
               });

};


