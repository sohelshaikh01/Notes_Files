let mongoose = require('mongoose');

// No need for useNewUrlParser or useUnifiedTopology options anymore
mongoose.connect('mongodb://127.0.0.1:27017/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//     // we're connected!
//     console.log("we are connected bro");
// });

// Work on Database -------------------------

let kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
    id: Number
}); // Defining the Schema of collection table


kittySchema.methods.speak = function() {
    let greeting = "My name is: " + this.name;
    console.log(greeting);
} // Function to run for each document.

// It create Collection / Table of 'Kitten' with plural version name 'Kittens'. 
// Taking first as name, second as Schema method.
let Kitten = mongoose.model('Kitten', kittySchema);
// Kitten is object to run this.


// From below we are defining the rows / documents ------------------
let harryKitty = new Kitten({ name: 'harryKitty'}); // row one
let harryKitty1 = new Kitten({ name: 'harryKitty1'}); // row two

console.log("Name of First Document: " + harryKitty.name);

// This is save method to save database.
harryKitty.save()
    .then((harryKitty) => {
        harryKitty.speak();
    })
    .catch((err) => {
        console.error('Error saving kitty:', err);
    });

harryKitty1.save()
    .then((harryKitty1) => {
        harryKitty1.speak();
    })
    .catch((err) => {
        console.error('Error saving kitty:', err);
    });

let harryKitty2 = new Kitten({name: "harryKitty2", age: 24, id: 101});
harryKitty2.save()
.then((harryKitty2) => { harryKitty2.speak()})
.catch(() => {console.error("It is not been saved")});