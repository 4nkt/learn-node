exports.myMiddleware = (req, res, next) => {
  req.name = 'John';
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};