var Author= require('../models/admin');

// Display detail page for a specific Admin.
exports.admin_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.admin_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};
// Handle Author create on POST.
exports.admin_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};
// Display Author update form on GET.
exports.admin_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};
// Handle Author update on POST.
exports.admin_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
