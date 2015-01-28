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
     Meteor.publish('rbd', function(id){
      db.select(this, {
        query: 'select * from rbd where user_id = "'+id+'"',
        triggers: [
          { table: 'rbd' }
        ]
      })
    })
    });
    

    Meteor.methods({
    'insert_rbd': function(id,Biddle,cover_letter,google_drive){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      query1="select * from rbd where user_id = "+id;
      query= db.queryEx(query1);
      
      //return 'test';
     
      if (query.length>0) {
        //code
      
      
        query= 'UPDATE `rbd` SET `Biddle`="'+Biddle+'",`cover_letter`="'+cover_letter+'",`google_drive`="'+google_drive+'" WHERE `user_id`="'+id+'"'
                return db.query(query);
                //return "efer";
                 
      }
      else{
         query= 'INSERT INTO `rbd`(`user_id`, `Biddle`, `cover_letter`, `google_drive`)  VALUES ("'+id+'","'+Biddle+'","'+cover_letter+'","'+google_drive+'")';
               return db.query(query);
              
        
        
        
      }
      
     
    }
  });
}
  
   
   



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


