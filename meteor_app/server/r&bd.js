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
      query1="select * from rbd where user_id = "+id;
      query= db.queryEx(query1);
      if (query.length>0) {
        query= 'UPDATE `rbd` SET `Biddle`="'+Biddle+'",`cover_letter`="'+cover_letter+'",`google_drive`="'+google_drive+'" WHERE `user_id`="'+id+'"'
          return db.queryEx(query);
      }
      else{
         query= 'INSERT INTO `rbd`(`user_id`, `Biddle`, `cover_letter`, `google_drive`)  VALUES ("'+id+'","'+Biddle+'","'+cover_letter+'","'+google_drive+'")';
               return db.queryEx(query);
        }
      }
  });
}
  
   
   





