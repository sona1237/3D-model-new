import express from "express";
import fs from "fs";
import path from "path";
import FileModel from "../models/model.js";
export const router = express.Router();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });






router.get("/", async (req, res) => {
  return res.send("HELLO WORLD");
});

router.get("/getModel", async (req, res) => {
  try {
    let result = await FileModel.findOne().sort({ createdAt: -1 }).limit(1);
    if (result) {
      const __dirname = path.resolve();
      const filePath = path.join(__dirname, "client", "public", "scene.glb");

      // Ensure the directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFile(filePath, result.data, (err) => {
        if (err) {
          console.error("Failed to write file due to ", err);
          throw err;
        }
      });

      return res.status(200).json({
        name: result.filename,
        description: result.description,
        mimeType: result.mimeType,
      });
    }
    return res.status(400).json({ message: "No records found", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post("/saveModel", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    const file = req.file;
    const fileData = Buffer.from(file.buffer);

    const result = new FileModel({
      filename: req.body.name,
      mimeType: req.body.mimetype,
      data: fileData,
      description: req.body.description,
    });

    let saveFile = await result.save();
    if (saveFile) {
      console.log("File Saved");
      res.status(200).send(saveFile);
    }
  } catch (error) {
    console.error("Failed to save data", error);
    res.status(500).send("Error uploading file: " + error);
  }
});

