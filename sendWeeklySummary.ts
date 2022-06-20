import Twig from 'twig'

export const sendWeeklySummary = () => {
    Twig.renderFile('./weeklySummary.twig', { test: 'okok' }, (err, result) => {
        console.log({ err })
        console.log({ result })
    })
}
