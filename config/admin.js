module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1ce2b59cc51672f57b5a0a21b4dbad9c'),
  },
});
