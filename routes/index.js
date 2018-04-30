var express = require('express');
var router = express.Router();
const { models } = require("../models");
const Sequelize = require("sequelize");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

router.get('/credits', (req, res, next) => {
  res.render('credits', { title: 'P5_Quiz' });
});

router.get("/quizzes", (req, res, next) => {
  models.quiz.findAll()
    .then(quizzes => {
      res.render("quizzes", { quizzes });
    })
    .catch(error => next(error))
});

module.exports = router;