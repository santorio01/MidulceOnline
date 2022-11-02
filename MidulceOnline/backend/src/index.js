const express = require('express');
require('dotenv').config();
require('./database')
require('./models/carrito');
require('./models/producto')
require('./models/detalleCompra')
require('./models/cliente')
require('./models/calificacion')
const app = express();
const port = 3000;
const carritoRouter = require('./routers/carritoRouter');
const productoRouter = require('./routers/productoRouter')
const detalleCompraRouter = require('./routers/detalleCompraRouter')
const clienteRouter = require('./routers/clienteRouter')
const calificacionRouter = require('./routers/calificacionRouter')

//utilidades
app.use(express.json());

//rutas
app.use('/',carritoRouter);
app.use('/',productoRouter);
app.use('/',detalleCompraRouter);
app.use('/',clienteRouter);
app.use('/',calificacionRouter)

app.listen(port,(req,res) =>{
    console.log('servidor online')
})