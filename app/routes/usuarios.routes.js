const { Router } = require('express');
const { getAllUsers, createUser, getAUser, userLogin, deleteUser, updateUser } = require('../controllers/usuarios.controller');

const router = Router();

router.post('/usuarios', createUser)

router.get('/usuarios', getAllUsers)

router.get('/login', userLogin);

router.get('/usuarios/:id', getAUser)

router.delete('/usuarios/:id', deleteUser)

router.put('/usuarios/:id', updateUser)

module.exports = router;