export function generateCode(template: string, data: any) {
   return template.replace(
      /\{\{(?<path>[\w+\.*]+)\}\}/gim,
      (value) => extractData(value.replace('{{', '').replace('}}', ''), data) ?? value
   );
}

function extractData(key: string, data: any): string | null {
   if (key in data) return String(data[key]);

   if (key.includes('.')) {
      return extractData(
         key.split('.').slice(1).join('.'),
         data[key.split('.').pop() ?? 'notFound']
      );
   } else {
      return null;
   }
}
