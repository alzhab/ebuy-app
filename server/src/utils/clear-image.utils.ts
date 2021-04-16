import * as path from 'path';
import * as fs from 'fs';

const clearImage = (filePath) => {
  filePath = path.join(process.env.static_path, 'images', filePath);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

export default clearImage;
