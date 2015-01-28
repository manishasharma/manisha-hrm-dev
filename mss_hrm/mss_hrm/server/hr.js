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
              return '$ROW.id = '+id;
            }
          }
        ]
      });
    });
  
     });
    Meteor.startup(function () {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');
     Meteor.publish('hr_doc', function(id){
      db.select(this, {
        query: 'select * from hr_doc where user_id = "'+id+'"',
        triggers: [
          { table: 'hr_doc' }
        ]
      })
    })
    });

    
    
  
  
  Meteor.methods({
    'insert': function(id,emp_info,address_book,Biometric_System,Folder_Updated){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      query1="select * from hr_doc where user_id = "+id;
      query= db.queryEx(query1);
      //return query.length;
     
      if (query.length>0) {
        //code
      
      
        query= 'UPDATE `hr_doc` SET `emp_info`="'+emp_info+'",`address_book`="'+address_book+'",`Biometric_System`="'+Biometric_System+'",`Folder_Updated`="'+Folder_Updated+'" WHERE `user_id`="'+id+'"'
                return db.query(query);
                return "efer";
                 
      }
      else{
         query= 'INSERT INTO `hr_doc`(`user_id`, `emp_info`, `address_book`, `Biometric_System`, `Folder_Updated`)  VALUES ("'+id+'","'+emp_info+'","'+address_book+'","'+Biometric_System+'","'+Folder_Updated+'")';
               return db.query(query);
              
        
        
        
      }
      
     
    }
  });
  
   
   



//Meteor.methods({
//    'insert': function(id,emp_info,address_book,Biometric_System,Folder_Updated){
//               
//         query= 'INSERT INTO `hr_doc`(`user_id`, `emp_info`, `address_book`, `Biometric_System`, `Folder_Updated`)  VALUES ("'+id+'","'+emp_info+'","'+address_book+'","'+Biometric_System+'","'+Folder_Updated+'")';
//                return db.query(query);
//        }
//    });

//Meteor.methods({
//    'incScore': function(id, amount){
//      // Synchronous query method with support for escaping values by passing
//      // function instead of string query
//      return db.queryEx(function(esc, escId){
//        return 'INSERT INTO `emp`( `username`, `password`) VALUES ("shintu","admin")';
//      });
//    }
//  });

}
