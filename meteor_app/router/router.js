/***
 * Home Page routing path
 */
Router.route('/', function () {
  this.render('home',{
    
  });

 
 
  
});
/***
 * Register routing path
 */
Router.route('/register', function () {
  this.render('register',{
    
  });
});
 Router.route('home', {
    path: '/test',
    data: function(){
      hr = new MysqlSubscription('hr_doc2');
        console.log("hr",hr);
          }
});

/***
 * Route to handle documentation section of initilizing employee joining
 */


//Router.route('doc', {
//    path: '/doc/:_id',
//       waitOn: function() {
//        return [Meteor.subscribe('hr_doc', this.params._id),
//               Meteor.subscribe('doc', this.params._id)];
//      },
//      data : function(){
//        
//        console.log(this.params._id);
//       // hr_doc = new MysqlSubscription('hr_doc1');
//        //console.log("hr_docthis.params._id",hr_doc);
//  
//        net = new MysqlSubscription('network',this.params._id);
//        doc = new MysqlSubscription('doc',this.params._id);
//        hr = new MysqlSubscription('hr_doc',this.params._id);
//        console.log("manisha",hr);
//        rbd = new MysqlSubscription('rbd',this.params._id);
//        employ1 =new MysqlSubscription('oneemploy',this.params._id);
//        console.log("employ1",employ1);
//        return empid=employ1,hr=hr,rbd=rbd,net=net,doc=doc;
//         
//         
//     
//    }
//});
 Router.route('doc', {
    path: '/doc/:_id',
    data: function(){
       net = new MysqlSubscription('network',this.params._id);
        console.log("netw",net);
       rbd = new MysqlSubscription('rbd',this.params._id);
        console.log("rbd",rbd);
     doc = new MysqlSubscription('doc',this.params._id);
        console.log("doc",doc);
      hr = new MysqlSubscription('hr_doc',this.params._id);
      hr.addEventListener('update', function(index, msg){
  console.log("manisha",msg.fields.emp_info);
});

        console.log("hr",hr);
       //console.log(this.params._id);
        employ1 =new MysqlSubscription('oneemploy',this.params._id);
       // console.log("employ1",employ1);
         Session.set('paramid', this.params._id);
        return empid=employ1,hr=hr,doc=doc,rbd=rbd,network=net;
         
     
    }
});

//Router.route('pending', {
//    path: '/pending/:_id',
//    data: function(){
//        console.log("pending",this.params._id);
//        pending_emp = new MysqlSubscription('pending_emp',this.params._id);
//        pending = new MysqlSubscription('pending',this.params._id);
//        pending_rbd = new MysqlSubscription('pending_rbd',this.params._id);
//        pending_network = new MysqlSubscription('pending_network',this.params._id);
//        pending_document = new MysqlSubscription('pending_document',this.params._id);
//        }
//});




