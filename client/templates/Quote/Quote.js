Template.Quote.events({
  'submit #quoteForm':function(event,template){

    event.preventDefault();
    var message = event.target.addQuotes.value;
    var commentId = template.data._id;

    //console.log(message + '//' + postId);

    Meteor.call('addQuote', message, commentId, function (error){

      if(!error){

        event.target.addQuotes.value="";
      }
      else{

        alert('gagal bro!!')
      }
    });
  }
});
