import nodemailer from 'nodemailer';
import path from 'path';
import logger from '../middlewares/logger';

require('dotenv').config();

async function sentmail(toaddress, subject, html, attach) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.gmail_username,
        pass: process.env.gmail_password,
      },
    });
    const mailoptions = {
      from: process.env.gmail_username,
      to: toaddress,
      subject,
      html,
      attachDataUrls: attach || false,
      generateTextFromHTML: true,
    };
    transporter.sendMail(mailoptions, async (error, info) => {
      if (error) {
        logger.info(`🔴 ${error} requires elevated privileges`);
      } else {
        // db store data
        logger.info(`🟢 Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    logger.info(`Error from mail ->  ${error.message}`);
  }
}

export { sentmail };
