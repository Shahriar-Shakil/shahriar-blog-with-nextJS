const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "shahriar",
        mongodb_password: "ni23BVn9j9pXJbn",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-site",
      },
    };
  }
  return {
    env: {
      mongodb_username: "shahriar",
      mongodb_password: "ni23BVn9j9pXJbn",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog-site",
    },
  };
};
