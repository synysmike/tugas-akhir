Template.SingleQuote.helpers({

  quoteDeleteRight: function (){

    if(Meteor.userId() == this.UserId){

      return true;
    } else{
      return false;
    }
  }
});

Template.SingleQuote.events({
'click #deleteQuote': function(){
Meteor.call('deleteQuote', this._id, function (error){
if(!error){

  alert('kehapus gan!!');
}else{
alert('sorry, ga kehapus gan!!');

}

});

}

});
