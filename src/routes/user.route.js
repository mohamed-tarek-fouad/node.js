const express = require("express");
const getallUsers = require("../controller/getAllUsers.controller");
const { PrismaClient } = require("@prisma/client");

const userRouter = express.Router();
userRouter.post("/createUser", async (req, res) => {
  const prisma = new PrismaClient();
  // const { email, phoneNumber, username } = req.body;
  // const allUsers = await prisma.author.create({
  //   data: {
  //     email,
  //     phoneNumber,
  //     username,
  //   },
  // });
  // res.send(allUsers);
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
module.exports = userRouter;
