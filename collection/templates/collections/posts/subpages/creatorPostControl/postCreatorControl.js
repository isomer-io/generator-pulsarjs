if (Meteor.isClient) {

  Template.<%= camelizedSingularName %>CreatorControls.onCreated(function() {

     var <%= camelizedSingularName %>Id = Template.currentData().<%= camelizedSingularName %>Id;

     this.subscribe('<%= camelizedSingularName %>', <%= camelizedSingularName %>Id);
  });

  Template.<%= camelizedSingularName %>CreatorControls.helpers({
    current<%= humanizedSingularName %>: function() {
      var <%= camelizedSingularName %>Id = Template.currentData().<%= camelizedSingularName %>Id;
      return <%= humanizedPluralName %>.findOne({_id: <%= camelizedSingularName %>Id});
    }
  });

  Template.<%= camelizedSingularName %>CreatorControls.events({
      'click #delete<%= humanizedSingularName %>Button': function() {
          //'this' is the current doc we are showing
          Modal.show('confirm<%= humanizedSingularName %>DeleteModal', this);
      }
  });

}
