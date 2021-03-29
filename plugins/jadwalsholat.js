let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama daerah', m)

 await m.reply('*[ WAIT ]* _Sedang diproses..._')
axios.get(`http://lolhuman.herokuapp.com/api/sholat/${text}?apikey=761e676c13e7710a48011b2b`).then((res) => {
    let hasil = `
*JADWAL SHOLAT*

*Wilayah:* _${res.data.result.wilayah}_
*Tanggal:* _${res.data.result.tanggal}_
*Sahur:* _${res.data.result.sahur}
*Imsak:* _${res.data.result.imsak}_
*Subuh:* _${res.data.result.subuh}_
*Terbit:* _${res.data.result.terbit}_
*Dhuha:* _${res.data.result.dhuha}_
*Dzuhur:* _${res.data.result.dzuhur}_
*Ashar:* _${res.data.result.ashar}_
*Maghrib:* _${res.data.result.maghrib}_
*Isya:* _${res.data.result.isya}_

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(jadwal(sholat)?(shalat)?(solat)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
