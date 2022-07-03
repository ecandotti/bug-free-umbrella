import { EVENT_TYPE } from '../configs/constants'

import { db } from '../server'

import { getProbeByGPIO } from './getProbeByGPIO'

import { sendMail } from './sendMail'

export const addProbeEvent = (Gpio: any) => {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const probeId = getProbeByGPIO(Gpio._gpio)

    sendMail(EVENT_TYPE, probeId)

    db.run(
        'INSERT INTO logs(probe_id, created_at) VALUES(?,?)',
        [probeId, currentDate],
        (error: any, rows: any) => {
            console.log({ error })

            if (rows) {
                console.log('Done !')
            }
        },
    )

    return true
}
