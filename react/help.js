exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    title: 'help',
    description: `With ${client.guilds.size} servers!\n[See documentation on Auberant's web.](https://auberant.tk)`
  }})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Auberant Discord bot help documentation.',
  usage: 'help'
}
