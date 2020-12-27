module.exports = ({ env }) => ({
  settings: {
    logger: {
      level: "error",
    },
    cors: {
      origin: ['https://www.katebromley.com', env('PREVIEW_URL')],
    },
  },
});
