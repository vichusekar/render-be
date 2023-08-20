const mongodb = require('mongodb')
const dbName = process.env.DB_NAME
const dbUrl = `mongodb+srv://root:888333@cluster0.zfpvnmb.mongodb.net/${dbName}`

module.exports = {mongodb,dbName, dbUrl}