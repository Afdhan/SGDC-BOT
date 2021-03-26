let axios = require("axios");
let handler = async(m, { conn, text }) => {

	await m.reply('_Testing Ping..._')
	axios.get(`https://api.zeks.xyz/api`).then ((res) => {
	 	let hasil = `
*[ BOT STATUS ]*

Status: ${pickRandom(['Fine','Fine','Fine','Fine','Fine','Fine','Fine','Bad','Not Good','Not Good','Fine','Updated','Updated','Fine','Fine'])}
Ram: ${res.data.RAM}
CPU: ${res.data.CPU}
Online: ${res.data.UPTIME}
Status Charging: ${pickRandom(['false','false','false','true','true','true','false','false','true','false','null'])}
Connection: ${pickRandom(['4G','3G','4G','4G','4G','4G','3G','H+','H+','3G','4G','H','H+','H','3G','E','null'])}
Ping: ${res.data.SPEED}`

*[ • SGDC-BOT • ]*
`.trim()
    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(status|ping)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// MUHAMMAD AFDHAN
