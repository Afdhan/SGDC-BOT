let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Namamu', m)

	axios.get(`https://api.terhambar.com/ninja?nama=${text}`).then ((res) => {
	 	let hasil = `
Nama Ninja *${text}*
Adalah : ${res.data.result.ninja}

*[ • SGDC-BOT • ]*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(ninja)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

handler.limit = false

module.exports = handler

///   MUHAMMAD AFDHAN
