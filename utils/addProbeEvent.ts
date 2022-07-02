import { EVENT_TYPE } from '../configs/constants'

import { db } from '../server'

import { sendMail } from './sendMail'

export const addProbeEvent = (probeName: any) => {
    const currentDate = new Date()

    console.log(probeName)

    // sendMail(EVENT_TYPE)

    // db.run(
    //     'INSERT INTO logs (probe_id, status, created_at) VALUES ($probe_id, $status, $created_at)',
    //     {
    //         $probe_id: 2,
    //         $status: 0,
    //         $created_at: currentDate,
    //     },
    // )

    console.log('Done !')
    return true
}
