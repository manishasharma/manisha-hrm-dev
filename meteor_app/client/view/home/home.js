if (Meteor.isClient) {
Template.register.events({
   "click #signup-form": function (event, template) {
    var user = template.find('#signup-username').value;
    var password = template.find('#signup-password').value;
    
    alert(user);
     Meteor.call('login_form', user,password, function(err,res){
      if (err) {
        alert("error");
       
      }
      else
      {
       // alert("success");
      }
     
      });
  
    return false;
  }
   
  });
Template.table.events({
    "click #action": function (event, template) {
    event.preventDefault();
    var id = this.id ;
    Router.go('/doc/'+id);
    //console.log(id);
    }
    });

Template.home.events({
    "click #Intiate": function (event, template) {
    event.preventDefault();
    var id = template.find('#sel1').value;
    Router.go('/doc/'+id);
    //console.log(id);
    }
    });

Template.home.events({
    "click #Intiate": function (event, template) {
    event.preventDefault();
    var id = template.find('#sel1').value;
    Router.go('/doc/'+id);
   // console.log(id);
    }
    });



emp = new MysqlSubscription('allemployee');
if (Meteor.isClient) {
    Template.home.helpers({
          emp: function () {
            emp= emp.reactive();
            return emp;
            
            
    }
          
    });
   //console.log("emp",emp);
}

data = new MysqlSubscription('alldata');

    Template.table.helpers({
          data: function () {
            //console.log("data",data);
            datas= data.reactive();
            return datas;
            
        }
    });



Template.table.helpers({
        getid: function(id){            
           // console.log (id);
            Meteor.call('pending',id,function(err,res){            
                if (err) {
                  alert(err);
                 }
                 else{
                   // console.log("employee Status=", res);
                      if (res===4) {
                          Session.set('status_of_'+id, 'complete');
                          
                          //res( 'complete' );        
                      }else{
                          Session.set('status_of_'+id, 'pending');
                          //console.log("pending");               
                      }
                  if (!err && res) {
                      
                  }
                 }        
            });
            
            Meteor.call('doc_pending',id,function(err,res){
             
                if (err) {
                 // alert("manisha");
                 }
                 else{
                   // console.log("document",id, res);
                      if (res) {
                          Session.set('doc_of_'+id, res);         
                          //res( 'complete' );        
                      }else{
                          Session.set('doc_of_'+id,'complete');
                                                                   
                      }
                
                 }        
            });
                 
         }
         
    });

Template.table.emp_status = function(id) {
  return Session.get('status_of_'+id);
};


Template.table.doc_status = function(id) {
    
  return Session.get('doc_of_'+id);
};

$(document).ready(function()
{
	$('#search').keyup(function()
	{
		searchTable($(this).val());
	});
});

function searchTable(inputVal)
{
	var table = $('#tblData');
	table.find('tr').each(function(index, row)
	{
		var allCells = $(row).find('td');
		if(allCells.length > 0)
		{
			var found = false;
			allCells.each(function(index, td)
			{
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text()))
				{
					found = true;
					return false;
				}
			});
			if(found == true)$(row).show();else $(row).hide();
		}
	});
}




}







