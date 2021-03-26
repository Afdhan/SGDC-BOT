let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Apa yang mau dicari?', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${text}`).then((res) => {
    let hasil = `
*WIKIPEDIA SEARCH*

${res.data.result}

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(wiki|wikisearch)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
//  MUHAMMAD AFDHAN

module.exports = handler
