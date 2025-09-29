const express = require('express');
const mongoose = require('mongoose');   
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("MongoDB Connected")).catch(err=>console.log(err));

//import routes
const authRoutes = require('./routes/auth');
const productRoute = require('./routes/products');
app.use('/auth', authRoutes);
app.use('/products', productRoute);

app.listen(5000, ()=>console.log("Seerver running on port 5000"))


