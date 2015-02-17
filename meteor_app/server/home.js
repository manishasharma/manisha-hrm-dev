
if (Meteor.isServer) {
  var db;
  var mysqlSettings = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mss_hrm'
  }
    Meteor.startup(function () {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');

    Meteor.publish('alldata', function(){
      db.select(this, {
        query: "select * from emp as e;",
        triggers: [
          { table: 'emp' }
        ]
      })
    })
    });
   
   Meteor.startup(function () {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');

    Meteor.publish('allemployee', function(id){
      db.select(this, {
        query: "select * from emp as e;",
        triggers: [
          { table: 'emp' }
        ]
      })
    })
    });
   
    Meteor.methods({
    'doc_pending': function(id){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      query1 ="select * from rbd where user_id = '"+id+"' and 	Biddle='true' and cover_letter='true' and google_drive='true'",
      querys= db.queryEx(query1);
      if (querys.length) {
        var a=" ";
      }
    
       else{
        var a="rbd  ";
       }
      
      
      
      
      query2 = "select  *  from network where user_id = '"+id+"' and static_IP='true' and Gmail_Id='true' and Skype_Id='true' and Redmine_Account='true' and Bitbucket_Account='true' and Git_Account='true'and Dropbox_Account='true' and Database_User='true' and FTP_account='true'",
      //return query.length;
      querys1= db.queryEx(query2);
      if (querys1.length) {
        var b=" ";
      }
      else{
        var b="network   ";
      }
      
      
      
      query3 ="select * from document where user_id = '"+id+"' and Offer_Letter='true' and ID_Proof='true' and Address_Proof='true' and Birth_certificate='true' and Training_Certificate='true' and Salary_Slips='true' and Photographs='true' and Qualification_Certificates='true' and Experience_letter='true' and Medical_Certificate='true' and Account_Number='true' and Joining_Report='true' and Ethical_Standards='true' and Employee_Agreement='true' and Appointment_Letter='true'",
      querys2= db.queryEx(query3);
      if (querys2.length) {
        var c=" ";
      }
       else{
        var c="documentation   ";
      } 
      
      
      
      query4 ="select * from hr_doc where user_id = '"+id+"' and Biometric_System='true' and Folder_Updated='true' and address_book='true' and emp_info='true'",
      querys3= db.queryEx(query4);
      if (querys3.length) {
        var d=" ";
      } 
       else{
        var d="hr-document   ";
       }
       if (a==b==c==d) {
        return "complete";
       }else{
       
      var string=d.concat(c, a,b);
      return string ;
       }
    }
  });

   
  Meteor.methods({
    'login_form': function(user,password){
               
         query= 'INSERT INTO `emp`( `username`, `password`) VALUES ("'+user+'","'+password+'")';
                return db.query(query);
        }
    });

  Meteor.methods({
    'incScore': function(id, amount){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      return db.queryEx(function(esc, escId){
        return 'INSERT INTO `emp`( `username`, `password`) VALUES ("shintu","admin")';
      });
    }
  });
  
  /***
   * get status of all pending documents for respective users @m
   */
  Meteor.methods({
    'pending': function(id){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      query1 ="select * from rbd where user_id = '"+id+"' and 	Biddle='true' and cover_letter='true' and google_drive='true'",
      querys= db.queryEx(query1);
      query2 = "select  *  from network where user_id = '"+id+"' and static_IP='true' and Gmail_Id='true' and Skype_Id='true' and Redmine_Account='true' and Bitbucket_Account='true' and Git_Account='true'and Dropbox_Account='true' and Database_User='true' and FTP_account='true'",
      //return query.length;
      querys1= db.queryEx(query2);
      query3 ="select * from document where user_id = '"+id+"' and Offer_Letter='true' and ID_Proof='true' and Address_Proof='true' and Birth_certificate='true' and Training_Certificate='true' and Salary_Slips='true' and Photographs='true' and Qualification_Certificates='true' and Experience_letter='true' and Medical_Certificate='true' and Account_Number='true' and Joining_Report='true' and Ethical_Standards='true' and Employee_Agreement='true' and Appointment_Letter='true'",
      querys2= db.queryEx(query3);
      query4 ="select * from hr_doc where user_id = '"+id+"' and Biometric_System='true' and Folder_Updated='true' and address_book='true' and emp_info='true'",
      querys3= db.queryEx(query4);
      var query_sum=parseInt(querys.length+querys1.length+querys2.length+querys3.length);
      return query_sum ;  
    }
  });
  
 

}