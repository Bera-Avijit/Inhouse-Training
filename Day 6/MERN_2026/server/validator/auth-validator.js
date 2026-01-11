const joi = require("joi");

const registationSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).trim().required().messages({
    "string.alphanum": "Username must only contain alpha-numeric characters",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username must be at most 30 characters long",
  }),
  email: joi.string().email({ minDomainSegments: 2 }).required().messages({
    "string.email": "Please provide a valid email address",
  }),
  password: joi
    .string()
    .pattern(
      new RegExp(
        "(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,30}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be 8-30 characters long, include at least one letter, one number, and one special character",
    }),
  phone: joi
    .string()
    .pattern(/^\d+$/)
    .min(10)
    .max(13),
});

module.exports = registationSchema;
