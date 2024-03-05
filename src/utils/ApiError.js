class ApiError extends Error {
    constructor( 
        // we used constructor to wrap the errorHandling code. so that in future we can't get any
        // substancious error from server side.
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export { ApiError }