Template.UploadFoto.events({
'submit .js-upload':function(event){

  var img_src, img_alt;
  img_src = event.target.img_src.value;
  img_alt = event.target.img_alt.value;
  console.log("src : "+img_src+" alt : "+img_alt);
  return false;
}

});
