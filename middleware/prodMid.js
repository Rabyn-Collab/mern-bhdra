



export const prodMid = (req, res, next) => {
  console.log(req.body);
  const { title } = req.body ?? {};
  if (!title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  req.titleUpper = title.toUpperCase();


  next();
}