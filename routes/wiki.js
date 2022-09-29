// const { Router } = require("express")
// const express = require("express")
// const app = express()
const router = require("express").Router();
const page = require("../models");
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send("hey");
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({ title: 11, content: 111 });

    //   res.json(req.body);

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
