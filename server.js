
//? THINGS TO DO ==================
//* COMPLETE add multiple forms 
//* COMPLETE add forms and list to one page
//* COMPLETE display all form data
//* COMPLATE create onpage load and render functions
//* COMPLETE pass all form data to array
//* COMPLETE create render function that displays on page load, as well as on submit
// create database in mysql
// create orm file that writes data to a database

//? additonal =============
// add delete button
// add to Heruko


const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('html'));

const personData = [
    { 
        firstName: "James",
        lastName: "Calverley",
        location: "Kettleby"
    },
    {
        firstName: "Claude",
        lastName: "Claudey-Boi",
        location: "Flesherton"  
    },
    {
        firstName: "Barrack",
        lastName: "Obama",
        location: "Washington"  
    }

];

app.get('/api/person-data-list', function( req, res ){
    res.send(personData);
});

app.post('/api/person-data', function( req, res){
    console.log(req.body);
    personData.push(req.body);
    console.log(personData)
    res.send(personData);
})

app.listen(PORT, function(){
    console.log("Server is runnning...PORT: " + PORT)
});

