module.exports = (err, req, res, next) => {

    if(process.env.NODE_ENV == 'prod '){
            // Rendered Website
            err.statuseCode = err.statuseCode || 500
            err.status = err.status || 'error'

            return res.status(err.statuseCode).json({
                status: err.status,
                message: err.message
            })
            
    }else{
        // Rendered Website
        err.statuseCode = err.statuseCode || 500
        err.status = err.status || 'error'

        return res.status(err.statuseCode).json({
            status: err.status,
            message: err.message,
            error: err,
            stack: err.stack
        })
    }

    
}