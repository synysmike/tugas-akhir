Template.AddKategori.helpers({
kategori: function(){
  return Kategori.find();
}
});


Template.AddKategori.events({
'submit #Tambah':function (event,template) {
  event.preventDefault();

  var kategori = event.target.namaKategori.value;
  Meteor.call('addKategori', kategori, function (error){
    if(!error){
      event.target.namaKategori.value="";
      // alert('masuk kategori baru!!');
    }
    else{
      // alert('gagal bro!!');
    }
  });
}
});
