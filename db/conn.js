const {MongoClient} = require('mongodb')

//conecta com o banco 
const uri = "mongodb://localhost:27017/testemongodb2"

//instancia do mongoCLiente passando a nossa instancia 
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect()
        console.log("Conectando ao MongoDB")
    } catch (err) {
        console.log(err)
    }
    
}

run()

module.exports = client