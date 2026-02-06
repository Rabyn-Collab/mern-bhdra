import Review from "../models/Review.js";




export const getReview = async (req, res) => {

  const { id } = req.params;

  try {


    const reviews = await Review.find({ product: id }).populate({
      path: 'user',
      select: '-password'
    });
    return res.status(200).json(reviews);


  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }

}

export const createReview = async (req, res) => {
  const { comment, rating } = req.body || {};
  const { id } = req.params;
  try {

    await Review.create({
      user: req.userId,
      product: id,
      comment,
      rating
    });

    return res.status(201).json({ message: "Review created successfully" });

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }

}

