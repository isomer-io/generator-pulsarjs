/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

  // Router.map(function() {
  //   this.route('<%= camelizedSingularName %>', {
  //       path: '/<%= camelizedPluralName %>/:_id',
  //       template: 'viewOne<%= humanizedSingularName %>Page', // <-- to be explicit
  //       data: function() {
  //           return {id: this.params._id};
  //       }
  //   });
  // });

  Router.route('/<%= camelizedPluralName %>/:_id', function () {
    this.render('viewOne<%= humanizedSingularName %>Page', {
        data: function () {
          return {id: this.params._id};
        }
      });
    });
    // Router.route('/<%= camelizedPluralName %>/:_id', function() {
    //
    //     //we must subscribe to the <%= camelizedSingularName %> we are showing!!!
    //     this.subscribe('<%= camelizedSingularName %>', this.params._id);
    //
    //     //now let's query that <%= camelizedSingularName %>
    //     var <%= camelizedSingularName %> = <%= humanizedPluralName %>.findOne({_id: this.params._id});
    //
    //     //then set it as the 'this' object on the page, using the data object
    //     this.render('viewOne<%= humanizedSingularName %>Page', {data: {id: this.params._id}});
    // });

    //This is how you display a modal
    //In this case, we are displaying a modal to
    //confirm that the user wants to delete a specific <%= camelizedSingularName %>
    Template.viewOne<%= humanizedSingularName %>Page.events({
        'click #delete<%= humanizedSingularName %>Button': function() {

            //'this' is the current doc we are showing
            Modal.show('confirm<%= humanizedSingularName %>DeleteModal', this);
        }
    });

}
