var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});
router.get('/login/', function(req, res, next) {
  res.render('login-1');
});
router.get('/login/doctor/', function(req, res, next) {
  res.render('doctor-login');
});
router.get('/user/agent/', function(req, res, next) {
  res.render('custom/apps/user/list-default');
});
router.get('/user/customer/', function(req, res, next) {
  res.render('custom/apps/user/list-datatable');
});
router.get('/user/add-user/', function(req, res, next) {
  res.render('custom/apps/user/add-user');
});
// router.get('/admin/', function(req, res, next) {
//   res.render('custom/apps/projects/list-columns-1');
// });


module.exports = router;
