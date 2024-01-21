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
 host: 'sql5.freesqldatabase.com', //our computer
 database: 'sql5678420', //schema name to use
 user: 'sql5678420', //user belonging to
 password: 'z46sZT2ePy', //database password
 port: '3306'
});
connection.connect(function (err) { //attempt mysql connection function
 if (err) throw err;
 console.log('MySQL Database is Connected!');
});

let cartQuery = `DELETE FROM cart WHERE prod_id!='';`
console.log('Cart refresh')
connection.query(cartQuery)

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
    let sneakerQuery = `SELECT * FROM products WHERE prod_cat = 'Sneakers'`
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
    connection.query(sneakerQuery, function(error, data){res.send(data)})
})

app.get('/apparel', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let apparelQuery = `SELECT * FROM products WHERE prod_cat = 'Apparel'`
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
    connection.query(apparelQuery, function(error, data){res.send(data)})
})

app.get('/collectibles', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let collectiblesQuery = `SELECT * FROM products WHERE prod_cat = 'Collectibles'`
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
    connection.query(collectiblesQuery, function(error, data){res.send(data)})
})

app.get('/electronics', (req, res)=>{
    if(!req.query.sort){
        return res.send({error: "You must provide a sort query",})
    }
    if(!req.query.filter){
        return res.send({error: "You must provide a filter query",})
    }
    let electronicsQuery = `SELECT * FROM products WHERE prod_cat = 'Electronics'`
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

app.get('/addToCart', (req, res)=>{
    if(!req.query.pId){
        return res.send({error: "You must provide an id query",})
    }
    let cartQuery = `INSERT INTO cart SELECT * FROM products WHERE prod_id='${req.query.pId}' AND NOT EXISTS (SELECT * FROM cart WHERE prod_id='${req.query.pId}');`
    console.log(cartQuery)
    connection.query(cartQuery)
    res.send(req.query.pId+' added to cart.')
})

app.get('/getCart', (req, res)=>{
    let cartQuery = `SELECT * FROM cart;`
    console.log(cartQuery)
    connection.query(cartQuery, function(error, data){res.send(data)})
})

app.get('/removeFromCart', (req, res)=>{
    if(!req.query.pId){
        return res.send({error: "You must provide an id query",})
    }
    let cartQuery = `DELETE FROM cart WHERE prod_id='${req.query.pId}';`
    console.log(cartQuery)
    connection.query(cartQuery)
    res.send(req.query.pId+' removed to cart.')
})

app.get('/clearCart', (req, res)=>{
    let cartQuery = `DELETE FROM cart WHERE prod_id!='';`
    console.log(cartQuery)
    connection.query(cartQuery, function(error, data){res.send('All items removed from cart.')})
})

app.listen(5000, ()=>{ //port is localhost:5000
    console.log('Server is listening on port 5000.')
})