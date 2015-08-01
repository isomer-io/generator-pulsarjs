if (Meteor.isClient) {
  Template.findOne<%= humanizedSingularName %>.onCreated(function() {

     var <%= camelizedSingularName %>Id = Template.currentData().<%= camelizedSingularName %>Id;

     this.subscribe('<%= camelizedSingularName %>', <%= camelizedSingularName %>Id);
  });

  Template.findOne<%= humanizedSingularName %>.helpers({
    current<%= humanizedSingularName %>: function() {
      var <%= camelizedSingularName %>Id = Template.currentData().<%= camelizedSingularName %>Id;
      return <%= humanizedPluralName %>.findOne({_id: <%= camelizedSingularName %>Id});
    }
  });

}
