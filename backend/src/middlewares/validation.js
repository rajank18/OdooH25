// middlewares/validate.js
const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: result.error.flatten(),
            });
        }
        req.validated = result.data;
        next();
    };
};

module.exports = validate;
