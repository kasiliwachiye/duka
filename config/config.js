const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    'mongodb+srv://kasiliwachiye:RabbitHole4747@cluster0.xewhkin.mongodb.net/?retryWrites=true&w=majority' ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/duka',
  stripe_connect_test_client_id: 'ca_FkyHCg7X8mlvCUdMDao4mMxagUfhIwXb',
  stripe_test_secret_key: 'sk_test_51IdvJgK5HXK2AlvIGdtWYY4u9zxByOQPWmt6GItrzh8wWlA7SJDE6DCOWC78mcUwSk39aCUP54iJNIsqUOt905x600hkWmZ445',
  stripe_test_api_key: 'pk_test_51IdvJgK5HXK2AlvIKbc40hl2oN1BM5STp5ECiv3ccWg4reGk4Ps0DaJhhRjPe0mT31NOgR7BbnmbfuZpj3btNa4t002FqjU7Jz'
}

export default config