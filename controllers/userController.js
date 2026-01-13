


export const loginUser = (req, res) => res.status(200).json({ message: "Login successful" });


export const registerUser = async (req, res) => {
  const { username, email, password, bio } = req.body || {};
  try {

  } catch (err) {

  }

};