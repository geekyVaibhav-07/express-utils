const Response = require('./response');

const devError = (err, res) => {
    res.status(err.statusCode).json(
        new Response({
            status: 0,
            message: err.message,
            err: err,
            stack: err.stack,
        })
    );
};

const prodError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json(
            new Response({
                status: 0,
                err: {
                    status: err.status,
                    message: err.message,
                }
            })
        );
    } else {
        res.status(500).json(
            new Response({
                status: 0,
                err: {
                    status: 'error',
                    message: 'Something went wrong !!!',
                }
            })
        );
    }
};

const globalErrorController = (err, req, res) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    if (process.env.NODE_ENV.toLowerCase() === 'development') {
        devError(err, res);
    } else if (process.env.NODE_ENV.toLowerCase() === 'production') {
        prodError(err, res);
    }
};

module.exports = globalErrorController;
