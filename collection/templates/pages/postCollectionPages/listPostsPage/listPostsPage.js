/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

    Navbar.add({
        url: '/<%= camelizedPluralName %>',
        menuName: '<%= humanizedPluralName %>',
        menuOrientation: 'left'
    });

    Session.setDefault("<%= camelizedPluralName %>.filter", false);


    Router.route('/<%= camelizedPluralName %>', function() {
       this.render('list<%= humanizedPluralName %>Page');
    });

    Template.list<%= humanizedPluralName %>Page.helpers({
       hasResults: function() {
           return <%= humanizedPluralName %>.find().count();
       },
       isDisabled: function(filter) {
         if (Session.get('<%= camelizedPluralName %>.filter')  && filter === 'oldest-first') {
           return 'disabled';
         }
         if (!Session.get('<%= camelizedPluralName %>.filter') && filter === 'newest-first') {
           return 'disabled';
         }
        return '';
       }
    });

    Template.list<%= humanizedPluralName %>Page.events({
        'click #oldest-first': function() {
            <%= humanizedPluralName %>.findList.set({
               sort: {
                   createdAt: 1
               }
            });

            Session.set('<%= camelizedPluralName %>.filter', true);

        },
        'click #newest-first': function() {
            <%= humanizedPluralName %>.findList.set({
                sort: {
                    createdAt: -1
                }
            });

            Session.set('<%= camelizedPluralName %>.filter', false);

        }
    });

}
