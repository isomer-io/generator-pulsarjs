/**
 * Created by wesley on 6/4/15.
 */

/**
 * Define publications here
 */
Meteor.publish('<%= camelizedSingularName %>', function(<%= camelizedSingularName %>Id) {
    return <%= humanizedPluralName %>.find({_id: <%= camelizedSingularName %>Id});
});

/**
 *
 * Define your security permissions here
 *
 */

//they can only insert if they are a user
<%= humanizedPluralName %>.permit('insert').ifLoggedIn().apply();

//can update if they are logged in and the document was created by them
<%= humanizedPluralName %>.permit('update').ifLoggedIn().ifCreatedByUser().apply();

//can update if they are an admin
<%= humanizedPluralName %>.permit('update').ifHasRole('admin').apply();

//can remove if they are logged in and the document was created by them
<%= humanizedPluralName %>.permit('remove').ifLoggedIn().ifCreatedByUser().apply();

//can remove if they are an admin
<%= humanizedPluralName %>.permit('remove').ifHasRole('admin').apply();