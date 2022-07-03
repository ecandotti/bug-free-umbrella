import 'dotenv/config'
import { Gpio } from 'onoff'
import SQLite from 'sqlite3'
import cron from 'node-cron'

import { sendMail } from './utils/sendMail'
import { addProbeEvent } from './utils/addProbeEvent'

import { REPORT_TYPE } from './configs/constants'

export const db = new SQLite.Database('./databases/alcm-analyzer.sql')

db.serialize(() => {
    db.run(
        'CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, probe_id INTEGER NOT NULL, created_at DATETIME NOT NULL)',
    )
})

// // Initialisation GPIOs
const probe1 = new Gpio(17, 'in', 'both') //
const probe2 = new Gpio(27, 'in', 'both') // LeftSide - 7
const probe3 = new Gpio(22, 'in', 'both') // LeftSide - 8
const probe4 = new Gpio(23, 'in', 'both') // RightSide - 8
const probe5 = new Gpio(24, 'in', 'both') // RightSide - 9
const probe6 = new Gpio(25, 'in', 'both') // RightSide - 11

// Initialisation cron-tab
cron.schedule(
    '* * * * Monday',
    () => {
        console.log('Send weekly summary')
        sendMail(REPORT_TYPE)
    },
    {
        timezone: 'Europe/Paris',
    },
).start()

probe1.watch((err: any, value: number) => {
    if (err) {
        console.log('Impossible de lire la sonde 1')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe1)
        }, 5000)
    }
})

probe2.watch((err, value) => {
    if (err) {
        console.log('Impossible de lire la sonde 2')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe2)
        }, 5000)
    }
})

probe3.watch((err, value) => {
    if (err) {
        console.log('Impossible de lire la sonde 3')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe3)
        }, 5000)
    }
})

probe4.watch((err, value) => {
    if (err) {
        console.log('Impossible de lire la sonde 4')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe4)
        }, 5000)
    }
})

probe5.watch((err, value) => {
    if (err) {
        console.log('Impossible de lire la sonde 5')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe5)
        }, 5000)
    }
})

probe6.watch((err, value) => {
    if (err) {
        console.log('Impossible de lire la sonde 6')
    }

    if (value === 1) {
        console.log('5s launch...')
        setTimeout(() => {
            isAgainActive(probe6)
        }, 5000)
    }
})

const isAgainActive = (probe: Gpio) => {
    const probeState = probe.readSync()

    if (probeState === 1) {
        console.log('Saving event..')
        addProbeEvent(probe)
    } else {
        console.log('False alarm !')
    }
}
