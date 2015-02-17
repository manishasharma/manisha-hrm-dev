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
    Meteor.publish('oneemploy', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from emp where id = "+id;
        },
        triggers: [
          {
            table: 'emp',
            condition: function(esc, escId){
              return '$ROW.id = '+id>200;
            }
          }
        ]
        
      });
    });
    // db.initUpdateTable("update22");
     Meteor.publish('hr_doc', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from hr_doc where user_id = "+id;
        },
        triggers: [
          {
            table: 'hr_doc',
            condition: function(esc, escId){
             return '$ROW.user_id = ' + esc(id);
            }
          }
        ]
      });
    });
    
   Meteor.publish('hr_doc2', function(){
      db.select(this, {
        query: function(esc, escId){
          return "select * from hr_doc";
        },
        triggers: [
          {
            table: 'hr_doc'
          
           
          }
          
        ]
      });
    });
    //
    // Meteor.publish('insert', function(id,emp_info,address_book,Biometric_System,Folder_Updated){
    //  db.select(this, {
    //    query: function(esc, escId){
    //      return 'UPDATE `hr_doc` SET `emp_info`="'+emp_info+'",`address_book`="'+address_book+'",`Biometric_System`="'+Biometric_System+'",`Folder_Updated`="'+Folder_Updated+'" WHERE `user_id`="'+id+'"';
    //    },
    //    triggers: [
    //      {
    //        table: 'hr_doc'
    //       
    //      }
    //    ]
    //  });
    //});
    
  
     //});
    //Meteor.startup(function () {
    //db = mysql.createConnection(mysqlSettings);
    //db.connect();
    //db.initUpdateTable('updates22');
    // Meteor.publish('hr_doc', function(id){
    //  db.select(this, {
    //    query: 'select * from hr_doc where user_id = "'+id+'"',
    //    triggers: [
    //      { table: 'hr_doc' }
    //    ]
    //  });
    //});
    });

    Meteor.methods({
    'insert': function(id,emp_info,address_book,Biometric_System,Folder_Updated){
      query1="select * from hr_doc where user_id = "+id;
      query= db.queryEx(query1);
      
      if (query.length>0) {
         query='UPDATE `hr_doc` SET `emp_info`="'+emp_info+'",`address_book`="'+address_book+'",`Biometric_System`="'+Biometric_System+'",`Folder_Updated`="'+Folder_Updated+'" WHERE `user_id`="'+id+'"'
           return db.queryEx(query);  
      }
      else{
        query= 'INSERT INTO `hr_doc`(`user_id`, `emp_info`, `address_book`, `Biometric_System`, `Folder_Updated`)  VALUES ("'+id+'","'+emp_info+'","'+address_book+'","'+Biometric_System+'","'+Folder_Updated+'")';
            return db.queryEx(query);
         }
      
    }
  });
}
