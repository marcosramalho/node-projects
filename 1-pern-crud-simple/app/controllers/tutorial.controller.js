const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).json({
      message: 'Content can not be empty!',
    });
    return;
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).then({
        message:
          err.message || 'Some error occurred while creating the Tutorial',
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while retrieving tutorials',
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error retrieving Tutorial with id=' + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num[0] === 1) {
        res.json({ message: 'Tutorial was updated successfully' });
      } else {
        res.json({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial as not found or req.body is emptyy`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error updating Tutorial with id=' + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({ where: { id: id } })
    .then((num) => {
      if (num === 1) {
        res.json({
          message: 'Tutorial was deleted successfully!',
        });
      } else {
        res.json({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Could not delete Tutorial with id=' + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.json({
        message: `${nums} Tutorials were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while removing all tutorials',
      });
    });
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while retrieving tutorials',
      });
    });
};
