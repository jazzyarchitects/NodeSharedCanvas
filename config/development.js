module.exports = {
	server: {
		PORT: 3000
	},
	jwt: {
		secret: 'MySecretKeyIsNothing'
	},
	db:{
		url: 'mongodb://localhost:27017/canvasShare'
  },
  auth:{
    hashLoop : new Number(6451),
    hashSecret: 'NoSecret'
  }

};
