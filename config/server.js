module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', ''),
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd83d6dd9c84467c62fb343369cd40ada'),
    },
    url: env('ADMIN_URL', '/admin'),
  },
});
