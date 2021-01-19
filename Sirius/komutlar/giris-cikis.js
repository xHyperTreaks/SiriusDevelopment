const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
    const yetki = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor("RANDOM")
    .setDescription(`Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın!`)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki)
   

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ".";
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  
   if(args[0] === 'kapat' || args[0] === 'sıfırla') {
   if (db.fetch(`gcK_${message.guild.id}`)) {
     message.channel.send(`Giriş Çıkış kayıt kanalı başarıyla kaldırıldı`)
     db.delete(`gcK_${message.guild.id}`)
     return
}
  message.channel.send(`Giriş Çıkış kayıt kanalı ayarlanmamış.`)
    return
   }
  
  
    if (!channel) {
        return message.reply("Giriş Çıkış kayıtları kanalı olarak ayarlamak istediğiniz kanalı etiketleyiniz!")
    }
  
     db.set(`gcK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Giriş Çıkış kayıtları kanalı başarıyla ${channel} olarak ayarlandı!\nGiriş Çıkış kayıt kanalını kapatmak isterseniz **${prefix}giriş-çıkış kapat** yazmanız yeterlidir.`)
    .setColor(ayarlar.embedrenk)
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['giriş-çıkış', 'gc'],
    permLevel: 0,
    kategori: "sunucu"
}

exports.help = {
    name: 'giris-cikis',
    description: 'PREFİXİ AYARLARIM',
    usage: 'oto-rol-kanal [#kanal/kanal adı]'
}