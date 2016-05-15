module.exports = {
	server: {
		PORT: 3000
	},
	jwt: {
		secret: 'MySecretKeyIsNothing'
	},
	db:{
		url: process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost:27017/canvasShare'
  },
  auth:{
    hashLoop : new Number(6451),
    hashSecret: 'NoSecret'
  }

};
