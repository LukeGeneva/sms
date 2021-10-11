const twilio = require('twilio');

const sms = ({
  twilioAccountSid,
  twilioAuthToken,
  toPhoneNumber,
  fromPhoneNumber,
  message,
}) => {
  const client = twilio(twilioAccountSid, twilioAuthToken);
  return client.messages.create({
    to: toPhoneNumber,
    from: fromPhoneNumber,
    body: message,
  });
};

module.exports = { sms };
