import  ReadTextFile from "../../../../../../func/fetchTXTfilesAsArray.js"
import { dirname , join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readTextFile = async (fileName , path = __dirname) => {
    const filePath = join(path, fileName);
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        return lines;
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        return [];
    }
}

const firstName =  await readTextFile('firstName.txt' , __dirname)
const lastName = await readTextFile('lastName.txt' , __dirname)
const streets = await readTextFile('streets.txt' , __dirname)
const states = await readTextFile('states.txt' , __dirname)
const citys = await readTextFile('citys.txt' , __dirname)

export {
    firstName, 
    lastName,
    streets,
    states,
    citys
}