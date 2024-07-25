import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function ReadTextFile(fileName , path = __dirname) {
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

export default ReadTextFile