import Twig from 'twig'
import { createTransport } from 'nodemailer'

import { weeklyTemplatePath } from '../configs/constants'
import { eventSignalPath } from '../configs/constants'

export const sendMail = async (emailType: number) => {
    const transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.SENDER_ADDRESS,
            pass: process.env.SENDER_PASSWORD,
        },
    })

    if (emailType === 0) {
        Twig.renderFile(
            weeklyTemplatePath,
            {
                start_date: '01/01/2022',
                end_date: '06/01/2022',
                probes: [],
            },
            async (err, result) => {
                await transporter.sendMail({
                    from: `"Aleaderclim Frigo Récap" <${process.env.SENDER_ADDRESS}>`,
                    to: `enzo.candotti31@gmail.com`,
                    subject: `Récapitilatif hebdomadaire`,
                    html: result,
                })
            },
        )
    }

    if (emailType === 1) {
        Twig.renderFile(
            eventSignalPath,
            {
                fridge_number: 1,
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
