import Twig from 'twig'
import { createTransport } from 'nodemailer'

import { db } from '../server'

import { weeklyTemplatePath } from '../configs/constants'
import { eventSignalPath } from '../configs/constants'

export const sendMail = async (emailType: number, probeId: any = 0) => {
    const transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.SENDER_ADDRESS,
            pass: process.env.SENDER_PASSWORD,
        },
    })

    if (emailType === 0) {
        const d = new Date()
        const currentDate = d.toISOString().slice(0, 19).replace('T', ' ')
        const dateMinus7days = new Date(d.setDate(d.getDate() - 7))
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ')

        const probesList: Object[] = []

        db.all(
            `SELECT probe_id, created_at FROM logs WHERE created_at >= '${dateMinus7days}' AND created_at <= '${currentDate}'`,
            (error, rows) => {
                console.log({ error })
                rows.forEach((row: Object) => {
                    probesList.push(row)
                })

                Twig.renderFile(
                    weeklyTemplatePath,
                    {
                        start_date: dateMinus7days,
                        end_date: currentDate,
                        probes: probesList,
                    },
                    async (err, result) => {
                        // await transporter.sendMail({
                        //     from: `"Aleaderclim Frigo Récap" <${process.env.SENDER_ADDRESS}>`,
                        //     to: `enzo.candotti31@gmail.com`,
                        //     subject: `Récapitilatif hebdomadaire`,
                        //     html: result,
                        // })
                        console.log(result)
                    },
                )
            },
        )
    }

    if (emailType === 1) {
        Twig.renderFile(
            eventSignalPath,
            {
                probeId,
            },
            async (err, result) => {
                await transporter.sendMail({
                    from: `"Aleaderclim Frigo Récap" <${process.env.SENDER_ADDRESS}>`,
                    to: `enzo.candotti31@gmail.com`,
                    subject: `Hausse de température détecté`,
                    html: result,
                })
            },
        )
    }
}
