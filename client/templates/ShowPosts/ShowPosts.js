Template.ShowPosts.helpers({
posts: function(){

  return Posts.find({},{sort:{Rating:-1}});
}

});

Template.ShowPosts.events({
  'click #readMore' : function () {

    Router.go('/post/'+this._id);
  }

});
