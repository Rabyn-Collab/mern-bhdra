import path from 'path';
import { v4 as uuidv4 } from 'uuid';


const supportedFormats = ['.jpg', '.png', '.jpeg', '.gif', '.webp'];

export const fileCheck = (req, res, next) => {

  const file = req.files?.image;


  if (!file) return res.status(400).json({ message: "Please upload an image" });

  const isArray = Array.isArray(file);
  let imagepaths = [];
  if (isArray) {
    file.forEach((item) => {
      const ext = path.extname(item.name);
      if (!supportedFormats.includes(ext)) return res.status(400).json({ message: "Unsupported file format" });
      const imagePath = `${uuidv4()}-${item.name}`;

      imagepaths.push(imagePath);


      item.mv(`./uploads/${imagePath}`, (err) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });

      });


    });



  } else {

    const ext = path.extname(file.name);

    if (!supportedFormats.includes(ext)) return res.status(400).json({ message: "Unsupported file format" });

    const imagePath = `${uuidv4()}-${file.name}`;
    imagepaths.push(imagePath);

    file.mv(`./uploads/${imagePath}`, (err) => {
      if (err) return res.status(500).json({ message: "Something went wrong" });


    });



  }


  req.imagePath = imagepaths;
  next();







}


export const updateFileCheck = (req, res, next) => {

  const file = req.files?.image;


  if (!file) return next();


  const isArray = Array.isArray(file);
  let imagepaths = [];
  if (isArray) {
    file.forEach((item) => {
      const ext = path.extname(item.name);
      if (!supportedFormats.includes(ext)) return res.status(400).json({ message: "Unsupported file format" });
      const imagePath = `${uuidv4()}-${item.name}`;

      imagepaths.push(imagePath);


      item.mv(`./uploads/${imagePath}`, (err) => {

        if (err) return res.status(500).json({ message: "Something went wrong" });

      });


    });



  } else {

    const ext = path.extname(file.name);

    if (!supportedFormats.includes(ext)) return res.status(400).json({ message: "Unsupported file format" });

    const imagePath = `${uuidv4()}-${file.name}`;
    imagepaths.push(imagePath);

    file.mv(`./uploads/${imagePath}`, (err) => {

      if (err) return res.status(500).json({ message: "Something went wrong" });


    });



  }


  req.imagePath = imagepaths;
  next();







}