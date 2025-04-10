Template.AddComment.events({
  'submit #addCommentForm':function(event,template){

    event.preventDefault();
    var message = event.target.addComment.value;
    var postId = template.data._id;

    //console.log(message + '//' + postId);

    Meteor.call('addComment', message, postId, function (error){

      if(!error){

        event.target.addComment.value = "";
      }
      else{

        alert('gagal bro!!')
      }
    });
  }
});
