const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
// var router = express.Router();
const angular = require('./server/config/routes')(express.Router());
const groups = require('./server/config/groupsRoutes')(express.Router());
const user = require('./server/config/usersRoutes')(express.Router());
// const user = require('./server/config/usersRoutes')

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(flash())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/my-angular-app/dist/my-angular-app' ));
// app.use(express.static(__dirname + '/client/dist/'));

app.use('/api/tasks', angular);
app.use('/api/groups', groups);
app.use('/api/user', user);

app.get('*', (req, res) => {
  // console.log("APP.GET *:",__dirname + '/my-angular-app/dist/my-angular-app/index.html')
  res.sendFile(__dirname + '/my-angular-app/dist/my-angular-app/index.html');
})

// require('./server/config/routes')(app);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}`))