import  readTextFile from "../../../../../../func/fetchTXTfilesAsArray.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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