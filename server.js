const express = require('express');

const app = express();
const PORT = process.env || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('html'));


const foods = [
    { name: "pizza" }, { name: "sushi"}, { name: "ice cream"}
];

app.get('/api/foodlist', function( req, res ){
    res.send(foods);
});

app.post('/api/foodlist', function( req, res){
    console.log(req.body);
    foods.push(req.body);
    res.send(foods);
})

app.listen(PORT, function(){
    console.log("Server is runnning...PORT: " + PORT)
});