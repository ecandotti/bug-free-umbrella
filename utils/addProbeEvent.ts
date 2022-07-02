import { EVENT_TYPE } from '../configs/constants'

import { db } from '../server'

import { sendMail } from './sendMail'

export const addProbeEvent = (probeName: any) => {
    const currentDate = new Date()
    // const probeId = probeName._gpio

    console.log(probeName._gpio)

    // sendMail(EVENT_TYPE)

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
