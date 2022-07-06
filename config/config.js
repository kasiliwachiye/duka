require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/duka', 
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: process.env.STRIPE_TEST_SECRET_KEY,
  stripe_test_api_key: process.env.STRIPE_TEST_API_KEY
}

export default config;