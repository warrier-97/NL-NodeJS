function sendJsonErrorResponse( req, res, statusCode, message ) {
    return res.status(statusCode).json({
        "message": message
    });
}

module.exports = {
    sendJsonErrorResponse
};