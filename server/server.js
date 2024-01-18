const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors')

app.use(cors())

app.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials" : true 
});

const connection = mysql.createConnection({ //create new mysql connection
 host: 'localhost', //our computer
 database: 'Ecom_Prods', //schema name to use
 user: 'root', //user belonging to
 password: 'password', //database password
});
connection.connect(function (err) { //attempt mysql connection function
 if (err) throw err;
 console.log('MySQL Database is Connected!');
});

app.get('/', (req, res)=>{
    res.send('Please enter a valid path')
})

// app.get('/def', (req, res)=>{
//     const defQuery = `SELECT * FROM Ecom_Prods.sneakers`;
//     connection.query(defQuery, function(error, data){
//         console.log('Default Data')
//         res.send(data)
//     })
// })

// app.get('/lth', (req, res)=>{
//     const lowToHighQ = `SELECT * FROM Ecom_Prods.sneakers ORDER BY prod_price ASC`;
//     connection.query(lowToHighQ, function(error, data){
//         console.log('Data Sorted Low to High')
//         res.send(data)
//     })
// })

// app.get('/htl', (req, res)=>{
//     const highToLowQ = `SELECT * FROM Ecom_Prods.sneakers ORDER BY prod_price DESC`;
//     connection.query(highToLowQ, function(error, data){
//         console.log('Data Sorted High to Low')
//         res.send(data)
//     })
// })

app.get('/sneakers', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let sneakerQuery = `SELECT * FROM Ecom_Prods.sneakers`
    switch(req.query.filter){
        case('J1'):
            sneakerQuery+=` WHERE prod_name='Jordan 1 Retro High'`
            break
        case('J4'):
            sneakerQuery+=` WHERE prod_name='Jordan 4 Retro'`
            break
        case('DL'):
            sneakerQuery+=` WHERE prod_name='Dunk Low Retro'`
            break
    }
    switch(req.query.sort){
        case('LTH'):
            sneakerQuery+=`  ORDER BY prod_price ASC`
            break
        case('HTL'):
            sneakerQuery+=`  ORDER BY prod_price DESC`
            break
    }
    sneakerQuery+=`;`
    console.log(sneakerQuery)
    connection.query(sneakerQuery, function(error, data){
        res.send(data)})
})

app.listen(5000, ()=>{ //port is localhost:5000
    console.log('Server is listening on port 5000.')
})