import hogan from 'hogan.js'

import { getTemplate } from './getTemplate'

export const sendWeeklySummary = () => {
    const compiledTemplate = hogan.compile(getTemplate('./templates/weeklySummary.html'))
    const context = {
        message: 'Sunday',
    }

    console.log(compiledTemplate.render(context))
}
