// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "Pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
    appId: "1335830",
    key: "bb7321c794c2ece60451",
    secret: "4fec69440eaf003ad2dc",
    cluster: "ap2",
    useTLS: true
  });


// middleware
app.use(express.json());

// app.use((request, response, next)=>{
//     // below are response header and star means we are allowing messages from ant endpoint 
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });
// or
app.use(cors()) // this will sets some header we don't above commented chunk lines


// DB config
const connection_url = 'mongodb+srv://nvidda-mongo:nArendrA@cluster0.ii486.mongodb.net/whatsappDB?retryWrites=true&w=majority';
mongoose.connect(connection_url);

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("DB connected!!");
    const msgCollection = db.collection('messagecontents');

    // look for changes in messagecontents collection
    const changeStream = msgCollection.watch(); 

    changeStream.on('change', (change)=>{
        console.log(change);

        if (change.operationType == 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', 
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp:messageDetails.timestamp,
                    received:messageDetails.received
                }
            );
        } else {
            console.log("Error triggering Pusher");
        }
    })
})

// ????


// api routes

app.get('/', (request, response)=>{
    response.status(200).send("hellow world!!");
})

app.get('/api/v1/messages/sync', (request, response)=>{
    Messages.find((err, data)=>{
        if (err){
            response.status(500).send(err);
        } else {
            response.status(200).send(data);
        }
    });
});

app.post('/api/v1/messages/new', (request, response)=>{
    const dbMessage = request.body;
    console.log(`dbMessage : ${dbMessage}`)
    Messages.create(dbMessage, (err, data)=>{
        if (err) {
            response.status(500).send(err);
        }
        else{
            response.status(201).send(data);
        }
    });
});


// listeners
app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`);
    
})
