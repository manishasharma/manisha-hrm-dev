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
    Meteor.publish('oneemploy11', function(id){
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
     Meteor.publish('doc', function(id){
      db.select(this, {
        query: 'select * from document where user_id = "'+id+'"',
        triggers: [
          { table: 'document' }
        ]
      })
    })
    });
  
  
  Meteor.methods({
    'insert_doc': function(id,ID_Proof,Offer_Letter,Address_Proof,Birth_certificate,Training_Certificate,Salary_Slips
                ,Photographs, Qualification_Certificates,Experience_letter,Medical_Certificate,Account_Number,
                Joining_Report ,Ethical_Standards,Employee_Agreement,Appointment_Letter){
      // Synchronous query method with support for escaping values by passing
      // function instead of string query
      query1="select * from document where user_id = "+id;
      query= db.queryEx(query1);
     
      if (query.length>0) {
        //code
      
      
        //query= 'UPDATE `document` SET `Offer_Letter`="'+Offer_Letter+'",`ID_Proof`="'+ID_Proof+'",`Address_Proof`="'+Address_Proof+'",`Birth_certificate`="'+Birth_certificate+'",`Training_Certificate`="'+Training_Certificate+
        //'",`Salary_Slips`="'+Salary_Slips+'",`Photographs`="'+Photographs+'",`Qualification_Certificates`="'+Qualification_Certificates+'",,`Experience_letter`="'+Experience_letter+'",`Medical_Certificate`="'+Medical_Certificate+'", `Account_Number`="'+Account_Number+'",`Joining_Report`="'+Joining_Report+'",`Ethical_Standards`="'+Ethical_Standards+'",`Employee_Agreement`="'+Employee_Agreement+'",`Appointment_Letter`="'+Appointment_Letter+'", WHERE `user_id`="'+id+'"'
        //        return query;
        query= 'UPDATE `document` SET `Offer_Letter`="'+Offer_Letter+'",`ID_Proof`="'+ID_Proof+'",`Address_Proof`="'+Address_Proof+'",`Birth_certificate`="'+Birth_certificate+'",`Training_Certificate`="'+Training_Certificate+'",`Salary_Slips`="'+Salary_Slips+'",`Photographs`="'+Photographs+'",`Qualification_Certificates`="'+Qualification_Certificates+'",`Experience_letter`="'+Experience_letter+'",`Medical_Certificate`="'+Medical_Certificate+'",`Account_Number`="'+Account_Number+'",`Joining_Report`="'+Joining_Report+'",`Ethical_Standards`="'+Ethical_Standards+'",`Employee_Agreement`="'+Employee_Agreement+'",`Appointment_Letter`="'+Appointment_Letter+'"  WHERE `user_id`="'+id+'"'
          return db.query(query);     
      }
      else{
        
         //query= 'INSERT INTO `hr_doc`(`user_id`, `emp_info`, `address_book`, `Biometric_System`, `Folder_Updated`)  VALUES ("'+id+'","'+emp_info+'","'+address_book+'","'+Biometric_System+'","'+Folder_Updated+'")';
         //      return db.query(query);
         //query='test';
          query=  'INSERT INTO `document`(`user_id`, `Offer_Letter`, `ID_Proof`, `Address_Proof`, `Birth_certificate`, `Training_Certificate`, `Salary_Slips`, `Photographs`, `Qualification_Certificates`, `Experience_letter`, `Medical_Certificate`, `Account_Number`, `Joining_Report`, `Ethical_Standards`, `Employee_Agreement`, `Appointment_Letter`) VALUES("'+id+'","'+Offer_Letter+'","'+ID_Proof+'","'+Address_Proof+'","'+Birth_certificate+'","'+Training_Certificate+'","'+Salary_Slips+'","'+Photographs+'","'+Qualification_Certificates+'","'+Experience_letter+'","'+Medical_Certificate+'","'+Account_Number+'","'+Joining_Report+'","'+Ethical_Standards+'","'+Employee_Agreement+'","'+Appointment_Letter+'")';
               return db.query(query);
        
        
        
      }
      
     
    }
  });
}