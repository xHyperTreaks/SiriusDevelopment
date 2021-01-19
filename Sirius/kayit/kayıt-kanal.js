const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
    const yetki = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(ayarlar.embedrenk)
    .setFooter(ayarlar.embedfooter)
    .setDescription(`Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın!`)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki)
   

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ".    ";
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  
   if(args[0] === 'kapat' || args[0] === 'sıfırla') {
   if (db.fetch(`kayitkanal_${message.guild.id}`)) {
     message.channel.send(`Otorol kayıt kanalı başarıyla kaldırıldı`)
     db.delete(`kayitkanal_${message.guild.id}`)
     return
}
  message.channel.send(`Otorol kayıt kanalı ayarlanmamış.`)
    return
   }
  
  if (db.has(`kayiterkek_${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce kayıt erkek rolünü ayarlamanız gerek.`)
  if (db.has(`kayitkadin_${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce kayıt kadın rolünü ayarlamanız gerek.`)
  if (db.has(`kayityetkili.${message.guild.id}`) === false) return message.channel.send(`Bu ayarı kullanmanız için önce Kayıt Yetkilisi rolünü ayarlamanız gerek.`)
  
    if (!channel) {
        return message.reply("Kayıt Kanalını Etiketleyiniz!")
    }
  
     db.set(`kayitkanal_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Etiketlediniz Kanal başarıyla kayıt kanalı olarak ayarlandı kapatmak için \`${prefix}kayıt-kanal sıfırla\`.`)
    .setColor(ayarlar.embedren)
    .setFooter(ayarlar.embedfooter)
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['register-kanal'],
    permLevel: 0,
    kategori: "sunucu"
}

exports.help = {
    name: 'kayıt-kanal',
    description: 'PREFİXİ AYARLARIM',
    usage: 'kayıt-kanal [#kanal/kanal adı]'
}