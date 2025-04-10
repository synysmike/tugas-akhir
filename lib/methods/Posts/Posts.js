Meteor.methods({
addPosts : function (title, kategori, postBody){
  var user = Meteor.user();
  var id = Posts.insert({
    Author: user.profile.name,
    Title : title,
    Kategori : kategori,
    Body : postBody,
    CreateAt : new Date()
    });
  return id;
},
ratePost : function (postID,rating){
  Posts.update(postID,{
      $set:{
        Rating:rating
      }
});
 },

editPost : function (post_id, title, message, ){
  Posts.update(post_id,{
      $set:{
        Title: title,
        Body : message,

      }
});
 },

 deletePost: function(postID){
Posts.remove(postID);

 }

});
