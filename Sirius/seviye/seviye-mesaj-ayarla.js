const db = require('wio.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args, func) => {
  let sd = db.fetch(`premium.${message.guild.id}`)
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(!sd) return message.channel.send(`Bu komutu sadece premium sunucular `)
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!');
  if (!db.fetch(`seviyesistem_${message.guild.id}`)) return message.channel.send("Bu Komutu Kullanabilmek için ilk Seviye Sistemini Açman Gerek `" + prefix + "seviye-sistemi aç`");
  const x = args.slice(0).join(' ');
  let preffix = db.fetch(`seviyeM_${message.guild.id}`)

    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send('Ayarlanmayan Şeyi Sıfırlayamazsın.')
      return
    }
    
    db.delete(`seviyeM_${message.guild.id}`)
    message.channel.send('Seviye mesajı Başarıyla Sıfırlandı.')
    return
  }
  
  if (!args[0]) {
	  const embed = new Discord.MessageEmbed()
	  .setTitle("Sirius")
	  .setURL("https://discord.gg/fCdWYJ8uUz")
	  .setAuthor("Seviye Mesaj Ayarlama")
	  .addField("Kullanım:", ".seviye-mesaj MESAJ")
	  .addField("Değişkenler:", "-uye- | Üye\n-seviye- | Seviyesi")
	  .setColor(ayarlar.embedrenk)
	  .setFooter(ayarlar.embedfooter)
	  return message.channel.send(embed)
  }
  db.set(`seviyeM_${message.guild.id}`, x)
    message.channel.send(`Seviye mesajını başarı ile \`${x}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'seviye-mesaj',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};