const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err); // Prevent sending response twice
    }

    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = { errorHandler };
