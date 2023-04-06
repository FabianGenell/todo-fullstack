const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes')

const app = express();
const port = 3000

app.use(morgan('tiny'));
app.use(express.json())
app.use(cors());

//Routes
taskRoutes.routes(app);

//Starting the server
app.listen(port, () => {
    console.log(`${process.env.npm_package_name} listening on port ${port}`)
});