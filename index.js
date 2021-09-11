const AppError = require('./src/appError');
const errorCatcher = require('./src/errorCatcher');
const globalErrorHandler = require('./src/globalErrorHandler');
const Response = require('./src/response');

module.exports = {
    AppError,
    errorCatcher,
    globalErrorHandler,
    Response,
    appError: AppError,
    response: Response
}