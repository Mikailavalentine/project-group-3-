<<<<<<< HEAD
// not sure if this is correct if someone could check that would be nice %^&*

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
=======
const path = require('path');
const express = require('express');
const session = require('express-session');
const express = require('express-handlebars');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
>>>>>>> d017c47cd5bae3b8020fdd0e0c7f2936ccdc719b

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
=======
// Set up Handlebars.js engine with custom helpers
const hbs = express.create({  });

const express = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

 sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> d017c47cd5bae3b8020fdd0e0c7f2936ccdc719b
