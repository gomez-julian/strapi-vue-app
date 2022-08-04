module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c1bb7d9dbff4957ae89d05c540b936bf'),
  },
});
