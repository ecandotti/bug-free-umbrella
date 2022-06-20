import 'dotenv/config'
// import { Gpio } from 'onoff'
import cron from 'node-cron'
import Twig from 'twig'

// import { sendWeeklySummary } from './sendWeeklySummary'

const start_date = '01/01/2022'
const end_date = '06/01/2022'
const number = 1

const probe = [
    {
        date: '01/01/2022',
        status: 1,
        date_event: '12:34',
    },
    {
        date: '02/01/2022',
        status: 1,
        date_event: '12:34',
    },
    {
        date: '03/01/2022',
        status: 1,
        date_event: '12:34',
    },
    {
        date: '04/01/2022',
        status: 1,
        date_event: '12:34',
    },
    {
        date: '05/01/2022',
        status: 0,
        date_event: '12:34',
    },
    {
        date: '06/01/2022',
        status: 1,
        date_event: '12:34',
    },
]

// Initialisation GPIOs
// const probe1 = new Gpio(4, 'in')
// const probe2 = new Gpio(27, 'in')
// const probe3 = new Gpio(22, 'in')
// const probe4 = new Gpio(23, 'in')
// const probe5 = new Gpio(24, 'in')
// const probe6 = new Gpio(25, 'in')

// Initialisation cron-tab
// cron.schedule(
//     '* * * * Monday',
//     () => {
//         console.log('Send weekly summary')
//         sendWeeklySummary()
//     },
//     {
//         timezone: 'Europe/Paris',
//     },
// ).start()

// probe1.watch((err, value) => {
//     console.log('From proble1 : ', { value })
//     console.log('From proble1 : ', { err })
// })

// probe2.watch((err, value) => {
//     console.log('From proble2 : ', { value })
//     console.log('From proble2 : ', { err })
// })

// probe3.watch((err, value) => {
//     console.log('From proble3 : ', { value })
//     console.log('From proble3 : ', { err })
// })

// probe4.watch((err, value) => {
//     console.log('From proble4 : ', { value })
//     console.log('From proble4 : ', { err })
// })

// probe5.watch((err, value) => {
//     console.log('From proble5 : ', { value })
//     console.log('From proble5 : ', { err })
// })

// probe6.watch((err, value) => {
//     console.log('From proble6 : ', { value })
//     console.log('From proble6 : ', { err })
// })

// const isAgainActive = (probe: Gpio) => {
//     const probeState = probe.readSync()
//     if (probeState === 1) {
//         console.log('Send SMS !')
//         console.log('Write event in logbook !')
//     } else {
//         console.log('False alarm !')
//     }
// }

Twig.renderFile('./weeklySummary.twig', { probe, start_date, end_date, number }, (err, result) => {
    console.log({ err })
    console.log({ result })
})
