const mongoose = require('mongoose');

mongoose
//conexcion base de datos
.connect(process.env.MONGODB_URI)
//si hubo conexcion a bd
.then(bd=> console.log('conecto base de datos'))
//si hubo un error en bd
.catch(err => console.log('Error conect database'+err))