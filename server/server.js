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

app.get('/sneakers', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let sneakerQuery = `SELECT * FROM Ecom_Prods.products WHERE prod_cat = 'Sneakers'`
    switch(req.query.filter){
        case('J1'):
            sneakerQuery+=` AND prod_name='Jordan 1 Retro High'`
            break
        case('J4'):
            sneakerQuery+=` AND prod_name='Jordan 4 Retro'`
            break
        case('DL'):
            sneakerQuery+=` AND prod_name='Dunk Low Retro'`
            break
    }
    switch(req.query.sort){
        case('LTH'):
            sneakerQuery+=` ORDER BY prod_price ASC`
            break
        case('HTL'):
            sneakerQuery+=` ORDER BY prod_price DESC`
            break
    }
    sneakerQuery+=`;`
    console.log(sneakerQuery)
    connection.query(sneakerQuery, function(error, data){
        res.send(data)})
})

app.get('/apparel', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let apparelQuery = `SELECT * FROM Ecom_Prods.products WHERE prod_cat = 'Apparel'`
    switch(req.query.filter){
        case('ES'):
            apparelQuery+=` AND prod_name='Essentials'`
            break
        case('SP'):
            apparelQuery+=` AND prod_name='Supreme'`
            break
        case('VL'):
            apparelQuery+=` AND prod_name='Vlone'`
            break
    }
    switch(req.query.sort){
        case('LTH'):
            apparelQuery+=` ORDER BY prod_price ASC`
            break
        case('HTL'):
            apparelQuery+=` ORDER BY prod_price DESC`
            break
    }
    apparelQuery+=`;`
    console.log(apparelQuery)
    connection.query(apparelQuery, function(error, data){
        res.send(data)})
})

app.get('/collectibles', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let collectiblesQuery = `SELECT * FROM Ecom_Prods.products WHERE prod_cat = 'Collectibles'`
    switch(req.query.filter){
        case('HT'):
            collectiblesQuery+=` AND prod_name='Hot Toys'`
            break
        case('LG'):
            collectiblesQuery+=` AND prod_name='LEGO'`
            break
        case('PL'):
            collectiblesQuery+=` AND prod_name='Palace'`
            break
    }
    switch(req.query.sort){
        case('LTH'):
            collectiblesQuery+=` ORDER BY prod_price ASC`
            break
        case('HTL'):
            collectiblesQuery+=` ORDER BY prod_price DESC`
            break
    }
    collectiblesQuery+=`;`
    console.log(collectiblesQuery)
    connection.query(collectiblesQuery, function(error, data){
        res.send(data)})
})

app.get('/electronics', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let electronicsQuery = `SELECT * FROM Ecom_Prods.products WHERE prod_cat = 'Electronics'`
    switch(req.query.filter){
        case('XB'):
            electronicsQuery+=` AND prod_name='Microsoft Xbox'`
            break
        case('NT'):
            electronicsQuery+=` AND prod_name='Nintendo Switch Oled'`
            break
        case('PS'):
            electronicsQuery+=` AND prod_name='Sony PlayStation 5'`
            break
    }
    switch(req.query.sort){
        case('LTH'):
            electronicsQuery+=` ORDER BY prod_price ASC`
            break
        case('HTL'):
            electronicsQuery+=` ORDER BY prod_price DESC`
            break
    }
    electronicsQuery+=`;`
    console.log(electronicsQuery)
    connection.query(electronicsQuery, function(error, data){
        res.send(data)})
})

app.listen(5000, ()=>{ //port is localhost:5000
    console.log('Server is listening on port 5000.')
})