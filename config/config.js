const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    'mongodb+srv://kasiliwachiye:RabbitHole4747@cluster0.xewhkin.mongodb.net/?retryWrites=true&w=majority' ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/duka',
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key' 
}

export default config