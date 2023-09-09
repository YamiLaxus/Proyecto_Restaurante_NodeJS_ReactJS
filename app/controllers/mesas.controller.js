const db = require("../models");
const Mesa = db.mesa;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.estado) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const mesa = {
    estado: req.body.estado,
    capacidad: req.body.capacidad
  };

  Mesa.create(mesa)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating."
      });
    });
};

exports.findAll = (req, res) => {
  const estado = req.query.estado;
  var condition = estado ? { estado: { [Op.iLike]: `%${estado}%` } } : null;

  Mesa.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Mesa.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Mesa.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Mesa.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Mesa.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Mesa.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};