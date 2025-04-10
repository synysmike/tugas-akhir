Template.AddPost.helpers({
kategori: function(){
  return Kategori.find();
}
});




Template.AddPost.events({
	'submit #addPost' : function(){
 		 event.preventDefault();

		  var title = event.target.postTitle.value;
		  var kategori = event.target.postKategori.value;
		  var postBody = $('#summernote').summernote('code');

  	Meteor.call('addPosts', title, kategori, postBody, function(error){
		if(!error){
			Router.go('/showposts');
			}
  		});	
	}
});





Template.AddPost.onRendered(function(){
  $(document).ready(function() {
    $('#summernote').summernote();
});

});
