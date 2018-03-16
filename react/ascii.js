const figlet = require('figlet')
const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  translate(react, {to: 'en'}).then(res => {
    switch (res.from.language.iso) {
      case 'ko':
        if (!args[0]) {
          message.channel.send({embed: {
            color: 4620980,
            title: '아스키',
            description: `ASCii 문자열을 전송합니다. 인수는 문자열입니다.`
          }})
          return
        }
        var messageToASCii = args.slice(0).join(' ')
        figlet.text(`${messageToASCii}`, (error, data) => {
          if (error) {
            console.error(error)
            message.channel.send({embed: {
              color: 4620980,
              title: '오류',
              description: `${error}`
            }})
            return
          }
          message.channel.send('```' + data + '```')
        })
        break;
      default:
        if (!args[0]) {
          message.channel.send({embed: {
            color: 4620980,
            title: 'ascii',
            description: `Send ASCii text. Argument is string.`
          }})
          return
        }
        var messageToASCii = args.slice(0).join(' ')
        figlet.text(`${messageToASCii}`, (error, data) => {
          if (error) {
            console.error(error)
            message.channel.send({embed: {
              color: 4620980,
              title: 'Error',
              description: `${error}`
            }})
            return
          }
          message.channel.send('```' + data + '```')
        })
        break;
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['아스키'],
  permLevel: 0
}

exports.help = {
  name: 'ascii',
  description: 'Print text to ascii artwork',
  usage: 'ascii <word>'
}