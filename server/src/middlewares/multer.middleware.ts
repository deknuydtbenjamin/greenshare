import type { Request } from "express";
import multer from "multer";

const imageAutoriser: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/upload/");
  },
  filename: (req, file, cb) => {
    const name = `${Date.now().toString(36)}${crypto.randomUUID()}`;
    const extension = imageAutoriser[file.mimetype] || "unknown";
    cb(null, `${name}.${extension}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (imageAutoriser[file.mimetype]) {
    cb(null, true);
  } else {
    cb(new Error("fichier non autorisé"));
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter,
});
