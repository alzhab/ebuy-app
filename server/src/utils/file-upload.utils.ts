import * as multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

const translitirate = (word: string) => {
  let answer = '';
  const a = {};

  a['Ё'] = 'YO';
  a['Й'] = 'I';
  a['Ц'] = 'TS';
  a['У'] = 'U';
  a['К'] = 'K';
  a['Е'] = 'E';
  a['Н'] = 'N';
  a['Г'] = 'G';
  a['Ш'] = 'SH';
  a['Щ'] = 'SCH';
  a['З'] = 'Z';
  a['Х'] = 'H';
  a['Ъ'] = "'";
  a['ё'] = 'yo';
  a['й'] = 'i';
  a['ц'] = 'ts';
  a['у'] = 'u';
  a['к'] = 'k';
  a['е'] = 'e';
  a['н'] = 'n';
  a['г'] = 'g';
  a['ш'] = 'sh';
  a['щ'] = 'sch';
  a['з'] = 'z';
  a['х'] = 'h';
  a['ъ'] = "'";
  a['Ф'] = 'F';
  a['Ы'] = 'I';
  a['В'] = 'V';
  a['А'] = 'a';
  a['П'] = 'P';
  a['Р'] = 'R';
  a['О'] = 'O';
  a['Л'] = 'L';
  a['Д'] = 'D';
  a['Ж'] = 'ZH';
  a['Э'] = 'E';
  a['ф'] = 'f';
  a['ы'] = 'i';
  a['в'] = 'v';
  a['а'] = 'a';
  a['п'] = 'p';
  a['р'] = 'r';
  a['о'] = 'o';
  a['л'] = 'l';
  a['д'] = 'd';
  a['ж'] = 'zh';
  a['э'] = 'e';
  a['Я'] = 'Ya';
  a['Ч'] = 'CH';
  a['С'] = 'S';
  a['М'] = 'M';
  a['И'] = 'I';
  a['Т'] = 'T';
  a['Ь'] = "'";
  a['Б'] = 'B';
  a['Ю'] = 'YU';
  a['я'] = 'ya';
  a['ч'] = 'ch';
  a['с'] = 's';
  a['м'] = 'm';
  a['и'] = 'i';
  a['т'] = 't';
  a['ь'] = "'";
  a['б'] = 'b';
  a['ю'] = 'yu';

  for (const i in word as any) {
    if (word.hasOwnProperty(i)) {
      if (a[word[i]] === undefined) {
        answer += word[i];
      } else {
        answer += a[word[i]];
      }
    }
  }
  return answer;
};

const filename = (req, file, cb) => {
  const id = uuidv4();
  const newName = id + path.extname(translitirate(file.originalname));

  cb(null, newName);
};

const imagesStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files/images');
  },
  filename,
});

const imagesFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const filesStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files/files');
  },
  filename,
});

export const imagesUpload = {
  storage: imagesStorage,
  fileFilter: imagesFilter,
};
export const filesUpload = { storage: filesStorage };
