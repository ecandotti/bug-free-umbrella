import fs from 'fs'

export const readFileAsString = (file: string) => {
    return fs.readFileSync(file).toString()
}
