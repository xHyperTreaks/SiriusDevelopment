const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
	
	let tag = db.fetch(`tag.${message.guild.id}`)
	
	if (args[0] === "ayarla") {
		if (args[1]) {
			if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
			
			db.set(`tag.${message.guild.id}`, args[1])
			const embed = new Discord.MessageEmbed()
			.setColor(ayarlar.embedrenk)
			.setDescription(`Tag Başarıyla \`` + args[1] + `\` Olarak Ayarlandı`)
			.setFooter(ayarlar.embedfooter);
			message.channel.send(embed)
		} else {
			message.channel.send("Bir Tag Giriniz.")
		}
	  
	}
	
	if (!args[0]) {
		if (db.has(`tag.${message.guild.id}`)) {
			const embed = new Discord.MessageEmbed()
			.setColor(ayarlar.embedrenk)
			.setDescription(`Sunucumuzun Tagı: \`` + tag + `\``)
			.setFooter(ayarlar.embedfooter);
			message.channel.send(embed)
		} else {
			
			message.channel.send("Bu sunucuda Bir Tag ayarlanmamış.")
			
		}
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onek"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "tag",
  description: "",
  usage: "erkek-rol <@rol>"
};
