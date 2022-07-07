const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || 
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/duka', 
  stripe_connect_test_client_id: process.env.STRIPE_CONNECT_TEST_CLIENT_ID || "YOUR_stripe_connect_test_client",
  stripe_test_secret_key: process.env.STRIPE_TEST_SECRET_KEY || "YOUR_stripe_test_secret_key",
  stripe_test_api_key: process.env.STRIPE_TEST_API_KEY || "YOUR_stripe_test_api_key",
}

export default config;