let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = function (m) => m
let own = /^(owner|creator|pemilik)$/i
 handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isOwner = own.exec(m.text)
  if (isOwner) this.sendContact(m.chat, '6282252655313', '꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂', m)
  return true
}

module.exports = handler
 
// M AFDHAN