let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan Masukan Teks!', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'http://lolhuman.herokuapp.com/api/gimage?apikey=761e676c13e7710a48011b2b&query=' + text 

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
}

handler.command = /^(gimage)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN