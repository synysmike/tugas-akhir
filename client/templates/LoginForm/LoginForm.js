Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
Template.LoginForm.events({
  'submit #loginForm': function (){
      event.preventDefault();
      var username = event.target.username.value;
      var password = event.target.password.value;
      Meteor.loginWithPassword(username, password, function(error){
        if(!error){
              if(Roles.userIsInRole(Meteor.user(), 'suspend')){
              $('#loginForm').modal('hide');
              $('.modal-backdrop').remove();
              Router.go('/suspended');
                }
            else{
                $('#loginForm').modal('hide');
                $('.modal-backdrop').remove();
                alert('berhasil!!!');
                Router.go('/');
                return false;
              }
            }
        else{
          $('#loginForm').modal('hide');
          $('.modal-backdrop').remove();
          alert('gagal login, masukan akun dengan benar!!!');
          Router.go('/suspended');
          return false;
        }
      });
    },


'submit #registerForm': function (){
  event.preventDefault();
  var username = event.target.RegUsername.value;
  var email = event.target.RegEmail.value;
  var password = event.target.RegPassword.value;
  var nim = event.target.RegNim.value;
  var jk = event.target.RegJk.value;
  var fakultas = event.target.RegFakultas.value;
  var jurusan = event.target.RegJurusan.value;
  var gambar = event.target.RegGambar.value;
  Accounts.createUser({
    username : nim,
    email: email,
    password: password,
    profile : {
      name : username,
      jk : jk,
      fakultas:fakultas,
      jurusan : jurusan,
      gambar : gambar
    }
  });
$('#loginForm').modal('hide');
$('.modal-backdrop').remove();
Router.go('/');
return false;
  }
});
