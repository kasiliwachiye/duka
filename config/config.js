const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://kasiliwachiye:RabbitHole4747@cluster0.xewhkin.mongodb.net/?retryWrites=true&w=majority', 
  stripe_connect_test_client_id: 'ca_FkyHCg7X8mlvCUdMDao4mMxagUfhIwXb',
  stripe_test_secret_key: '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',
  stripe_test_api_key: 'pk_live_51IdvJgK5HXK2AlvIpE92GtBv8lqz6UDrnneZaOSSFsy4Kf7vI2DWodkpAevs3S8riKBgYYXAhMtgJhVDjjkRAkVP00H6c6gwd1',
}

export default config;