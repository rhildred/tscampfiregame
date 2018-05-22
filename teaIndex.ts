import express = require('express');
import bodyParser = require("body-parser");
import { TeaGame } from "./TeaGame";

// Create a new express application instance
const app: any = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("www"));

app.get("/users/:uname", (req: any, res: any) => {
    res.end("Hello " + req.params.uname);
});

let oGames: any = {};
app.post("/sms", (req: any, res: any) =>{
    let sFrom: string = req.body.From;
    if(!oGames.hasOwnProperty(sFrom)){
        oGames[sFrom] = new TeaGame();
    }    
    let sReply: string = oGames[sFrom].makeAMove(req.body.Body);

    res.end("<Response><Message>" + 
    sReply + "</Message></Response>");

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));