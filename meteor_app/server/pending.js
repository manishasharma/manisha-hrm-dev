 
if (Meteor.isServer) {
  var db;
  var mysqlSettings = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mss_hrm'
  }
 Meteor.startup(function (id) {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');

    Meteor.publish('pending', function(id){
      db.select(this, {
        query: "select count(*) as count from hr_doc where user_id = '"+id+"' and Biometric_System='true' and Folder_Updated='true' and address_book='true' and emp_info='true'",
        triggers: [
          { table: 'hr_doc' }
        ]
      })
    }),
     Meteor.publish('pending_emp', function(id){
      db.select(this, {
        query: 'select * from emp where id = "'+id+'"',
        triggers: [
          { table: 'emp' }
        ]
      })
    })
    });
  Meteor.startup(function (id) {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');
    
 
  Meteor.publish('pending_rbd', function(id){
      db.select(this, {
        query: "select count(*) as count from rbd where user_id = '"+id+"' and 	Biddle='true' and cover_letter='true' and google_drive='true'",
        triggers: [
          { table: 'rbd' }
      
        ]
      })
    })
 
 Meteor.publish('pending_network', function(id){
      db.select(this, {
        query: "select count(*) as count from network where user_id = '"+id+"' and static_IP='true' and Gmail_Id='true' and Skype_Id='true' and Redmine_Account='true' and Bitbucket_Account='true' and Git_Account='true'and Dropbox_Account='true' and Database_User='true' and FTP_account='true'",
        triggers: [
          { table: 'network' }
        ]
      })
    })
 
  Meteor.publish('pending_document', function(id){
      db.select(this, {
        query: "select count(*) as count from document where user_id = '"+id+"' and Offer_Letter='true' and ID_Proof='true' and Address_Proof='true' and Birth_certificate='true' and Training_Certificate='true' and Salary_Slips='true' and Photographs='true' and Qualification_Certificates='true' and Experience_letter='true' and Medical_Certificate='true' and Account_Number='true' and Joining_Report='true' and Ethical_Standards='true' and Employee_Agreement='true' and Appointment_Letter='true'",
        triggers: [
          { table: 'document' }
        ]
      })
    })
 
 
 });
  
}