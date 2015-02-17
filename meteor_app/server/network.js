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
     Meteor.publish('network', function(id){
      db.select(this, {
        query: 'select * from network where user_id = "'+id+'"',
        triggers: [
          { table: 'network' }
        ]
      })
    })
    

    Meteor.methods({
    'insert_network1': function(id,static_IP,Gmail_Id,Skype_Id,Redmine_Account,Bitbucket_Account,Git_Account,Dropbox_Account,Database_User
                ,FTP_account){
      query1="select * from network where user_id = "+id;
      query= db.queryEx(query1);
      //return 'test';
     
      if (query.length>0) {
      query= 'UPDATE `network` SET `static_IP`="'+static_IP+'",`Gmail_Id`="'+Gmail_Id+'",`Skype_Id`="'+Skype_Id+'",`Redmine_Account`="'+Redmine_Account+'",`Bitbucket_Account`="'+Bitbucket_Account+'",`Git_Account`="'+Git_Account+'",`Dropbox_Account`="'+Dropbox_Account+'" ,`Database_User`="'+Database_User+'",`FTP_account`="'+FTP_account+'"WHERE `user_id`="'+id+'"'
      return db.queryEx(query);
                       
      }
      else{
         query= 'INSERT INTO `network` (`user_id`, `static_IP`, `Gmail_Id`, `Skype_Id`,`Redmine_Account`,`Bitbucket_Account`,`Git_Account`,`Dropbox_Account`,`Database_User`,`FTP_account`)  VALUES ("'+id+'","'+static_IP+'","'+Gmail_Id+'","'+Skype_Id+'","'+Redmine_Account+'","'+Bitbucket_Account+'","'+Git_Account+'","'+Dropbox_Account+'","'+Database_User+'","'+FTP_account+'")';
               return db.queryEx(query);
          }
         }
  });
    
    });
}
  
   
   





