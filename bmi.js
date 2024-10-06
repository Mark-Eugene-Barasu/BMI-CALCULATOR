// jshint ESversion:6

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// requiring packages/libraries
import express  from "express";
import bodyParser from "body-parser";

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res) {

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    console.log(weight);
    console.log(height);

    let bmiCalculation = weight / Math.pow(height, 2);

    res.send(`Your BMI is: ${bmiCalculation} kg/m <sup>2</sup>`)
});


app.listen(3000, function() {
    console.log(`Serve is running on port: 3000`);
});

