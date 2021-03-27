const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
//const { spawn } = require('child_process')
const { fromBuffer } = require('file-type')
const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
const tmp = path.join(__dirname, '../tmp')
const { spawn } = require('child_process')
const util = require('util')

let handler  = async (m, { conn, args }) => {
    let [pkg, wm] = text.split `|`

    if (!pkg) return conn.reply(m.chat, 'Tambahkan nama  paket!', m)
    if (!wm) return conn.reply(m.chat, 'Silahkan masukan nama author', m)

    if (pkg > 7) return conn.reply(m.chat, '*Nama Paket Terlalu Panjang!* _Maksimal 7 huruf!_', m)
    if (wm > 7) return conn.reply(m.chat, '*Nama Author Terlalu Panjang!* _Maksimal 7 huruf!_', m)


  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
  let q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    let im = spawn('convert', ['webp:-', 'png:-'])
    im.on('error',e =>  conn.reply(m.chat, util.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
  let stiker = false
  try {
   /*let q = Buffer.concat(bufs)
       let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {*/
    //  let img = Buffer.concat(bufs)
      //if (!img) throw 'Gagal!'


      stiker = await sticker(Buffer.concat(bufs), false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Terjadi Kesalahan!'
  }
}


handler.command = /^(stic(ker)?wm)$/i
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




/// MUHAMMAD AFDHAN
