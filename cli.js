#! /usr/bin/env node

const dotenv = require('dotenv');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { sms } = require('./sms');

dotenv.config();

const argv = yargs(hideBin(process.argv)).argv;

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } =
  process.env;

sms({
  twilioAccountSid: TWILIO_ACCOUNT_SID,
  twilioAuthToken: TWILIO_AUTH_TOKEN,
  fromPhoneNumber: TWILIO_PHONE_NUMBER,
  toPhoneNumber: argv.to,
  message: argv.message,
})
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(`Unable to send message: ${error.message}`));
