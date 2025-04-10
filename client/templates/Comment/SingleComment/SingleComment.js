Template.SingleComment.helpers({
quotes: function(){
    return Quotes.find({CommentId:this._id});
  },
  commentDeleteRight: function (){
    if(Meteor.userId() == this.UserId){

      return true;
    } else{
      return false;
    }
  }
});


Template.SingleComment.events({
'click #deleteComment': function(){
Meteor.call('deleteComment', this._id, function (error){
if(!error){

  alert('kehapus gan!!');
}else{
alert('sorry, ga kehapus gan!!');

}

});

}

});
