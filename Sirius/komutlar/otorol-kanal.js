const Discord = require('discord.js')
const db = require('wio.db');


exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ".";
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  
   if(args[0] === 'kapat' || args[0] === 'sıfırla') {
   if (db.fetch(`otoRK_${message.guild.id}`)) {
     message.channel.send(`Otorol kayıt kanalı başarıyla kaldırıldı`)
     db.delete(`otoRK_${message.guild.id}`)
     return
}
  message.channel.send(`Otorol kayıt kanalı ayarlanmamış.`)
    return
   }
  
  if (db.has(`otoR_${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce otorol ayarlamanız gerekmektedir.`)
  
    if (!channel) {
        return message.reply("Otomatik rol kayıtları kanalı olarak ayarlamak istediğiniz kanalı etiketleyiniz!")
    }
  
     db.set(`otoRK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Otomatik rol kayıtları kanalı başarıyla ${channel} olarak ayarlandı!\nOtorol kayıt kanalını kapatmak isterseniz **${prefix}oto-rol-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oto-rol-kanal-ayarla', 'oto-rol-kanal-belirle', 'otorolkanal', 'otorol-kanal'],
    permLevel: 0,
    kategori: "sunucu"
}

exports.help = {
    name: 'oto-rol-kanal',
    description: 'PREFİXİ AYARLARIM',
    usage: 'oto-rol-kanal [#kanal/kanal adı]'
}