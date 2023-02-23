module.exports = {
  checkBody: (req, res, next) => {
    if (req.body.username === "john") {
      req.body.lastname = "doe";

      next();
    } else {
      throw { error: "username not john" };
    }
  },
};
