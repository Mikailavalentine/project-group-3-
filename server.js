<<<<<<< HEAD
<<<<<<< HEAD
// not sure if this is correct if someone could check that would be nice %^&*

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
=======
const path = require('path');
=======

require('dotenv').config();
const exphbs = require('express-handlebars');
>>>>>>> 2b40e7ce669ad51430f59a4bc602fcc0f706338f
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
<<<<<<< HEAD
const SequelizeStore = require('connect-session-sequelize')(session.Store);
>>>>>>> d017c47cd5bae3b8020fdd0e0c7f2936ccdc719b
=======
const router = require('./controllers');
const sessionMiddleware = require('./config/session');
>>>>>>> 2b40e7ce669ad51430f59a4bc602fcc0f706338f

const PORT = process.env.PORT || 3001;
const app = express();

<<<<<<< HEAD
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
=======
// setup app middleware
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({}));
>>>>>>> 2b40e7ce669ad51430f59a4bc602fcc0f706338f
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect routes
app.use(router);

<<<<<<< HEAD
 sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> d017c47cd5bae3b8020fdd0e0c7f2936ccdc719b
=======
// connect db and listen
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        return process.exit(1);
      }
      console.log(`App listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
>>>>>>> 2b40e7ce669ad51430f59a4bc602fcc0f706338f
