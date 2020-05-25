const Discord = require('discord.js')
const client = new Discord.Client()
const Google = require('./commands/google')
client.on ('ready', function () {
    client.user.setActivity('sa bouteille de Pastis 51', {type: 'WATCHING' })
})


client.on('message', function (message) {

    if (Google.match(message)) {
        Google.action(message)
    }

    if (message.content.toLowerCase() === 'tik') {
    message.channel.send('tok')
}

    if(message.content.includes('ping')) {
    message.channel.send('Pong');
}

    if(message.content.includes('Francis')) {
    message.channel.send('Juste le meilleur des bot !');
}

    if (message.content.toLowerCase() === 't ki ?') {
        message.channel.send("Toi t'es ki ?")
    }

    if (message.content.toLowerCase() === 'mdr') {
        message.channel.send("AIMEDÉAIR")
    }

    if (message.content.toLowerCase() === 'ckc') {
        message.channel.send('ctrékc')
    }

    if (message.content.toLowerCase() === 'vovo') {
        voiceChannel.join()
  .then(connection => console.log('Connected!'))
  .catch(console.error);
    }

    if (message.content.includes('<@!176705243726217216>')) {
        message.author.send('ON NE MENTIONNE PAS R4GN0R0CK MALHEUREUX')
        var nbFrancis = (Math.random() * (50 - 1) + 1).toFixed(0);
        console.log(nbFrancis);
        message.author.send('Voici ' + nbFrancis + ' Francis pour toi')
        for (let i = 1; i < nbFrancis; i++) {
            let user = message.author.id;
            var imgFrancis = ['https://images3.memedroid.com/images/UPLOADED237/5b071f9f7e017.jpeg', 'https://pbs.twimg.com/profile_images/616547145336909825/RBkYURJ9.jpg', 'https://beaufodrome-55.webself.net/file/si677429/146646811-fi10128616x400.gif', 'https://images.uncyclomedia.co/desencyclopedie/fr/c/c1/BeaufFN.jpg', 'https://images3.memedroid.com/images/UPLOADED237/5b071f9f7e017.jpeg', 'https://nordpresse.be/wp-content/uploads/2015/01/338490598_small.jpg', 'https://cdn.discordapp.com/attachments/597857624221941778/708320559192342758/hshsg3z3.jpg', 'https://cdn.discordapp.com/attachments/667749801617653778/708336100116267068/853864643_small.png'];
            var choixFrancis = (Math.random() * imgFrancis.length);
           client.users.cache.get(user).send(`ON NE MENTIONNE PAS R4GN0R0CK MALHEUREUX. Pour ta punition voici Francis n°${i} ${imgFrancis[parseInt(choixFrancis)]}`)
        }
    }

    if (message.content.toLowerCase() === 'beauf') {

        var nbFrancis = (Math.random() * (50 - 1) + 1).toFixed(0);
        console.log(nbFrancis);
        for (let i = 1; i < nbFrancis; i++) {
            let user = message.author.id;
            var imgFrancis = ['https://images3.memedroid.com/images/UPLOADED237/5b071f9f7e017.jpeg', 'https://pbs.twimg.com/profile_images/616547145336909825/RBkYURJ9.jpg', 'https://beaufodrome-55.webself.net/file/si677429/146646811-fi10128616x400.gif', 'https://images.uncyclomedia.co/desencyclopedie/fr/c/c1/BeaufFN.jpg', 'https://images3.memedroid.com/images/UPLOADED237/5b071f9f7e017.jpeg', 'https://nordpresse.be/wp-content/uploads/2015/01/338490598_small.jpg', 'https://cdn.discordapp.com/attachments/597857624221941778/708320559192342758/hshsg3z3.jpg', 'https://cdn.discordapp.com/attachments/667749801617653778/708336100116267068/853864643_small.png'];
            var choixFrancis = (Math.random() * imgFrancis.length);
           client.users.cache.get(user).send(`Francis n°${i} ${imgFrancis[parseInt(choixFrancis)]}`)
        }

    }

    if (message.content.toLowerCase() === "j'adore rire") {
        message.channel.send('https://media.tenor.com/images/40f1a53a59ca539fe3739de7c9982c5a/tenor.gif')
    }


    })














    client.login('NzA3OTA1Mzc1MDg0NDc4NTI0.XrVKWw.OqO7Rv9a32SzYeUc47QpHE1Scm8')
