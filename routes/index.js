const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureRole } = require('../config/auth');

router.get('/', (req, res) => res.render('welcome'));

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/admin', ensureRole('admin'), (req, res) =>
  res.send('Admin area')
);

module.exports = router;
