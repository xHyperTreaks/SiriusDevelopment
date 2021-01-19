const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const yetki = new Discord.MessageEmbed()
    .setColor(ayarlar.embedrenk)
    .setDescription(
      `Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın!`
    )
    .setFooter(ayarlar.embedfooter);
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(yetki);

  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.find(r => r.name === args.slice(0).join(" "));
  let prefix =
    (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
  
  if (args[0] === "kapat" || args[0] === "sıfırla") {
    if (db.fetch(`kayityetkili.${message.guild.id}`)) {
      message.channel.send(`Kayıtsız Rol başarıyla kaldırıldı`);
      db.delete(`kayityetkili.${message.guild.id}`);
      return;
    }
    message.channel.send(`Kayıt Yetkilisi rolü ayarlanmamış.`);
    return;
  }
  
  if (rol) {
	  db.set(`kayityetkili.${message.guild.id}`, rol.id)
	  const embed = new Discord.MessageEmbed()
	  .setColor(ayarlar.embedrenk)
	  .setFooter(ayarlar.embedfooter)
	  .setDescription("Kayıt Yetkilisi Rolü Başarıyla <@&" + rol + "> Olarak Ayarlandı!")
	  message.channel.send(embed)
  } else {
	  return message.channel.send("Lütfen bir Rol Etiketleyiniz")
  }
  
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtyetkili"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "kayıt-yetkili",
  description: "",
  usage: "oto-rol-ayarla <@rol>"
};
