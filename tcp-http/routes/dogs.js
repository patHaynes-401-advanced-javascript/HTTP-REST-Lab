const get = (req, res) => {
  res.end(JSON.stringify([
    { name: 'Kenobi' },
    { name: 'Summit' },
    { name: 'Harvey' },
  ]));
};

const post = (req, res) => {
  res.end(JSON.stringify(
    { name: 'Kenobi' }
  ));
};

const methods = {
  GET: get,
  POST: post
};

module.exports = (req, res) => {
  const handler = methods[req.method];
  handler(req, res);
};