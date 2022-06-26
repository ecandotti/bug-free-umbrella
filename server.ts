import 'dotenv/config'
// import { Gpio } from 'onoff'
import SQLite from 'sqlite3'
import cron from 'node-cron'

import { sendMail } from './utils/sendMail'
import { addProbeEvent } from './utils/addProbeEvent'

import { REPORT_TYPE } from 'configs/constants'

export const db = new SQLite.Database('./databases/alcm-analyzer.sql')

db.serialize(() => {
    db.run(
        'CREATE TABLE IF NOT EXISTS logs (probe_id INT NOT NULL, status INT NOT NULL, created_at TIMESTAMP(0) NOT NULL)',
    )
})

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
//         sendMail(REPORT_TYPE)
//     },
//     {
//         timezone: 'Europe/Paris',
//     },
// ).start()

// probe1.watch((err: any, value: number) => {
//     console.log('From proble1 : ', { value })
//     console.log('From proble1 : ', { err })
//     // if (err) {
//     //     console.log('Impossible de lire la sonde 1')
//     // }

//     // if (value === 1) {
//     //     isAgainActive(probe1)
//     // }
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

const isAgainActive = (probe: any) => {
    const probeState = probe.readSync()

    if (probeState === 1) {
        console.log('Send email !')
        addProbeEvent(probe)
    } else {
        console.log('False alarm !')
    }
}
