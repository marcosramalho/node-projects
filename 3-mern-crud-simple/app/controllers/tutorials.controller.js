const db = require('../models');
const Tutorial = db.tutorials

// create and save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) return res.status(400).json({ message: 'Content can not be empty!' });

  // create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  })

  // save Tutorial in the dabase 
  tutorial.save(tutorial).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some error occurred while creating the Tutorial' });
  })

}

// retrieve all Tutorials from the databse
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {}

  Tutorial.find(condition).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some error occurred while retrieving tutorials' });
  });
}

// find a single tutorials by the ID in the request
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id).then(data => {
    if (!data) return res.status(404).json({ message: 'Not found Tutorial with id = ' + id })

    res.json(data)
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some error occurred while retrieving tutorials' });
  })
}

// update a tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) return res.status(400).json({ message: 'Data to update can not be empty' });

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data)
      return res.status(404).json({ message: 'Cannot update Tutorial whith id = ' + id + ' . Maybe Tutorial was not found!' });

    res.send({ message: 'Tutorial was updated successfully!' })
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some Error occurred while updating Tutorial' });
  })
}

// delete a tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id).then(data => {
    if (!data)
      return res.status(404).json({ message: 'Cannot delete Tutorial with id ' + id + ' . Maybe Tutorial was not found!' })

    res.json({ message: 'Tutorial was deleted successfully!' });
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Error updating Tutotrial with id = ' + id });
  })
}

// delete all tutorials from the database
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({}).then(data => {
    res.json({ message: `${data.deletedCount} Tutorials were deleted successfully!` });
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some error occurred while removing all tutorials. ' })
  })
}

// find all published tutorials 
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true }).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json({ message: err.message || 'Some error occurred while retrieving tutorials.' });
  })
}