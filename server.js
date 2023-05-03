const express = require('express')
const response = require('express')

var app = express()

const { MongoClient } = require('mongodb');

async function main() {

  const uri = "mongodb+srv://xangelajuarez:testtesttest@test1.l2sz801.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
  await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }


}

main().catch(console.error);

// express api info
app.use(express.static('public'))

app.get("/", function(request, response) {
    response.sendFile('index.html', { root: 'public' })
})

app.get("/getoutofmyroom", function(request, response) {
    response.sendFile('foreverfifteen_twine.html', { root: 'public' })
})

app.get("/fivemoreminutes", function(request, response) {
    response.sendFile('xx4evrfift33nxx.html', { root: 'public' })
})

app.listen(443, function() {
    console.log("server started on port 443")
})

