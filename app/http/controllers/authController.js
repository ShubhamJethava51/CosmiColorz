function authController() {
  return {
    loginIndex(req, res) {
      res.render("auth/login.ejs");
    },
  };
}

module.exports = authController;
