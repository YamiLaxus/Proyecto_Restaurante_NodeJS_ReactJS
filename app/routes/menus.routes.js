const { Router } = require('express');
const { getAllMenus, createMenu, deleteMenu, getAMenu, updateMenu } = require('../controllers/menus.controller');

const router = Router();

router.post('/menus', createMenu)

router.get('/menus', getAllMenus)

router.get('/menus/:id', getAMenu)

router.delete('/menus/:id', deleteMenu)

router.put('/menus/:id', updateMenu)

module.exports = router;