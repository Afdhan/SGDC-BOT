let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://api.xteam.xyz/randomimage/hentai?APIKEY=abba3220ce4a347f'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'Mending lu tobat dah :v\n\n*[ • SGDC-BOT • ]*', m)
}

handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//    MUHAMMAD AFDHAN