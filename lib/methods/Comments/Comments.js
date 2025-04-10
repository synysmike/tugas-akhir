Meteor.methods({
'addComment':function(message,postId){

  var user = Meteor.user();

  if(!user){

    throw new Meteor.Error('Login Dulu Gan, Biar Bisa Komen!!!');
  }
  if(!message){
    throw new Meteor.Error('Jangan Dipencet Submit Kalo Kosong!!');

  }

  if(!postId){

    throw new Meteor.Error('post Id error gan!!');
  }

  Comments.insert({
Author: user.profile.name,
Message: message,
UserId: user._id,
PostId: postId,
CreatedAt: new Date()

  });
},



'deleteComment': function(commentId){
if(!commentId){

  throw new Meteor.Error('Comment Id nya ga bole kosong gan!!');
}
  Comments.remove(commentId);
}
});
