import { createError } from "../utils/err.js";


export const verifyUser = (req, res, next) => {

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
};

export const verifyAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
};
