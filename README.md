# SMS

Send SMS messages via Twilio.

## Built With

- [Twilio](https://www.twilio.com/)

## Getting Started

This project is released as both a module and a CLI tool.

### Installation

#### For Use in Projects

```sh
npm install @reticlesoftware/sms
```

#### For Use in CLI

```sh
npm install -g @reticlesoftware/sms
```

## Usage

```javascript
const { sms } = require('@reticlesoftware/sms');

sms({
  twilioAccountSid,
  twilioAuthToken,
  toPhoneNumber,
  fromPhoneNumber,
  message,
});
```

or

```sh
sms --to 5555555555 --message "Your message"
```
