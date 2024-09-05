const { z } = require("zod");

const registerUserSchema = z.object({
  username: z.string().min(3).max(60),
  email: z.string().email(),
  phoneNumber: z.string(), // Optional field
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(100, "Password must be less than 100 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(/[\W_]/, "Password must contain at least one special character."),
});
module.exports = registerUserSchema;
