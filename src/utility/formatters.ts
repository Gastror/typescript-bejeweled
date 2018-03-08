export const gridAreas = (arr: string[]) => arr.map(v => `'${v}'`).reduce((tv, cv) => tv + cv);
