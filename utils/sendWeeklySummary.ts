import Twig from 'twig'

export const sendWeeklySummary = () => {
    Twig.renderFile('./templates/weeklySummary.html', { test: 'okok' }, (err, result) => {
        console.log({ err })
        console.log({ result })
    })
}
