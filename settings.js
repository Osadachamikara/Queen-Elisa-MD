/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94770458503'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94770458503'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94770458503'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'OSADA CHAMIKARA' // Your name ඔබේ නම 
global.botnma = '💃 KING OSADA💃' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = 'OSADA BRO' //ownernama,ownername
global.packname = 'OSADA BRO' // Sticker package name 
global.author = 'OSADA BRO' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...
┏━━━━━°☛•°:❎OSADA BRO ꪶ⁩᳆⃟SL CYB⃟ER™彡 ❎:°•☚°━━━━━┓*

ꦖBOT IS ONLINE ᳆⃟

======================                                                       =❌NO SPAM

=❌NO DDOS                                                                                                                              =❌NO TORRENT

=❌NO OVER DOWNLOAD                                                          =❌NO MULTILOGIN

===============

⭕group link 1 https://chat.whatsapp.com/HGnyLWxCtIo9vOIrBrAS1O

⭕group link 2 https://chat.whatsapp.com/KmWb9N0x6sR1902aqyz9PF

꧁My Whatsapp Number꧂

http://wa.me//+94752088386

http://wa.me//+94770458503

http://wa.me//+94776946420

http://wa.me//+2347046892050

➳̶̶̶᭄➤🅞🅢🅐🅓🅐 🅑🅡🅞 ᴹᵞ٭͢ᴸᴵᶠᴱ⃝⃯`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using KING OSADA bot
✾ Some bugs fixing
┏━━━━━°☛•°:❎OSADA BRO™彡 ❎:°•☚°━━━━━┓*
🙏සාදරෙන් පිලිගන්නවා🙏



ꦖBOT IS ONLINE ᳆⃟

සියලුම විදාන .menu මගින් ලබාගන්න

======================                                                       =❌NO SPAM

=❌NO DDOS                                                                                                                              =❌NO TORRENT

=❌NO OVER DOWNLOAD                                                          =❌NO MULTILOGIN

===============

⭕group link 1 https://chat.whatsapp.com/HGnyLWxCtIo9vOIrBrAS1O

⭕group link 2 https://chat.whatsapp.com/KmWb9N0x6sR1902aqyz9PF

꧁My Whatsapp Number꧂

http://wa.me//+94752088386

http://wa.me//+94770458503

http://wa.me//+94776946420

http://wa.me//+2347046892050

➳̶̶̶᭄➤🅞🅢🅐🅓🅐 🅑🅡🅞 ᴹᵞ٭͢ᴸᴵᶠᴱ⃝⃯
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐌𝐃`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
