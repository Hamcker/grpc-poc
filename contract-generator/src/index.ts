import { writeFileSync } from 'fs';
import { generateCode } from './code-gen';
import fieldTypes from './fieldTypes';
import templates from './templates';

const FIELD_COUNT = 40;

const fields: string[] = [];
for (let i = 0; i <= FIELD_COUNT; i++) {
   let fieldType = fieldTypes[i % fieldTypes.length];

   fieldType = fieldType.replace('<SELF>', 'ActualData4');

   const field = generateCode(templates.fieldTemplate, {
      type: fieldType,
      name: `Field4${i}`,
      fseq: i + 1,
   });
   fields.push(field);
}

const packs = generateCode(templates.packTemplate, { seq: 4, fields: fields.join('\n  ') });
const services = generateCode(templates.serviceTemplate, { seq: 4 });
const file = generateCode(templates.fileTemplate, { services, packs });

writeFileSync('../contracts/data-generator.proto', file, 'utf-8');
