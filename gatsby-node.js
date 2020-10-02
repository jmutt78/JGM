const createPosts = require(`./gatsby/createPosts.js`);

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
};
