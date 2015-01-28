/***
 * Home Page routing path
 */
Router.route('/', function () {
  this.render('home',{
    
  });
  console.log('network',this.params._id);
 
 
  
});
//Router.route('/home/:_id', function () {
//  this.render('home',{
//    
//  });
//  console.log('network',this.params._id);
//  bb=this.params._id;
//  bb.split(',').forEach(function (entry, i) {
//  var records = new MysqlSubscription('record',entry);
//    console.log("rec",records);     
//});

 
 
  


/***
 * Register routing path
 */
Router.route('/register', function () {
  this.render('register',{
    
  });
});

/***
 * Route to handle documentation section of initilizing employee joining
 */


Router.route('doc', {
    path: '/doc/:_id',
    data: function(){
        console.log(this.params._id);
        net = new MysqlSubscription('network',this.params._id);
        doc = new MysqlSubscription('doc',this.params._id);
        hr = new MysqlSubscription('hr_doc',this.params._id);
        rbd = new MysqlSubscription('rbd',this.params._id);
        employ1 =new MysqlSubscription('oneemploy',this.params._id);
        console.log("employ1",employ1);
        return empid=employ1;
         
         
     
    }
});

Router.route('pending', {
    path: '/pending/:_id',
    data: function(){
        console.log("pending",this.params._id);
        pending_emp = new MysqlSubscription('pending_emp',this.params._id);
        pending = new MysqlSubscription('pending',this.params._id);
        pending_rbd = new MysqlSubscription('pending_rbd',this.params._id);
        pending_network = new MysqlSubscription('pending_network',this.params._id);
        pending_document = new MysqlSubscription('pending_document',this.params._id);
        }
});




