const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://kasiliwachiye:RabbitHole4747@cluster0.xewhkin.mongodb.net/?retryWrites=true&w=majority', 
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key',
}

export default config;