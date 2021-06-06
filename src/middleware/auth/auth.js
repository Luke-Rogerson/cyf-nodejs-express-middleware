const fakeDb = ["abc123", "afsdjhdfsabj"];

const checkTokenIsValid = (token) => fakeDb.includes(token);

/**
 * **WARNING:** this is for middleware demonstration purposes only!
 * Do not copy this implentation for your app authentication
 */
export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    // check if there is auth header
    if (!authorization) {
      return res.status(401).send({
        message: "Please include auth headers",
      });
    }
    // check if the token is valid
    const tokenIsValid = checkTokenIsValid(authorization);
    if (!tokenIsValid) {
      return res.status(401).send({ message: "You are not authenticated" });
    }

    // token is valid - forward on to next handler
    next();
  } catch (error) {
    res.status(400).send({ messsage: "Invalid request" });
  }
};
