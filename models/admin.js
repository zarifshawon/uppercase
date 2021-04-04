var database = require('./routes/connection');
var async = require('async');

//Define a schema

var Schema = MongoClient.Schema,
 ObjectId = Schema.ObjectId,
 uuid = require('uuid'),
 Validator = require('validator').Validator,
 val = new Validator(),
 bcrypt = require('bcrypt');

Validator.prototype.error = function(msg) { return false; };

var AdminSchema = new Schema({
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 username: { type: String, required: true },
 emailAddress: { type: String, lowercase: true, unique: true },
 passwordHash: { type: String, required: true },
 active: { type: Boolean, default: true, required: true },
 lastUpdatedBy: { type: String, required: true, default: 'System' },
 lastUpdatedDate: { type: Date, required: true, default: new Date() },
 passwordResetToken: String,
 passwordResetExpiration: Date,
 emailConfirmationToken: { type: String, default: uuid() },
 lastIPAddress: String,
 role: { type: String, enum: ['user', 'admin'], default: 'admin', required: true },
 _parent: Schema.ObjectId
});

AdminSchema.virtual('password')
.get(function() {
 return this._password;
})
.set(function(value) {
 this._password = value;
 var salt = bcrypt.gen_salt_sync(12);
 this.passwordHash = bcrypt.encrypt_sync(value, salt);
});

AdminSchema.virtual('passwordConfirmation')
.get(function() {
 return this._passwordConfirmation;
})
.set(function(value) {
 this._passwordConfirmation = value;
});

AdminSchema.path('passwordHash').validate(function(v) {
 if (this._password || this._passwordConfirmation) {
   if (!val.check(this._password).min(6)) {
     this.invalidate('password', 'must be at least 6 characters.');
   }
   if (this._password !== this._passwordConfirmation) {
     this.invalidate('passwordConfirmation', 'must match confirmation.');
   }
 }

 if (this.isNew && !this._password) {
   this.invalidate('password', 'required');
 }
}, null);

AdminSchema.path('firstName').validate(function(v) {
 if (!val.check(v).max(100)) {
   this.invalidate('firstName', 'must be less than 100 characters');
 }
}, null);

AdminSchema.path('lastName').validate(function(v) {
 if (!val.check(v).max(100)) {
   this.invalidate('lastName', 'must be less than 100 characters');
 }
}, null);

AdminSchema.path('emailAddress').validate(function(v) {
 if (!val.check(v).isEmail()) {
   this.invalidate('emailAddress', 'must be a valid email address');
 }
}, null);
// Virtual for author's URL
AdminSchema
.virtual('url')
.get(function () {
  return '/admin/' + this._id;
});

module.exports = mongoose.model('Admin', AdminSchema);
