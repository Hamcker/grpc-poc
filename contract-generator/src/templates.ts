import { readFileSync } from 'fs';
import path from 'path';

const fileTemplate = readFileSync(path.resolve(__dirname, '../templates/file.txt'), 'utf-8');
const packTemplate = readFileSync(path.resolve(__dirname, '../templates/pack.txt'), 'utf-8');
const serviceTemplate = readFileSync(path.resolve(__dirname, '../templates/service.txt'), 'utf-8');
const fieldTemplate = readFileSync(path.resolve(__dirname, '../templates/field.txt'), 'utf-8');

export default {
   fileTemplate,
   packTemplate,
   serviceTemplate,
   fieldTemplate,
};
