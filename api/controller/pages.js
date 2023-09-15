const mongoose = require("mongoose");
const Page = require("../models/page");

exports.create_page = async (req, res) => {
  try {
    const page = new Page({
      title: req.body.title,
      pageHtml: req.body.pageHtml,
    });
    await page.save();
    return res.status(201).json({ message: "Page created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
