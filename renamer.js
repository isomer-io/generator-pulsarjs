var replace = require('replace');

replace({
  regex: "Posts",
  replacement: "<%= humanizedPluralName %>",
  paths: ['./collection/templates/collections/posts/', './collection/templates/pages/postCollectionPages/'],
  recursive: true,
});

replace({
  regex: "posts",
  replacement: "<%= camelizedPluralName %>",
  paths: ['./collection/templates/collections/posts/', './collection/templates/pages/postCollectionPages/'],
  recursive: true,
});

replace({
  regex: "Post",
  replacement: "<%= humanizedSingularName %>",
  paths: ['./collection/templates/collections/posts/', './collection/templates/pages/postCollectionPages/'],
  recursive: true,
});

replace({
  regex: "post",
  replacement: "<%= camelizedSingularName %>",
  paths: ['./collection/templates/collections/posts/', './collection/templates/pages/postCollectionPages/'],
  recursive: true,
});
