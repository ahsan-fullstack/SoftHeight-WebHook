export const GlobalErrorHandler = (err, req, res, next) => {
  console.error(err,'errrr---------------')
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message
  })
}