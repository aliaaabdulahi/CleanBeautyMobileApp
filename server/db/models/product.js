const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  brandName: Sequelize.STRING,
  ["currentSku/badgeAltText"]: Sequelize.STRING,
  ["currentSku/biExclusiveLevel"]: Sequelize.STRING,
  ["currentSku/imageAltText"]: Sequelize.STRING,
  ["currentSku/isAppExclusive"]: Sequelize.STRING,
  ["currentSku/isBI"]: Sequelize.STRING,
  ["currentSku/isBest"]: Sequelize.STRING,
  ["currentSku/isFirstAccess"]: Sequelize.STRING,
  ["currentSku/isLimitedEdition"]: Sequelize.STRING,
  ["currentSku/isLimitedTimeOffer"]: Sequelize.STRING,
  ["currentSku/isNatural"]: Sequelize.STRING,
  ["currentSku/isNew"]: Sequelize.STRING,
  ["currentSku/isOnlineOnly"]: Sequelize.STRING,
  ["currentSku/isOrganic"]: Sequelize.STRING,
  ["currentSku/isSephoraExclusive"]: Sequelize.STRING,
  ["currentSku/listPrice"]: Sequelize.STRING,
  ["currentSku/salePrice"]: Sequelize.STRING,
  ["currentSku/skuId"]: Sequelize.STRING,
  ["currentSku/skuImages/image135"]: Sequelize.STRING,
  ["currentSku/skuImages/image162"]: Sequelize.STRING,
  ["currentSku/skuImages/image250"]: Sequelize.STRING,
  ["currentSku/skuImages/image42"]: Sequelize.STRING,
  ["currentSku/skuImages/image450"]: Sequelize.STRING,
  ["currentSku/skuImages/image62"]: Sequelize.STRING,
  ["currentSku/skuImages/image97"]: Sequelize.STRING,
  ["currentSku/skuType"]: Sequelize.STRING,
  displayName: Sequelize.STRING,
  heroImage: Sequelize.STRING,
  heroImageAltText: Sequelize.STRING,
  image135: Sequelize.STRING,
  image250: Sequelize.STRING,
  image450: Sequelize.STRING,
  productId: Sequelize.STRING,
  rating: Sequelize.STRING,
  reviews: Sequelize.STRING,
  targetUrl: Sequelize.STRING,
  url: Sequelize.STRING,
  productArray: {
    type: Sequelize.VIRTUAL,
    get() {
      return this["currentSku/imageAltText"].split(" ");
    },
  },
});

module.exports = Product;
