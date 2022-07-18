import lessToJs from 'less-vars-to-js';
import path from 'path';
import fs from 'fs';

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './variables.less'), 'utf8'),
);

export default themeVariables;