Template.Home.helpers({name:function(){
if(Meteor.user()){

  return Meteor.user().profile.name;
}
else {
return"login dulu!!";
}



}

});

Template.ShowHome.helpers({
  kategori: function(){
    return Kategori.find();
  },

posts: function(){
  if(Session.get("sortfilter1")){
    return Posts.find({},{sort:{Rating:Session.get("sortfilter1")}});
  }
else if(Session.get("sortfilter")){
    return Posts.find({},{sort:{Kategori:Session.get("sortfilter")}});
  }
  else {
    return Posts.find({},{sort:{CreateAt:-1}});
  }
},

Reload : function(){
  if(Session.get("sortfilter1")){
      return true;
    }
  else {
    return false;
    }
  }
});


Template.ShowHome.events({

  'click #readMore' : function () {
    Router.go('/post/'+this._id);
  },
  'click .sorting':function(event){
    Session.set("sortfilter",this.Kategori);
  },
  'click .sorting-top':function(event){
    Session.set("sortfilter1",-1);
  },
  'click .sorting-new':function(event){
    Session.set("sortfilter1",undefined);
  }


});
