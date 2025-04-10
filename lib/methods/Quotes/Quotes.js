Meteor.methods({
'addQuote':function(message,commentId){

  var user = Meteor.user();

  if(!user){

    throw new Meteor.Error('Login Dulu Gan, Biar Bisa Komen!!!');
  }
  if(!message){
    throw new Meteor.Error('Jangan Dipencet Submit Kalo Kosong!!');

  }

  if(!commentId){

    throw new Meteor.Error('comment Id error gan!!');
  }

Quotes.insert({
Author: user.profile.name,
Message: message,
UserId: user._id,
CommentId: commentId,
CreatedAt: new Date()

  });
},



'deleteQuote': function(quoteId){
if(!quoteId){

  throw new Meteor.Error('Comment Id nya ga bole kosong gan!!');
}
  Quotes.remove(quoteId);
}
});
