Meteor.publish('quote', function(){

return Quotes.find();

});
