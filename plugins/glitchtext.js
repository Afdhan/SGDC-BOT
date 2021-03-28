let handler = async(m, { conn, text }) => {
    let [l, r] = text.split `|`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan text1', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan text2', m)

    if (l > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!* _Maksimal 10 huruf!_', m)
    if (r > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!* _Maksimal 10 huruf!_', m)

    let link = 'https://arugaz.my.id/api/textpro/glitchtext?text1=' + l + '&text2=' + r

    conn.sendFile(m.chat, link, 'glitchtext.png', 'Nihh Cuk', m)
}

handler.command = /^(glitchtext)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler