Meteor.methods({
'addKategori':function(kategori){
  Kategori.insert({
Kategori : kategori
    });
  }
});
