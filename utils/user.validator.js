const Joi = require("joi");
const errorFunction = require("./errorFunction")
const passwordComplexity = require("joi-password-complexity");

const validation = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    role : Joi.string().required()
});

module.exports = validation