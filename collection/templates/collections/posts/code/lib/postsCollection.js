/*
    Here we create our collection. This is the same as
    a normal mongo collection, but you must also pass
    an object with configuration settings for the admin panel
 */
<%= humanizedPluralName %> = new orion.collection('<%= camelizedPluralName %>', {
    singularName: '<%= camelizedSingularName %>', // The name of one of these items
    pluralName: '<%= camelizedPluralName %>', // The name of more than one of these items

    reviewSettings: {
        mustPurchaseToReview: false,
        transactionReviewMode: false
    },

    chargeSettings: {
        sellOnce: true //can be sold once
    },



    /*
        fill this out for admin panel
     */
    tabular: {
        columns: [
            { data: "title", title: "Title" },

            orion.attributeColumn('image', 'image', 'Image'),
            orion.attributeColumn('summernote', 'body', 'Content'),
            orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
            orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
            orion.attributeColumn('updatedAt', 'updatedAt', 'Updated At')
        ]
    }
});

/*
    Now we will attach the schema for the <%= camelizedPluralName %> collection.
    The schema defines the structure and rules of data
    that allowed for each document in this collection.
 */
<%= humanizedPluralName %>.attachSchema(new SimpleSchema({
    title: {
        type: String
    },

    /*
        The file attribute is a custom orion attribute
        This is where orion does its magic. Just set
        the attribute type and it will automatic
        create the form for the file.
        WARNING: the url of the image will not be saved in
        .image, it will be saved in .image.url.
     */
    images: {
        type: Array,
        optional: true,
        maxCount: 3
    },

    'images.$': orion.attribute('image', {
        label: 'Image',
        autoform:{
          aspectRatio:16/9
        }
    }),

    description: {
        type: String
    },


    price: {
        type:Number,
        decimal:true,
        min:0
    },

    /*
    This attribute sets the user id to that of the user that created
    this <%= camelizedSingularName %> automatically.  */
    createdBy: orion.attribute('createdBy'),

    createdAt: orion.attribute('createdAt'),

    updatedAt: orion.attribute('updatedAt')


}));

/*
This is our pagination object. It lets us do an infinite
scroll through our list. You probably don't want to change
this unless you know what you are doing.
 */
<%= humanizedPluralName %>.findList = new Meteor.Pagination(<%= humanizedPluralName %>, {
    infinite: true,
    itemTemplate: '<%= camelizedSingularName %>InFindList',
    sort: {
        createdAt: -1
    },
    availableSettings: {
        sort: true
    },
    fastRender: true
});
