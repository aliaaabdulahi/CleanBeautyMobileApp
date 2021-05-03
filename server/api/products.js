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
    // const array = req.params.productName.split("%");
    // console.log("thee array", array);
    // let results = [];
    // array.map(async (word) =>
    //   results.push(
    //     await Product.findAll({
    //       where: {
    //         ["currentSku/imageAltText"]: {
    //           [Op.substring]: word,
    //         },
    //       },
    //     })
    //   )
    // );

    const queryArray = req.params.productName.split(" ");
    let results = [];
    for (let i = 0; i < queryArray.length; i++) {
      results.push(
        await Product.findAll({
          where: {
            ["currentSku/imageAltText"]: {
              [Op.substring]: queryArray[i],
            },
          },
        })
      );
    }

    // const product = await Product.findAll({
    //   where: {
    //     ["currentSku/imageAltText"]: {
    //       [Op.substring]: req.params.productName,
    //     },
    //   },
    // });
    res.json(results);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);
  res.send(product);
});

module.exports = router;
