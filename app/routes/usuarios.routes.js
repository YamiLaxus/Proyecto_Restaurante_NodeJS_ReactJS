const { Router } = require('express');
const { getAllUsers, createUser } = require('../controllers/usuarios.controller');

const router = Router();

router.post('/usuarios', createUser)

router.get('/usuarios', getAllUsers)

// router.get('/usuarios/:id', getAUser)

// router.delete('/usuarios/:id', deleteUser)

// router.put('/usuarios/:id', updateUser)

module.exports = router;