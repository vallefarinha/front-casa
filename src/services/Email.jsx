import React from 'react'
import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp.your-email.com',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: 'you <username@your-email.com>',
		to: 'someone <someone@your-email.com>, another <another@your-email.com>',
		cc: 'else <else@your-email.com>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);

const Email = () => {
  return (
    <div>Email</div>
  )
}

export default Email