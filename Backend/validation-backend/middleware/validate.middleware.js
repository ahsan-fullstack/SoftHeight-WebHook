export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log(result)

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues.map((err)=>({
          field:err.path.join('.'),
          message:err.message
        }))
      })
    }
    req.body = result.data;
    next();
  }
}