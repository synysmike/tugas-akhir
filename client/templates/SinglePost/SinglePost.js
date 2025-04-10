Template.SinglePost.helpers({
comments: function(){

  return Comments.find({PostId:this._id});
}
});


Template.SinglePost.events({
'click .rate-post':function(event){
  event.preventDefault();
  var rating = $(event.currentTarget).data('userrating');
  var post_id = this.id;


  Meteor.call('ratePost',post_id, rating);
}

});
