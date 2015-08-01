/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

    /*
     After they click the confirm delete button,
     we remove the <%= camelizedSingularName %> document, hide the modal,
     and re-direct them to the list of <%= camelizedPluralName %>
     */
    Template.confirm<%= humanizedSingularName %>DeleteModal.events({
        'click #confirmDelete': function() {
            <%= humanizedPluralName %>.remove(this._id, function() {
                Modal.hide();
                Router.go('/<%= camelizedPluralName %>');
            });
        }
    });

}