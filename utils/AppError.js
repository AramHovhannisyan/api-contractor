class AppError extends Error{

    constructor(message, statuseCode){
        super(message)

        this.statuseCode   = statuseCode
        this.status        = `${statuseCode}`.startsWith(4) ? 'fail' : 'error'
        
        Error.captureStackTrace(this, this.constructor)
    }

}

module.exports = AppError