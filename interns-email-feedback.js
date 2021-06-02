const mg = require('mailgun-js');

module.exports = {
    name: "Intern Email Feedback",
    description: "Sends 'hello' to registered intern",
    key: "intern_email_feedback",
    version: "0.0.6",
    type: "action",
    props: {
        mailgun: {
            type: "app",
            app: "mailgun",
        },
        targetEmail: {
            type: "string",
            label: "Target email",
        }
    },
    async run() {
        const api_key = this.mailgun.$auth.api_key;
        const domain = 'send.web-bee.ru';
        const mailgun = mg({apiKey: api_key, domain: domain});
        const data = {
            from: 'web-bee.ru <internship@web-bee.ru>',
            to: this.targetEmail,
            subject: 'Вы успешно записались на стажировку',
            text: `Здравствуйте.

Мы получили вашу заявку и в ближайшее время с вами свяжемся.
Если вам необходимо что-то уточнить - можете ответить на это письмо, или написать в наш telegram-чат:
https://t.me/joinchat/QRGwBxgK46xjZjFi

Спасибо!`
        };

        return new Promise((resolve, reject) => {
            mailgun.messages().send(data, function (error, body) {
                if (error) return reject(error);
                console.log(body);
                resolve(body);
            });
        });
    },
}
