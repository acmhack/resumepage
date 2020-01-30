
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  profile: {
	adult: Boolean,
	codeAgreement: Boolean,
	name: String,
	school: String,
	phone: String,
	graduationYear: String,
	race: String,
	participationCount: String,
	linkedIn: String,
	resume: String,
	github: String,
	otherSites: String,
	ssSize: String,
	diet: String,
	travel: String,
	superbowl: String,
	game: String,
	discoveryMethod: String
  },

  confirmation: {
	dietaryRestrictions: [],
	phone: String,
	shirtSize: String,
	signaturePhtotoRelease: String,
	signatureCodeOfConduct: String
  },

  status: {
	completedProfile: Boolean,
	admitted: Boolean,
	confirmed: Boolean,
	declined: Boolean,
	checkedIn: Boolean,
	reimbursementGiven: Boolean,
	admittedBy: String,
	confirmedBy: Number
  },

  admin: Boolean,
  timestamp: Number,
  lastUpdated: Number,
  verified: Boolean,
  salt: Number,
  email: String,
  password: String,
  resume: [],
  __v: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;