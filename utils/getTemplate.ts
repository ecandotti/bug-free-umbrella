import { readFileAsString } from './readFileAsString'

export const getTemplate = (file: string) => {
    let template = ''
    // read file as string
    template = readFileAsString(file)
    return template
}
