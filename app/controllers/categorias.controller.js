const db = require("../models");
const Categoria = db.categoria;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.titulo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const categoria = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  };

  Categoria.create(categoria)
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
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;

  Categoria.findAll({ where: condition })
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

  Categoria.findByPk(id)
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

  Categoria.update(req.body, {
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

  Categoria.destroy({
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
  Categoria.destroy({
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
  Categoria.findAll({ where: { published: true } })
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