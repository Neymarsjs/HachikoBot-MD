const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐂 𝐃𝐄 𝐇𝐀𝐂𝐇𝐈𝐊𝐎:*

✪ *𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙲:* 
🦴 ${gp1} 

✪ *𝙷𝙰𝙲𝙷𝙸𝙺𝙾 𝚄𝙿𝙳𝙰𝚃𝙴𝚂*
🦴 ${gp2} 

✪ *𝙲𝙰𝙽𝙰𝙻 𝙾𝙵𝙲 𝙳𝙴 𝙷𝙰𝙲𝙷𝙸𝙺𝙾 𝙱𝙾𝚃* 
🦴https://whatsapp.com/channel/0029Va8Z9o55fM5Shk9wuM0p`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/HACHEJOTA/Hachiko-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝙷𝚊𝚌𝚑𝚒𝚔𝚘-𝙱𝚘𝚝 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
