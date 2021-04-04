var express = require('express');
var router = express.Router();

// Require controller modules.
var admin_controller = require('../controllers/adminController');

// GET catalog home page.
router.get('/', admin_controller.index);

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/admin/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/admin/create', author_controller.author_create_post);
// GET request to update Author.
router.get('/admin/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/admin/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/admin/:id', author_controller.author_detail);

module.exports = router;
