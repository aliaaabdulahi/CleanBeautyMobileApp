const router = require("express").Router();
const {
  models: { User, Product },
} = require("../db");
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  const products = await Product.findAll();
  res.send(products);
});

router.get("/:productName", async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: {
        ["currentSku/imageAltText"]: {
          [Op.substring]: req.params.productName,
        },
      },
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);
  res.send(product);
});

module.exports = router;
