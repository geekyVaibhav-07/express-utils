const appError = require('./src/appError');
const errorCatcher = require('./src/errorCatcher');
const globalErrorHandler = require('./src/globalErrorHandler');
const response = require('./src/response');

module.exports = {
    appError,
    errorCatcher,
    globalErrorHandler,
    Response: response
}