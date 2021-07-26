module.exports = app => {
  const tutorials = require('../controllers/tutorials.controller');

  const router = require('express').Router();

  // create new Tutorial
  router.post('/', tutorials.create);

  // retrieve all Tutorials
  router.get('/', tutorials.findAll);

  // retrieve all published Tutorials
  router.get('/published', tutorials.findAllPublished);

  // retrieve a single Tutorial with id
  router.get('/:id', tutorials.findOne);

  // update a tutorial with id
  router.put('/:id', tutorials.update);

  // delete a tutorial with id
  router.delete('/:id', tutorials.delete);

  // delete all tutorials 
  router.delete('/', tutorials.deleteAll);

  app.use('/api/tutorials', router);
}