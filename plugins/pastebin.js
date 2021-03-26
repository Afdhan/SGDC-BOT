let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teks', m)

axios.get(`https://lindow-api.herokuapp.com/api/pastebin?query=${text}`).then((res) => {
    let hasil = `
*Teks:* ${text}
*Link:* ${res.data.result}

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(pastebin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

///  MUHAMMAD AFDHAN

