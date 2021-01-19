const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
    const yetki = new Discord.MessageEmbed()
    .setColor(ayarlar.embedrenk)
	.setFooter(ayarlar.embedfooter)
    .setDescription(`Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın!`)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki)
   

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ".";
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  let numara = args[1]
  
   if(args[0] === 'kapat' || args[0] === 'sıfırla') {
   if (db.fetch(`sayackanal_${message.guild.id}`)) {
     message.channel.send(`Sayaç kanalı başarıyla kaldırıldı`)
     db.delete(`sayackanal_${message.guild.id}`)
     db.delete(`sayacsayi_${message.guild.id}`)
     return
}
  message.channel.send(`Sayaç kanalı ayarlanmamış.`)
    return
   }
  
    if (!channel) {
        return message.reply("Sayaç kanalı olarak ayarlamak istediğiniz kanalı etiketleyiniz!")
    }
	
	if (!numara) {
		return message.reply("Sayaç için bir Sayı Girmelisiniz!")
	}
  
     db.set(`sayackanal_${message.guild.id}`, channel.id)
     db.set(`sayacsayi_${message.guild.id}`, numara)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Sayaç kanalı başarıyla ${channel} olarak ayarlandı!\nSayaç kanalını kapatmak isterseniz **${prefix}sayaç-kanal kapat** yazmanız yeterlidir.`)
    .setColor(ayarlar.embedrenk)
	.setFooter(ayarlar.embedfooter)
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayaç-ayarla'],
    permLevel: 0,
    kategori: "sunucu"
}

exports.help = {
    name: 'sayaç',
    description: 'PREFİXİ AYARLARIM',
    usage: 'oto-rol-kanal [#kanal/kanal adı]'
}