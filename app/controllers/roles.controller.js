const db = require("../models");
const Rol = db.rol;
const Op = db.Sequelize.Op;

// Validar data null
exports.create = (req, res) => {
  // Validate request
  if (!req.body.descripcion) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const rol = {
    descripcion: req.body.descripcion
  };

  Rol.create(rol)
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
  const descripcion = req.query.descripcion;
  var condition = descripcion ? { descripcion: { [Op.iLike]: `%${descripcion}%` } } : null;

  Rol.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rol."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Rol.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving rol with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Rol.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "rol was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe rol was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating rol with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Rol.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "rol was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete rol with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete rol with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Rol.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} rol were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rol."
      });
    });
};


exports.findAllPublished = (req, res) => {
  Rol.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rol."
      });
    });
};