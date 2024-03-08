const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./data"); //local device mai store garna lai
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();

    cb(null, "-" + uniqueSuffix + file.originalname);
  },
});

const fileFilterFunc = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext != ".jpeg" && ext != ".png") {
    cb("Unsupported format", false);
    return;
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilterFunc,
});
module.exports = upload;
