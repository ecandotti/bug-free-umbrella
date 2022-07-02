import { EVENT_TYPE } from '../configs/constants'

import { db } from '../server'

import { sendMail } from './sendMail'

export const addProbeEvent = (Gpio: any) => {
    const currentDate = new Date()
    const probeId = Gpio._gpio

    sendMail(EVENT_TYPE, probeId)

    // db.run(
    //     'INSERT INTO logs (probe_id, created_at) VALUES ($probe_id, $created_at)',
    //     {
    //         $probe_id: 2,
    //         $created_at: currentDate,
    //     },
    // )

    console.log('Done !')
    return true
}
