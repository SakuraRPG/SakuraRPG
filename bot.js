const Discord = require('discord.js');
const client = new Discord.Client();


var prefix = '!'

client.on('ready', () => {

  console.log(`[BOT] ${client.user.tag} aktif!`);

});

client.on('message', message => {

  if (message.content === '**Chi blocked**') {
        if(message.author.id == "226651833538445312") {
          message.channel.send('https://gph.is/g/E1W851Z');
    }else {
      message.channel.send('**Kendini TyLee mi sanıyorsun?**');
    }
    }
  if (message.content === 'Wiarest!') {
        if(message.member.roles.has("551135064470192128")) {
          var randomans = message.guild.members.random();
          message.channel.send('https://media1.tenor.com/images/7974f624e7fa424f5cbe161d5a7d403b/tenor.gif');
          message.channel.send("Anka kuşu  " + randomans + "  öğrencisini iyileştirdi.");
    }else {
      message.channel.send('**Anka kuşu sana itaat etmiyor.**');
    }
    }

  if (message.content === prefix + 'yapımcı') {
          message.channel.send('ChiLieutenant/LegendaryBlocker');
    }
  if (message.author.bot) return;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'tanıt') {
    if (message.channel.name == "tanıt"){
      let yaş1 = args[1];
      let cins2 = args[2];
      let ad3 = args[0];
      message.channel.send(ad3 + ", demek " + yaş1 + " yaşında bir " + cins2+"sin." );
  } else {
    message.channel.send("Burada kendini tanıtamazsın.");
  }
  }
});

client.login('NTQ0NTgyODY3ODM0MTA5OTc3.D0W1Ew.QFnNJsa7ujLBm5vYdtWLEjud0hc');
