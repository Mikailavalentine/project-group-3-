const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const router = require('./controllers');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// set up session
const sessionMiddleware = session({
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
});

// set up middleware and engine
app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// connect routes
app.use(router);

// connect to db and listen
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  })
  .catch((err) => {
    console.error(err);
  });
