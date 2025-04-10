Router.configure({
layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/showposts', function () {
  this.render('ShowPosts');
});

Router.route('/login', function () {
  this.render('LoginForm');
});
Router.route('/post/:_id',function(){
    this.render('SinglePost', {
      data: function(){ return Posts.findOne({_id: this.params._id}); }
    });
});

// Router.route('/profile', function () {
//   this.render('UserProfile');
// });

//user role
Router.route('/addpost', function () {
  if(Roles.userIsInRole(Meteor.user(), 'user')){
  this.render('AddPost');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/ucp', function () {
  if(Roles.userIsInRole(Meteor.user(), 'user')){
  this.render('UserControlPanel');
  } else{
    //admin=false
    Router.go('/');
  }
});


//admin role
Router.route('/addpost1', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
  this.render('AddPost');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/ucp1', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
  this.render('UserControlPanel');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/admin', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
    //admin=true
    this.render('AdminPanel');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/adminusers', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
    //admin=true
    this.render('AdminUsers');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/admin/posts', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
    //admin=true
    this.render('AdminPosts');
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/admin/posts/:_id', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
    //admin=true
    this.render('EditPosts',{
      data: function(){ return Posts.findOne({_id: this.params._id});
    }
    });
  } else{
    //admin=false
    Router.go('/');
  }
});

Router.route('/admin/addkategori', function () {
  if(Roles.userIsInRole(Meteor.user(), 'admin')){
    //admin=true
    this.render('AddKategori');
  } else{
    //admin=false
    Router.go('/');
  }


});

Router.route('/suspended', function () {
  if(Roles.userIsInRole(Meteor.user(), 'suspend')){
  this.render('Suspended');
  } else{
    //admin=false
    Router.go('/');
  }
});
