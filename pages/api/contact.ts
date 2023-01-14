import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

import {
    emailUser,
    emailPassword,
    emailFrom,
    emailAddress,
} from '../../util/env';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method?.toLowerCase() === 'post') {
        const transporter = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465,
            secure: true,
            auth: {
                user: emailUser,
                pass: emailPassword,
            },
        });

        // to us
        const toUs = {
            from: `"${req.body['personName']}" <${emailAddress}>`,
            to: emailAddress,
            subject: 'Inquiry',
            text:
                `Reason: ${req.body['inquiryReason']}` +
                '\n\n' +
                req.body['inquiryData'] +
                '\n\n' +
                `Can be contacted at: ${req.body['personEmail']}`,
        };
        // log for now
        console.log(toUs);
        await transporter.sendMail(toUs);

        // to them
        await transporter.sendMail({
            from: `"${emailFrom}" <${emailAddress}>`,
            to: req.body['personEmail'],
            subject: 'Thank you for contacting us!',
            text: 'We have received your message and will be contacting you as soon as we can!',
        });

        res.redirect(303, '/?messageReceived=true');
    }
}
