//MAKE SURE IT IS AT THE TOP  OF INDEX.JS
const dotenv = require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path'); 

console.log("web 36 rocks");
console.log(__dirname);
console.log(process.env.LADY);
console.log(process.env.FOO);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/*', ( _, res ) => {
    res.json({ data: 'web 36 rocks '});
})

app.use('*', (_, res) => {
    //send back index.html
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

app.listen(port, () => {
    console.log('SERVER IS LISTENING ON PORT 5000')
})