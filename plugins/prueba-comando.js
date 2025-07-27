import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  const thumb = fs.readFileSync('https://files.catbox.moe/p0ibbd.jpg') 
  const channelID = '1203630xxxxx@g.us' // tu canal (si usas rcanal)

  
  await conn.sendMessage(m.chat, {
    text: '🌟 Este es un mensaje con externalAdReply',
    contextInfo: {
      externalAdReply: {
        title: "Canal Oficial de Kirito",
        body: "Sígueme para más actualizaciones",
        mediaType: 1,
        thumbnail: thumb,
        sourceUrl: "https://whatsapp.com/channel/0029VbB46nl2ER6dZac6Nd1o",
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  })

  
  const fkontak = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'Halo',
    },
    message: {
      locationMessage: {
        name: '𝗣𝗥𝗨𝗘𝗕𝗔 𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗞𝗜𝗥𝗜𝗧𝗢',
        jpegThumbnail: thumb,
      },
    },
    participant: '0@s.whatsapp.net',
  }

  await conn.sendMessage(m.chat, {
    text: '📍 Este mensaje está citado con un contacto falso',
  }, { quoted: fkontak })

  
  await conn.relayMessage(m.chat, {
    key: { remoteJid: m.chat, fromMe: true },
    message: {
      orderMessage: {
        orderId: '12345',
        itemCount: 1,
        status: 1,
        surface: 1,
        message: '🛒 Kirito-Bot Premium disponible',
        orderTitle: 'Plan Premium',
        thumbnail: thumb,
        sellerJid: '52123456789@s.whatsapp.net'
      }
    }
  }, {})

  
  await conn.sendMessage(m.chat, {
    productMessage: {
      product: {
        productImage: {
          mimetype: 'image/jpeg',
          jpegThumbnail: thumb
        },
        title: '🔥 Kirito-Bot PRO',
        description: 'Accede a comandos exclusivos, velocidad extrema y más',
        currencyCode: 'USD',
        priceAmount1000: 1500,
        retailerId: 'kirito-pro',
        productImageCount: 1
      },
      businessOwnerJid: '52123456789@s.whatsapp.net'
    }
  })

  
  await conn.sendMessage(m.chat, {
    pollCreationMessage: {
      name: "¿Te gusta Kirito-Bot?",
      options: ["Sí", "Me encanta", "Lo amo"],
      selectableOptionsCount: 3
    }
  })

  
  await conn.sendMessage(m.chat, {
    liveLocationMessage: {
      degreesLatitude: 15.5,
      degreesLongitude: -90.25,
      accuracyInMeters: 1,
      caption: "🗺️ Kirito-Bot en vivo",
      sequenceNumber: 999,
      timeOffset: 0,
      jpegThumbnail: thumb
    }
  })

  
  await conn.sendMessage(m.chat, {
    buttonsMessage: {
      contentText: "📣 Prueba de botón",
      footerText: "Este es el pie de página",
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "📜 Ver Menú" }, type: 1 },
        { buttonId: ".donar", buttonText: { displayText: "💸 Donar" }, type: 1 }
      ],
      headerType: 1
    }
  })
}

handler.command = /^prueba$/i
handler.owner = true

export default handler