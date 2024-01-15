const express = require('express')
const mysql = require('mysql2')
const app = express()

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

function getHighToLow(){
    const highToLowQ = `SELECT * FROM Ecom_Prods.sneakers ORDER BY prod_price DESC`;
    connection.query(highToLowQ, function(error, data){
        console.log('Sorted High to Low: ')
        console.log(data)
    })
}

app.get('/', (req, res)=>{
    res.send('wassup')
})

app.get('/def', (req, res)=>{
    const defQuery = `SELECT * FROM Ecom_Prods.sneakers`;
    connection.query(defQuery, function(error, data){
        console.log('Default Data')
        res.send(data)
    })
})

app.get('/lth', (req, res)=>{
    const lowToHighQ = `SELECT * FROM Ecom_Prods.sneakers ORDER BY prod_price ASC`;
    connection.query(lowToHighQ, function(error, data){
        console.log('Data Sorted Low to High')
        res.send(data)
    })
})

app.get('/htl', (req, res)=>{
    const highToLowQ = `SELECT * FROM Ecom_Prods.sneakers ORDER BY prod_price DESC`;
    connection.query(highToLowQ, function(error, data){
        console.log('Data Sorted High to Low')
        res.send(data)
    })
})

app.listen(3000, ()=>{ //port is localhost:3000
    console.log('Server is listening on port 3000.')
})