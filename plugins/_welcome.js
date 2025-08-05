export async function before(m, { conn }) {
  if (!m.isGroup || !m.messageStubType || !m.messageStubParameters) return;

  // ← Esta línea verifica si la bienvenida está activada
  if (!db.data.chats[m.chat].welcome) return;

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = m.messageStubParameters || [];
  const date = new Date();
  const fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  // Foto fija para todos
  const fixedImage = "https://cdn.russellxz.click/485faad2.jpeg"; // cámbiala por tu imagen
  const canalUrl = "https://whatsapp.com/channel/0029VbBBn9R4NViep4KwCT3Z"; // reemplaza con tu canal

  for (const user of participants) {
    let name = await conn.getName(user);
    const taguser = '@' + user.split('@')[0];

    // BIENVENIDA
    if (m.messageStubType === 27 || m.messageStubType === 31) {
      await conn.sendMessage(m.chat, {
        image: { url: fixedImage }, 
        caption: `💫 ¡Bienvenido ${taguser} al grupo *${groupMetadata.subject}*!\n\n` +
                 `> 📝 Nombre: *${name}*\n` +
                 `> 🆔 ID: ${user}\n` +
                 `> 📆 Fecha: ${fecha}\n\n` +
                 `> Pulsa el botón para iniciar el menú 📌`,
        mentions: [user],
        footer: "Rukia-Bot ✨",
        buttons: [
          { buttonId: ".menu", buttonText: { displayText: "📌 Iniciar Menú" }, type: 1 }
        ],
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: "Nuevo miembro en Rukia-Bot",
            body: `${name} se ha unido ✨`,
            thumbnailUrl: fixedImage,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: fixedImage
          }
        }
      });
    }

    // DESPEDIDA
    if (m.messageStubType === 28 || m.messageStubType === 32) {
      await conn.sendMessage(m.chat, {
        image: { url: fixedImage },
        caption: `🕊️ ${taguser} ha salido del grupo *${groupMetadata.subject}*.\n\n` +
                 `> 📝 Nombre: *${name}*\n` +
                 `> 🆔 ID: ${user}\n` +
                 `> 📆 Fecha: ${fecha}\n\n` +
                 `> ¡Buena suerte en tu camino!`,
        mentions: [user],
        footer: "Rukia-Bot ✨",
        buttons: [
          { buttonId: canalUrl, buttonText: { displayText: "📢 Sigue el canal" }, type: 1 }
        ],
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: "Despedida Rukia-Bot",
            body: `${name} se fue 🕊️`,
            thumbnailUrl: fixedImage,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: fixedImage
          }
        }
      });
    }
  }
}