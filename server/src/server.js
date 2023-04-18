const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const authMiddleware = require('./middleware/authMiddleware')
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const port = 3000

//middleware
app.use(morgan(':method :url :status :res[content-length] - :date[clf] (:response-time ms)'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authMiddleware);

//Routes
app.use(taskRoutes)
app.use(authRoutes)

//Starting the server
app.listen(port, () => {
    console.log(`${process.env.npm_package_name} listening on port ${port}`)
});