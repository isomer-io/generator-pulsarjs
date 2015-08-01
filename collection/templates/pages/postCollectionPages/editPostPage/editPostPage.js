/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {


    Router.route('/<%= camelizedPluralName %>/:_id/edit', function() {

        //we must subscribe to the <%= camelizedSingularName %> we are showing!!!
        this.subscribe('<%= camelizedSingularName %>', this.params._id);

        //now let's query that <%= camelizedSingularName %>
        var <%= camelizedSingularName %> = <%= humanizedPluralName %>.findOne({_id: this.params._id});

        //then set it as the 'this' object on the page
        this.render('edit<%= humanizedSingularName %>Page', {data: <%= camelizedSingularName %>});
    });

    //after they insert a new <%= camelizedSingularName %>, redirect back to
    //list of <%= camelizedPluralName %>

    //'insert<%= humanizedSingularName %>' is the id of the quickform we
    //and 'update<%= humanizedSingularName %>' are the id's of the quickforms
    //we want to listen to, not the name of the page level templates
    AutoForm.addHooks('update<%= humanizedSingularName %>', {

        //the onSuccess method gets called after
        //a successful submit on either of the forms
        onSuccess: function(formType, result) {

            //this.docId is the _id of the document
            //the form just changed, so we will
            //load the url of that item and show the user
            //the result
            Router.go('/<%= camelizedPluralName %>/' + this.docId);
        }
    });

}