const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  console.log(req.headers, "HEADERIS");
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'no token provided' });
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = user.data;
    next();
  } catch (err) {
    console.log(err.message);
    if (err.message === 'jwt expired') {
      return res.status(401).send('expiredJWT');
    }
    return res.status(401).json({ errorType: 'unauthorized' });
  }
};
