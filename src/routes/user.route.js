const express = require("express");
const getallUsers = require("../controller/getAllUsers.controller");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const registerUserSchema = require("../validation/register.schema");

const userRouter = express.Router();
userRouter.post("/createUser", async (req, res) => {
  const prisma = new PrismaClient();
  const { email, phoneNumber, username, password } = req.body;
  const validPayload = registerUserSchema.parse({ email, phoneNumber, username, password });

  const saltRounds = 10;
  let hashedPassword = "";
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return;
    }

    hashedPassword = hash;
  });
  const userData = await prisma.author.create({
    data: {
      email,
      phoneNumber,
      username,
      password: hashedPassword,
    },
  });
  console.log(userData.id, process.env.JWT_SECRET, { expiresIn: "1h" });

  const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  delete userData.password;
  res.json({ ...userData, token });
  // const { title } = req.body;
  // const book = await prisma.book.create({
  //   data: {
  //     title,
  //   },
  // });
  // res.send(book);
  // const { authorId, bookId } = req.body;
  // const bookAuthor = await prisma.authorBook.create({
  //   data: {
  //     bookId,
  //     authorId,
  //   },
  // });
  // res.send(bookAuthor);
  // const allusers = await prisma.author.findMany({
  //   include: {
  //     AuthorBook: {

  //     },
  //   },

  // select: { username: true },
  //});

  //res.send(allusers);
});

userRouter.get("/findMe", async (req, res) => {
  const prisma = new PrismaClient();
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Unauthorized");
    req.user = decoded;
  });
  const user = await prisma.author.findUnique({ where: { id: req.user.id } });
  res.status(200).json(user);
});
module.exports = userRouter;
