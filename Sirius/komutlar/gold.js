const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
	const yetki = new Discord.MessageEmbed()
	.setAuthor(client.user.username, client.user.avatarURL())
	.setColor(ayarlar.embedrenk)
	.setFooter(ayarlar.embedfooter)
	.setDescription(`Sanırım sen Eyyüp değilsin!`)
	if(message.author.id !== "699192947312164884") return message.channel.send(yetki);
	
	let sunucu = message.guild.id
	
	if (args[0] === "yap" || args[0] === "ekle") {
		if (args[1]) {
			if (db.has(`gold.${args[1]}`)) {
				const embed = new Discord.MessageEmbed()
				.setTitle("Başarısız")
				.setDescription("<@" + args[1] + "> adlı Kişi Zaten Gold Üye.")
				.setColor(ayarlar.embedrenk)
				.setFooter(ayarlar.embedfooter)
				return message.channel.send(embed)
			} else {
				db.set(`gold.${args[1]}`, `açık`)
				const embed = new Discord.MessageEmbed()
				.setTitle("Başarılı")
				.setDescription("<@" + args[1] + "> Adlı Kişi Gold Üye Yapıldı")
				.setColor(ayarlar.embedrenk)
				.setFooter(ayarlar.embedfooter)
				return message.channel.send(embed)
			}
		}
	}
	
	if (args[0] === "sil" || args[0] === "remove") {
		if (args[1]) {
			if (db.has(`gold.${args[1]}`)) {
				db.delete(`gold.${args[1]}`)
				const embed = new Discord.MessageEmbed()
				.setTitle("Başarılı")
				.setDescription("<@" + args[1] + "> adlı Kişi artık Gold Üye değil.")
				.setColor(ayarlar.embedrenk)
				.setFooter(ayarlar.embedfooter)
				return message.channel.send(embed)
			} else {
				const embed = new Discord.MessageEmbed()
				.setTitle("Başarısız")
				.setDescription("<@" + args[1] + "> adlı kişi Zaten Gold Üye değil.")
				.setColor(ayarlar.embedrenk)
				.setFooter(ayarlar.embedfooter)
				return message.channel.send(embed)
			}
		}
	}
	
	if (!args[0]) {
		const embed = new Discord.MessageEmbed()
		.setTitle("Başarılı")
		.setDescription("Lütfen bir Argument girin\nArgumentler:\nsil\nyap")
		.setColor(ayarlar.embedrenk)
		.setFooter(ayarlar.embedfooter)
		return message.channel.send(embed)
	}
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold"],
  permLevel: 0
};

module.exports.help = {
  name: 'altın',
  description: 'Sirius Yardım',
  usage: 'yardım'
};