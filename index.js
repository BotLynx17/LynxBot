/*
]=====> Zii Bott
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KOMTOL
// KASIH NAMA GW ASU
const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { animesaran } = require('./src/animesaran')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { listsurah } = require('./src/listsurah')
const { nekopoi } = require('./src/nekopoi')
const tambahan = require('./lib/tambahan.js')
const { kodenuklir } = require('./src/kodenuklir')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:LYNX ADMIN\n' 
            + 'ORG: Pengembang LYNX ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=:6288269711251:+62 882-6971-1251\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '#'
limitawal = 20
memberlimit = 0
cr = 'IG: Lynx Tipi'

/*
]=====> SETTINGS <=====[
*/
const TobzKey = 'BotWeA'
const VhtearKey = 'ZII BOTT' 
const TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
const ZeksApi = 'apivinz'
const shizukaapi = 'itsmeiky633'
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' // APIKEY DOWNLOAD FILE
const apivhtear = 'alpinbotwa' // YANG DI YOUTUBE
const TobzApi = 'BotWeA' // JANGAN MAU ENAK DOANG
const XteamKey = 'APIKEY' // APIKEY XTEAM BELI SENDIRI:V
/*
]=====> SC BY RISKA ADMIN <=====[
*/

/*       

/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["62895704959080@s.whatsapp.net"] 
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
/*********** END LOAD ***********/

/*
♥THANKS TO♥
LYNX BOT📍
RAMLAN CH📍
AMPIBI GAMING📍
FADHIL GRAPHY📍
XPTN📍
*/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('🍁','white'),color('♥','red'),color('🍁','white'),color('JANGAN LUPA SUBS CHANEL','white'),color('YOU','red'),color('TUBE','white'),color('LYNX TIPI
   
   
   
   ','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*WELCOME @${num.split('@')[0]}\👋*\n*Jangan Lupa Intro Tod🤗*\n━━━━━━━━━━━━━━━━━━━━\n*➸ Nama:*\n*➸ Umur:*\n*➸ gender:*\n*➸ Askot:*\n━━━━━━━━━━━━━━━━━━━━\n*Note: KETIK ,HELP UNTUK MENU BOT*`
				let buff = await getBuffer(ppimg)
				const bot = fs.readFileSync('./assets/bot');
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Bye @${num.split('@')[0]} `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
	    const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
			
			//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 3) {
            role = 'Copper IV'
        } else if (levelRole <= 5) {
            role = 'Copper III'
        } else if (levelRole <= 7) {
            role = 'Copper II'
        } else if (levelRole <= 9) {
            role = 'Copper I'
        } else if (levelRole <= 10) {
            role = 'Silver V'
        } else if (levelRole <= 11) {
            role = 'Silver IV'
        } else if (levelRole <= 12) {
            role = 'Silver III'
        } else if (levelRole <= 13) {
            role = 'Silver II'
        } else if (levelRole <= 13) {
            role = 'Silver I'
        } else if (levelRole <= 16) {
            role = 'Gold V'
        } else if (levelRole <= 17) {
            role = 'Gold IV'
        } else if (levelRole <= 19) {
            role = 'Gold III'
        } else if (levelRole <= 20) {
            role = 'Gold II'
        } else if (levelRole <= 21) {
            role = 'Gold I'
        } else if (levelRole <= 22) {
            role = 'Platinum V'
        } else if (levelRole <= 24) {
            role = 'Platinum IV'
        } else if (levelRole <= 25) {
            role = 'Platinum III'
        } else if (levelRole <= 26) {
            role = 'Platinum II'
        } else if (levelRole <= 27) {
            role = 'Platinum I'
        } else if (levelRole <= 30) {
            role = 'Exterminator'
        }

			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
           
            
	// ANTI LINK GRUP
               	        if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        client.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick, makanya tod jgn main link!`)
		        setTimeout( () => {
			        client.groupRemove(from, [kic]).catch((e)=>{reply(`*LYNX  HARUS JADI ADMIN❗*`)})
		        }, 3000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }


             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
			case 'katailham':
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`http://itsmeikygans.my.id/bacotanilham?apikey=${apikey}`, {method: 'get'})
				kata = anu.result
				client.sendMessage(from, kata, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'spamcall':
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isRegistered) return reply(ind.noregis())
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
				case 'fakta':
		if (!isGroup) return reply(ind.groupo())
               if (!isRegistered) return reply(ind.noregis())
               data = await fetchJson('http://xptnewapi.xp3.biz/Faktaaas.php?apikey=xptn3')
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: mek})
				case 'randomquran':
			data = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
			teks = `Nama: ${data.result.nama}\nArti: ${data.result.arti}\nayat: ${data.result.ayat}\nAsma: ${data.result.asma}\nRukuk: ${data.result.rukuk}\nNomor: ${data.result.nomor}\nType: ${data.result.type}\nKeterangan: ${data.result.keterangan}`
			buffs = await getBuffer(data.result.audio)
		    client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
			client.sendMessage(from, buffs, audio, {mimetype: 'audio/mp4', filename: `quran.mp3`, quoted: mek})
			break
				case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
				
				case 'jomblo':
                                         if (!isRegistered) return reply(ind.noregis())
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/pat?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case 'spamsms':
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isRegistered) return reply(ind.noregis())
			sms = `${body.slice(9)}`
			nomer = sms.split("/")[0];
			jumlah = sms.split("/")[1];
			anu = await fetchJson(`http://itsmeikygans.my.id/spamsms?apikey=${ItsApi}&no=${body.slice(10)}&jum=${jumlah}`, {method: 'get'})
			client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
				case 'randomhusbu':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/husbu?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'randomgame':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpgame?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				    case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '```dosa gk ditanggung bot```'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'randomanime3':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomanime?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'nulis3':
				case 'tulis3':
				  client.updatePresence(from, Presence.composing)
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(ind.wait())
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cshadow':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					shad = `${body.slice(9)}`
					reply(ind.wait())
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cminion':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					minio = `${body.slice(9)}`
					reply(ind.wait())
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'blackpink':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'cneon':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					nneoo = `${body.slice(7)}`
					reply(ind.wait())
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cneongreen':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					grre = `${body.slice(12)}`
					reply(ind.wait())
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cneon2':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					duadua = `${body.slice(8)}`
					reply(ind.wait())
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'c3d':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					dimen = `${body.slice(5)}`
					reply(ind.wait())
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':
                if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
					case 'clove':
					  if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					  if (isLimit(sender)) return reply(limitend(pushname2))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
				case 'cmwolf':
					  if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					  if (isLimit(sender)) return reply(limitend(pushname2))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 mwolf = `${body.slice(8)}`
					 anu = await fetchJson(`http://itsmeikygans.my.id/wolfmetal?apikey=${ItsApi}&text=${mwolf}`, {method: 'get'})
					 cmwolf = await getBuffer(anu.result)
					 client.sendMessage(from, cmwolf, image, {quoted: mek})
					 await limitAdd(sender)
					 break  
				case 'cml':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=ling&text=${cml}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cpubg':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzApi}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					client.sendMessage(from, cpubg, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'csky':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					sky = `${body.slice(6)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/skytext?text=${sky}&apikey=${ZeksApi}`, {method: 'get'})
					gools7 = await getBuffer(anu.result)
					client.sendMessage(from, gools7, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cwooden':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					wood = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/woodentext?text=${wood}&apikey=${ZeksApi}`, {method: 'get'})
					gools6 = await getBuffer(anu.result)
					client.sendMessage(from, gools6, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'ccrossfire':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					cf = `${body.slice(12)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${cf}&apikey=${ZeksApi}`, {method: 'get'})
					gools5 = await getBuffer(anu.result)
					client.sendMessage(from, gools5, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cflower':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					flower = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/flowertext?text=${flower}&apikey=${ZeksApi}`, {method: 'get'})
					gools3 = await getBuffer(anu.result)
					client.sendMessage(from, gools3, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cnaruto':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					naruto = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${naruto}&apikey=${ZeksApi}`, {method: 'get'})
					gools4 = await getBuffer(anu.result)
					client.sendMessage(from, gools4, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'randomanime2':
           			if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                                    if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result)
					client.sendMessage(from, pok, image, { quoted: mek , caption: '*NIH RANIMENYA*'})
					await limitAdd(sender) 
					break  
				case 'kucing':
                if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek , caption: '*meong😺*'})
					await limitAdd(sender) 
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Dosa Gk Ditanggung Bot'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'loli2':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '```lolinya ngab```'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			case 'runtime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot LYNX  Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
				case 'totaluser':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					teks = `╭────「 *TOTAL USER LYNX * 」\n`
					no = 0
					for (let hehehe of registered.json) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${registered.json.length}\n╰──────*⎿ *LYNX  BOT* ⏋*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": Registered}})
					break
				case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli ya ingat ada tuhan🤗'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'hilih':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'walpaper':
				client.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					 data = fs.readFileSync('./src/sakura.js');
		        	         jsonData = JSON.parse(data);
	        		         randIndex = Math.floor(Math.random() * jsonData.length);
		        	         randKey = jsonData[randIndex];
	        		        hasil = await getBuffer(randKey.result)
		        	        sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
					break
				case 'antilinkgrup':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MENGAKTIFKAN ANTI LINK DI GROUP')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'gambar':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
					const pepw = items[Math.floor(Math.random() * items.length)]
					tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=${items}`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
					await limitAdd(sender)
					break
				case 'listsurah':
					if (isBanned) return reply(ind.baned())
                                        if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, listsurah() , text, tescuk, cr)
					break
				case 'animesaran':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
	 				qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
				case 'animesaran2':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					costum( `*Dᴀғᴛᴀʀ ᴀɴɪᴍᴇ+ɢᴇɴʀᴇ*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
DRAMA+KESEDIHAN
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇs
- Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
- Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
- Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ Dᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ
- Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
- Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ (Rᴇᴄᴏᴍᴇɴᴅᴇᴅ)
- Jᴜsᴛ Bᴇᴄᴀᴜsᴇ
- Iɴᴜʏᴀsʜɪᴋɪ
- Cʟᴀɴɴᴀᴅ
- Aɴɢᴇʟ Bᴇᴀᴛs
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Rᴇ : LIFE
- Aɴᴏ Hᴀɴᴀ
- Kᴏɪ ᴛᴏ Usᴏ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ E
- Sᴀɴᴋᴀ Rᴇᴀ
- Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ 

GENRE HAREM:

- Tᴏ Lᴏᴠᴇ - ʀᴜ
- Hɪɢʜsᴄʜᴏᴏʟ DxD 
- Hᴇɴᴛᴀɪ Oᴜᴊɪ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
- Isᴇᴋᴀɪ ᴡᴀ Sᴍᴀʀᴛᴘʜᴏɴᴇ Tᴏᴍᴏ ɴɪ 
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Mᴀsᴀᴍᴜɴᴇ - Kᴜɴ Rᴇᴠᴇɴɢᴇ
- Lᴀᴅɪᴇs Vs Bᴜᴛʟᴇʀ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Mᴀsᴏᴜ Gᴀᴋᴜᴇɴ HxH 
- Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ 
- Sᴇɪʀᴇɪ Tsᴜᴋᴀɪ ɴᴏ Bʟᴀᴅᴇ Dᴀɴᴄᴇ
- Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Mᴜsᴀɪɢᴇɴ ɴᴏ Pʜᴀɴᴛᴏᴍ Wᴏʀʟᴅ
- Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
- Hᴜɴᴅʀᴇᴅ
- Dᴀᴋᴀʀᴀ Bᴏᴋᴜ ᴡᴀ H, Dᴇᴋɪɴᴀɪ? 
- Kᴏʀᴇ ᴡᴀ Zᴏᴍʙɪᴇ Dᴇsᴜ Kᴀ?
- Sʜɪᴏᴍɪɴ Sᴀᴍᴘʟᴇ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ 
- Dᴀᴛᴇ A Lɪᴠᴇ
- Kᴏɴᴏ Nᴀᴋᴀ ɴɪ Hɪᴛᴏʀɪ, Iᴍᴏᴜᴛᴏ ɢᴀ Iʀᴜ
- Oɴɪɪ - Cʜᴀɴ Dᴀᴋᴇᴅᴏ Aɪ Sᴀʀᴇʙᴀ Kᴀɴᴋᴇɪ Nᴀɪʏᴏɴᴇ
- Oʀᴇ ɴᴏ Nᴏᴜɴᴀɪ Sᴇɴᴛᴀᴋᴜsʜɪ ɢᴀ, Gᴀᴋᴜᴇɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Zᴇɴʀʏᴏᴋᴜ ᴅᴇ Jᴀᴍᴀ Sʜɪᴛᴇʀᴜ 
- Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
- Kᴀɴᴏᴋᴏɴ
- Rᴏᴋᴜᴊᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ
- Nɪsᴇᴋᴏɪ
- Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪ Nᴏᴍɪ ᴢᴏ Sʜɪʀᴜ Sᴇᴋᴀɪ
- Rᴇɴᴀɪ Bᴏᴜᴋᴜɴ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ

GENRE COMEDY

- Gɪɴᴛᴀᴍᴀ 
- Tᴀɴᴀᴋᴀ - ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
- Wᴏʀᴋɪɴɢ!!!
- Bᴀʀᴀᴋᴀᴍᴏɴ
- Bʟᴇɴᴅ S
- Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ - Cʜᴀɴ
- Nᴇᴡ Gᴀᴍᴇ
- Aɴɪᴍᴇɢᴀᴛᴀʀɪs
- Gᴇᴋᴋᴀɴ Sʜᴏᴜᴊᴏ Nᴏᴢᴀᴋɪ - ᴋᴜɴ
- Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
- Kᴏʙᴀʏᴀsʜɪ - ᴄʜᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
- Dᴀɴsʜɪ Kᴏᴜᴋᴏsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ 

GENRE ROMANCE

- Iᴍᴏᴜᴛᴏ Sᴀᴇ Iʀᴇʙᴀ Iɪ
- Eʀᴏᴍᴀɴɢᴀ Sᴇɴsᴇɪ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ ᴡᴀ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ

GENRE ACTION

- Fᴀᴛᴇ/Sᴛᴀʏ Nɪɢʜᴛ 
- UQ Hᴏʟᴅᴇʀ! Mᴀʜᴏᴜ Nᴇɢɪᴍᴀ Sᴇɴsᴇɪ 2
- Aʙsᴏʟᴜᴛᴇ Dᴜᴏ
- Rᴏᴋᴜᴅᴇɴᴀsʜɪ Mᴀᴊᴜᴛsᴜ Kᴏᴜsɪ ɴᴏ Aᴋᴀsʜɪᴄ Rᴇᴄᴏʀᴅ
- Oᴠᴇʀʟᴏʀᴅ
- Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Sᴛᴇɪɴ Gᴀᴛᴇ
- Tᴏᴀʀᴜ Kᴀɢᴀᴋᴜ ɴᴏ Rᴀɪʟɢᴜɴ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Iɴᴜʏᴀsʜɪᴋɪ
- Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
- Mᴏʙ Psʏᴄʜᴏ 100
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
- Bᴜɴɢᴏᴜ Sᴛʀᴀʏ Dᴏɢs

GENRE PHSYCOLOGICAL
- Iɴᴜʏᴀsʜɪᴋɪ
- Mᴀᴅᴏᴋᴀ Mᴀɢɪᴄᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Kᴀᴋᴇɢᴜʀᴜɪ
- K-Pʀᴏᴊᴇᴄᴛ
- Gʀɪsᴀɪᴀ ɴᴏ Rᴀᴋᴜᴇɴ & Kᴀᴊɪᴛsᴜ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Dᴇᴀᴛʜ Pᴀʀᴀᴅᴇ
- Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
- Rᴇ : Zᴇʀᴏ Kᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- BTOOOM!
- Psʏᴄʜᴏ Pᴀss
- Kɪsᴇɪᴊᴜᴜ : Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
- Tᴏᴋʏᴏ Gʜᴏᴜʟ
- NHK ɴɪ Yᴏᴜᴋᴏsᴏ 

GENRE GAME & ISEKAI

- Mᴏɴᴅᴀɪᴊɪ - ᴛᴀᴄʜɪ ɢᴀ Isᴇᴋᴀɪ Kᴀʀᴀ Kᴜʀᴜ Sᴏ Dᴇsᴜ Yᴏ?
- Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
- Aᴄᴄᴇʟ Wᴏʀʟᴅ
- Kᴏɴᴏ Sᴜʙᴀʀᴀsʜɪ Isᴇᴋᴀɪ Sᴏɴᴏ Sʜᴜᴋᴜғᴜᴋᴜ ᴡ
- 3 Gᴀᴛsᴜ ɴᴏ Lɪᴏɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Mᴀᴅᴀɴ Oᴜ Vᴀɴᴀᴅɪs

GENRE MYSTERI

- Sᴀᴋᴜʀᴀᴅᴀ Rᴇsᴇᴛ
- Hʏᴏᴜᴋᴀ
- Mᴏɴᴏɢᴀᴛᴀʀɪ ᴜʀᴜᴛᴀɴ ᴄᴇʀɪᴛᴀɴʏᴀ
1. Kɪᴢᴜᴍᴏɴᴏɢᴀᴛᴀʀɪ 
2. Nᴇᴋᴏᴍᴏɴᴏɢᴀᴛᴀʀɪ : Kᴜʀᴏ
3. Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
4. Nɪsᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
5. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs Sᴇᴄᴏɴᴅ Sᴇᴀsᴏɴ
6. Tsᴜᴋɪᴍᴏɴᴏɢᴀᴛᴀʀɪ
7. Kᴏʏᴏᴍɪᴍᴏɴᴏɢᴀᴛᴀʀɪ (Dᴜʀᴀsɪ 12 ᴍɪɴ)
8. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S1
9. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S2
10. Hᴀɴᴀᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Aɴᴏᴛʜᴇʀ

SPORT :

- Yᴀᴡᴀᴍᴜsʜɪ ᴘᴇᴅᴀʟ
- Mᴀᴊᴏʀ
- Eʏᴇsʜɪʟᴇᴅ 21
- Dɪᴀᴍᴏɴᴅ ɴᴏ ᴀᴄᴇ
- Sʟᴀᴍ ᴅᴜɴᴋ
- Hᴀᴊɪᴍᴇ ɴᴏ ɪᴘᴘᴏ
- Fʀᴇᴇ
- Pɪɴɢ ᴘᴏɴɢ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- Bᴀʙʏ sᴛᴇᴘ
- Aʀᴇᴀ ɴᴏ ᴋɪsʜɪ
- Cᴀᴘᴛᴇɪɴ ᴛsᴜʙᴀᴀᴀ
- Aɪʀ ɢᴇᴀʀ
- Cʜɪʜᴀғᴜʏᴜ
- Cʀᴏss ɢᴀᴍᴇ
- Iɴᴀᴢᴜᴍᴀ ᴇʟᴇᴠᴇɴ

 ROMANCE SAD

- Kɪᴍɪᴋɪss ᴘᴜʀᴇ ʀᴀᴏᴜɢᴇ
- Kᴀᴍɪᴋɪss
- Tᴏʀᴀᴅᴏʀᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Sᴀᴋᴜʀᴀsᴏᴜ
- Wʜɪᴛᴇ ᴀʟʙᴜᴍ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- 11ᴇʏᴇs
- Aɴɢᴇʟ ʙᴇᴀᴛs
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇ
- Aᴋᴀᴍᴇ ɢᴀ ᴋɪʟʟ
- Aᴋᴀᴛsᴜᴋɪ ɴᴏ ʏᴏɴᴀ
- Bᴇʀsᴇʀᴋ
- Sᴀᴏ
- Bᴏᴋᴜ ᴡᴀ ᴛᴏᴍᴏᴅᴀᴄʜɪ ᴡᴀ sᴜᴋᴜɴᴀɪ
- Bᴏᴋᴜʀᴀ ᴡᴀ ᴍɪɴɴᴀ ᴋᴀᴡᴀɪsᴏᴜ
- Bᴛᴏᴏᴏᴍ
- Bᴜɴɢᴀᴋᴜ sʜᴏᴜᴊᴏ
- C ᴛʜᴇ ᴍᴏɴᴇʏ ᴏғ sᴏᴜʟ ᴀɴᴅ ᴘᴏssɪʙɪʟɪᴛʏ ᴄᴏɴᴛʀᴏʟ
- Cʜᴀʀʟᴏᴛᴛᴇ
- Cʜɪʜᴀʏᴀғᴜʏᴜ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Cʟᴀɴɴᴀᴅ
- Dᴀɴᴄᴇ ɪɴ ᴛʜᴇ ᴠᴀᴍᴘɪʀᴇ ʙᴜɴᴅ
- Dᴀɴsᴀɪ ʙᴜɴʀɪ ɴᴏ ᴄʀɪᴍᴇ ᴇᴅɢᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Dᴇᴠɪʟs ʟɪɴᴇ
- Dᴀᴛᴇ ᴀ ʟɪᴠᴇ
- Dᴇ ᴄᴀᴘɪ sᴇʀɪᴇs
- Tʀᴜᴇᴇ ᴛᴇᴀʀs
- ᴅᴇᴀᴅᴍᴇᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- ʙʟᴏᴏᴅ ʟᴀᴅ
- ᴅᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜsᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- ᴋʏᴏᴜᴋᴀɪ ɴᴏ ᴋᴀɴᴀᴛᴀ
- Fᴀᴛᴇ/sᴛᴀʏ 
- Mᴀɢɪ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Gᴜɪʟᴛʏ ᴄʀᴏᴡɴ
- Gᴏsɪᴄᴋ
- Hᴇɴᴛᴀɪ ᴏᴜᴊɪ ᴛᴏ ᴡᴀʀᴀᴡᴀɴᴀɪ ɴᴇᴋᴏ
- Kɪsᴇɪᴊᴜᴜ
- Kᴏᴋᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Mɪᴋᴀᴋᴜɴɪɴ
- Mɪʀᴀɪ ɴɪᴋɪ
- Nᴀɢɪ ɴᴏ ᴀsᴜᴋᴀʀᴀ
- Oʀᴇʟᴍᴏ
- Pᴜɴᴄʜ ʟɪɴᴇ
- Rᴏᴋᴋᴀ ɴᴏ ʏᴜᴜsʜᴀ
- Sʜɪɢᴀᴛᴜ ᴡᴀ ᴋɪᴍɪ ɴᴏ ᴜsᴏ
- Kᴏᴛᴏɴᴏʜᴀ ɴᴏ ᴍɪᴡᴀ
- Kɪᴍɪ ɴᴏ ɴᴀᴡᴀ
- Kᴀɪᴄʜᴏᴜ ᴡᴀ ᴍᴀɪᴅ sᴀᴍᴀ
- Oʀᴇɢᴀɪʀᴜ
- Oᴏᴋᴀᴍɪ ɴᴏ ᴋᴏᴜsʜɪɴʀʏᴏᴜ
- Zᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ
- Asᴛᴇʀɪᴋ
- Kᴏʀᴇ ᴡᴀ ᴢᴏᴍʙɪᴇ ᴅᴇsᴜ ᴋᴀ
- Kᴏᴇ ɴᴏ ᴋᴀᴛᴀᴄʜɪ
- Kɪᴍɪ ɴᴏ ᴛᴇᴅᴏᴋᴇ
- Rᴇʟɪғᴇ
- Tsᴜᴋɪɢᴀ ᴋɪʀᴇɪ
- Tᴀᴍᴀᴋᴏ ᴍᴀʀᴋᴇᴛ
- Sᴜᴋɪᴛᴛᴇ ʟɪ ɴᴀʏᴏᴜ
- Oʀᴇ ᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Mᴏɴᴏɢᴀᴛᴀʀɪ
- Aᴋᴀɢᴀᴍɪ ɴᴏ sʜɪʀᴀʏᴜᴋɪ
- Sᴀɴᴋᴀʀᴇᴀ
- Aᴍᴀɢᴀᴍɪ ss
- Issᴜᴋᴀɴ ғʀɪᴇɴᴅ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Fᴜᴜᴋᴀ
- Aɴᴏ ʜᴀɴᴀ
- Yᴏsᴜɢᴀ ɴᴏ sᴏʀᴀ
MYSTERI:
- Dᴇᴀᴛʜ ɴᴏᴛᴇ
- Gᴏsɪᴄᴋ
- Bᴏᴋᴜ ᴅᴀᴋᴇ ɢᴀ ɪɴᴀɪ ᴍᴀᴄʜɪ
- Bᴀᴄᴄᴀɴᴏ
- Dᴜʀᴀʀᴀʀᴀ
- Sʜɪɴsᴇᴋᴀɪ ʏᴏʀɪ
- Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴇᴀᴛʜ ᴘᴀʀᴀᴅᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Zᴀᴛsᴜᴇɴ ɴᴏ ᴛᴇᴍᴘᴇsᴛ
- Eғ: A ᴛᴀʟᴇ ᴍᴇʟᴏᴅɪᴇs
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Pᴀᴘʀɪᴋᴀ
- Tɪɢᴇʀ ᴀɴᴅ ʙᴜɴɴʏ
- Tᴀsᴏɢᴀʀᴇ ᴏᴛᴏᴍᴇ x ᴀᴍɴᴇsɪᴀ
- Mɪʀᴀɪ ɴɪᴋɪ
- Tᴏᴋʏᴏᴜ ɢʜᴏᴜʟ
- Eʀɢᴏ ᴘʀᴏxʏ 
- Aɴᴏᴛʜᴇʀ
- Yᴀᴍᴀᴅᴀ ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ ᴍᴀᴊᴏ
- Gᴀᴋᴋᴏᴜ ɢᴜʀᴀsʜɪ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ᴍᴇᴍᴏᴄʜᴏᴜ
- Hᴀᴍᴀᴛᴏʀᴀ
- Bʟᴀᴄᴋ ʙᴜʟʟᴇᴛ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ɪɴᴀɪ ɴɪᴄʜɪʏᴜʙɪ
- Dᴀɴᴛᴀʟɪᴀɴ ɴᴏ sʜᴏᴋᴀ
- Kᴜᴊɪʀᴀ ɴᴏ ᴋᴏʀᴀ ᴡᴀ sᴀᴊᴏᴜ ɴɪ  ᴊᴀᴍ
- Sᴜʙᴇᴛᴇ ɢᴀ ғ ɴɪ ɴᴀʀᴜ
- Gᴀᴋᴜᴋᴏᴋᴜ ɴᴏ ʙʀʏɴʜɪʟᴅʀ
- Sᴇɪᴋɪᴍᴀᴛsᴜ ᴏᴄᴄᴜʟᴛ ɢᴀᴋᴜɪɴ
- Kᴏɴɪ ɴᴀᴋᴀ ɴɪ ʜɪᴛᴏʀɪ ɪᴍᴏᴜᴛᴏ ɢᴀ ɪʀᴜ 
- Mᴀʏᴏɪɢᴀ
- Kʏᴏᴛᴏ ᴛᴇʀᴀᴍᴀᴄʜɪ sᴀɴᴊᴏᴜ ɴᴏ ʜᴏʟᴍᴇs
- 18ɪғ
- ᴏᴜsᴀᴍᴀ ɢᴀᴍᴇ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- ᴍᴀᴅᴇ ɪɴ ᴀʙʏss

COMEDY SCHOOL :
- Pʀᴇsᴏɴ sᴄʜᴏᴏʟ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ ɴᴏᴢᴀᴋɪ ᴋᴜɴ
- Bᴇᴇʟᴢᴇʙᴜʙ
- Sʜɪᴍᴏɴᴇᴛᴀ
- Aʜᴏ ɢɪʀʟ
- Tᴀɴᴀᴋᴀ ᴋᴜɴ
- D ғʀᴀɢ
- Hᴀɴᴅᴀ ᴋᴜɴ
- Tᴏɴᴀʀᴜ ɴᴏ sᴇᴋɪ ᴋᴜɴ
- Aɴsᴀᴛsᴜ ᴋʏᴏᴜsʜɪᴛᴇ
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Tᴏʀᴀᴅᴏʀᴀ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ
- Gʀᴇᴀᴛ ᴛᴇᴀᴄʜsʀ ᴏɴɪᴢᴜᴋᴀ
- Nɪᴄʜɪᴊᴏᴜ
- Sᴋᴇᴛ ᴅᴀɴᴄᴇ
- Dᴀɴsʜɪ ᴋᴏᴜᴋᴏᴜsᴇɪ ɴᴏ ɴɪᴄʜɪᴊᴏ

Aɴɪᴍᴇ ᴅᴜʀᴀsɪ ᴘᴇɴᴅᴇᴋ:
Aʜᴏ ɢɪʀʟ
Tsᴜʀᴇᴛᴢᴜʀᴇ ᴄʜɪʟᴅᴇʀɴ
Uᴄʜᴜᴜ sᴇɴᴋᴀɴ ᴛɪʀᴀᴍɪsᴜ
Mᴀɴɢᴀᴋᴀ sᴀɴ ᴛᴏ ᴀssɪsᴛᴀɴᴛ sᴀɴ
Tᴏɴᴀʀɪ ɴᴏ sᴇᴋɪ ᴋᴜɴ
Dᴀɴɴᴀ ɢᴀ ɪᴛᴛᴇɪʀᴜ ᴋᴀ ᴡᴀᴋᴀʀᴀɴᴀɪ ᴋᴇɴ
Fᴜᴍɪᴋɪʀɪ ᴊɪᴋᴀɴ
Oɴᴇᴇ ᴄʜᴀɴ ɢᴀ ᴋɪᴛᴀ
Osᴀᴋᴇ ғᴜғᴜ ɴɪɴᴀᴛᴛᴇ
Aᴄᴛɪᴏɴ Sᴜᴘᴇʀɴᴀᴛᴜʀᴀʟ :
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Oᴠᴇʀʟᴏʀᴅ
- Hᴀᴛᴀʀᴀᴋᴜ ᴍᴀᴏ sᴀᴍᴀ
- Mᴀʜᴏᴜᴋᴀ ᴋᴏᴜᴋᴀ
- Bʟᴏᴏᴅ ʟᴀᴅ
- Sᴀᴏ
- Nᴀɴᴀᴛsᴜ ɴᴏ ᴛᴀɪᴢᴀɪ
- Aɴsʏᴀᴛsᴜ ᴋʏᴏᴜʜɪᴛsᴜ
- Cᴏᴅᴇ ɢᴇᴀss
- Nᴏ ɢᴀᴍᴇ ɴᴏ ʟɪғᴇ
- Mᴏʙ ᴘsʏᴄᴏ 100
- Mᴏɴᴅᴀɪᴊɪ-ᴛᴀᴄʜɪ ɢᴀ ɪsᴇᴋᴀɪ ᴋᴀʀᴀ ᴋᴜʀᴜ ᴢᴏᴜ ᴅᴇsᴜ ʏᴏ

Rᴏᴍᴀɴᴄᴇ Sʜᴏᴜᴊᴏ
- Sᴀᴇɪᴋᴀɴᴏ
- Sᴘᴇᴄɪᴀʟ A
- Cᴏᴄᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Kᴀᴍɪsʜᴀᴍᴀ ʜᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- Sɪᴋɪᴛᴛᴇ ʟɪ ɴᴀ ʏᴏ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Aɴᴏ ɴᴀᴛsᴜ ᴅᴇ ᴍᴀᴛᴛᴇʀᴜ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Rᴇ ᴢᴇʀᴏ ᴋᴀʀᴀ
- Dᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜᴜsʜᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- Dᴀɴᴍᴀᴄʜɪ
- Sᴜᴋᴀsᴜᴋᴀ
- Rᴀᴋᴜᴅᴀʏ ᴋɪsʜʏ ɴᴏ ᴄᴀᴠᴀʟʀʏ
- Cᴏᴅᴇ:Rᴇᴀʟɪᴢᴇ
- Cᴏᴅᴇ ʙʀᴇᴀᴋᴇʀ
- ᴢᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ

Cʜᴀʀᴀ GENIUS :
-ᴍᴀsᴀᴍᴜɴᴇ ᴋᴜɴ ɴᴏ ʀᴇᴠᴇɴɢᴇ
-ᴀᴍᴀɢɪ ʙʀɪʟʟɪᴀɴᴛ ᴘᴀʀᴋ
-ʜʏᴏᴜᴋᴀ
-ᴏʀᴇɢᴀɪʀᴜ
-ᴛᴀɴᴀᴋᴀ ᴋᴜɴ
-ᴋɪsʜᴜᴋᴜ ɢᴀᴋᴋᴏᴜ ᴊᴜʟʟɪᴇᴛ
-ʏᴏᴜᴋᴏsᴏ ᴊᴏᴛsᴜʀʏᴏᴋᴜ sʜɪᴊᴏᴜ sʜᴜɢɪ ɴᴏ ᴋʏᴏᴜsʜɪᴛsᴜ ᴇ
-ᴀᴍᴀɢᴀᴍɪ SS
HOROR:
- Gʜᴏsᴛ ᴀᴛ sᴄʜᴏᴏʟ
- Bᴏᴏɢɪᴇᴘᴏᴘ ᴘʜᴀɴᴛᴏᴍ
- Pᴇᴛ sʜᴏᴘs ᴏғ ʜᴏʀʀᴏʀ
- Cᴀᴛ sᴏᴜᴘ
- Hɪʜᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ

- Iᴛᴏᴜ ᴊᴜɴᴊɪ
- Aɴᴏᴛʜᴇʀ
- Kᴏᴡᴀʙᴏɴ
- Bʟᴏᴏᴅ ᴄ
- Bʟᴏᴏᴅ +
- Kᴀᴋᴜʀᴇɴʙᴏ
- Jɪᴋᴏɢᴜ sʜᴏᴜᴊᴏ
- Gʜᴏsᴛ ʜᴜɴᴛ
- Kᴀɢᴇᴡᴀɴɪ
- Yᴀᴍɪ sʜɪʙᴀɪɪ
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Cᴏʀᴘsᴇ ᴘᴀʀᴛʏ
- Sᴇʀɪᴀʟ ᴇxᴘᴇʀɪᴍᴇɴᴛ ʟᴀɪɴ
- Eʟғᴇɴ ʟᴇɪᴅ
- Sʜɪᴋɪ
- Gᴀɴᴛᴢ
- Gʏᴏ : Tᴏᴋʏᴏ ғɪsʜ ᴀᴛᴛᴀᴄᴋ
- Tᴏᴋʏᴏ ɢʜᴏᴜʟ
- Kɪsᴇɪᴊᴜ
- Mᴏɴᴏɴᴏᴋᴇ
- Aᴊɪɴ
- Gᴀᴋᴋᴏᴜɢᴜʀᴀsʜɪ
- Dᴇᴀᴅᴍᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- Hᴇʟʟsɪɴɢ
Cᴀʀɪ ʏɢ ʟᴜ sᴜᴋᴀ
[11/5 20:43] Eʟғ: Rᴇᴋᴏᴍᴇɴᴅᴀsɪ Aɴɪᴍᴇ

Aᴄᴛɪᴏɴ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Nᴀʀᴜᴛᴏ
3. Dʀᴀɢᴏɴ Bᴀʟʟ
4. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
5. Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
6. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
7. Bʟᴇᴀᴄʜ
8. Cᴏᴅᴇ: Bʀᴇᴀᴋᴇʀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ : Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Fᴀɪʀʏ Tᴀɪʟ
11. Gɪɴᴛᴀᴍᴀ
12. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
13. 91 Dᴀʏs
14. Aᴄᴄᴇʟ Wᴏʀʟᴅ
15. Aɪʀ Gᴇᴀʀ
16. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
17. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
18. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
19. Aᴏ ɴᴏ Exᴏʀᴄɪsᴛ
20. Aʀsʟᴀɴ Sᴇɴᴋɪ
21. Bᴀᴄᴄᴀɴᴏ!
22. Bᴇᴇʟᴢᴇʙᴜʙ
23. Bᴇʀsᴇʀᴋ
24. Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
25. Bʟᴏᴏᴅ Lᴀᴅ
26. Bʟᴏᴏᴅ+
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Bᴏʀᴜᴛᴏ
29. Bᴛᴏᴏᴏᴍ!
30. Cʟᴀʏᴍᴏʀᴇ
31. Cᴏᴅᴇ Gᴇᴀss
32. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
33. D.Gʀᴀʏ-ᴍᴀɴ
34. Dᴀɴɢᴀɴʀᴏɴᴘᴀ Sᴇʀɪᴇs
35. Dᴀʀᴋᴇʀ ᴛʜᴀɴ Bʟᴀᴄᴋ Sᴇʀɪᴇs
36. Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
37. Fᴀᴛᴇ Sᴇʀɪᴇs
38. Fʟᴀᴍᴇ ᴏғ Rᴇᴄᴄᴀ
39. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
40. Gᴀɴɢsᴛᴀ
41. Gᴀɴᴛᴢ
42. Gᴀ-Rᴇɪ: Zᴇʀᴏ
43. Gᴏᴅ Eᴀᴛᴇʀ
44. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
45. Hᴇʟʟsɪɴɢ
46. Hɪɢᴀsʜɪ ɴᴏ Eᴅᴇɴ
47. Hɪɢʜsᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
48. IɴᴜYᴀsʜᴀ
49. K (Pʀᴏᴊᴇᴄᴛ K)
50. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
51. Kᴀᴛᴇᴋʏᴏ Hɪᴛᴍᴀɴ Rᴇʙᴏʀɴ!
52. Kɪʟʟ ʟᴀ Kɪʟʟ
53. Kɪsᴇɪᴊᴜᴜ: Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
54. Kᴏᴜᴛᴇᴛsᴜᴊᴏᴜ ɴᴏ Kᴀʙᴀɴᴇʀɪ
55. Kᴜʀᴏsʜɪᴛsᴜᴊɪ (Bʟᴀᴄᴋ Bᴜᴛʟᴇʀ)
56. Mᴀɢɪ Sᴇʀɪᴇs
57. Mɪʀᴀɪ Nɪᴋᴋɪ
58. Mᴏʙ Psʏᴄʜᴏ 100
59. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
60. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
61. Nᴏʀᴀɢᴀᴍɪ
62. Nᴜʀᴀʀɪʜʏᴏɴ ɴᴏ Mᴀɢᴏ
63. Oᴠᴇʀʟᴏʀᴅ
64. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
65. Psʏᴄʜᴏ-Pᴀss
66. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
67. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
68. Sʜᴀᴋᴜɢᴀɴ ɴᴏ Sʜᴀɴᴀ
69. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ
70. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
71. Sᴏᴜʟ Eᴀᴛᴇʀ
72. Sᴛʀɪᴋᴇ ᴛʜᴇ Bʟᴏᴏᴅ
73. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
74. Tᴏᴀʀᴜ Sᴇʀɪᴇs
75. Tᴏᴋʏᴏ Gʜᴏᴜʟ
76. Usʜɪᴏ ᴛᴏ Tᴏʀᴀ
77. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ

Aᴅᴠᴇɴᴛᴜʀᴇ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴜsʜɪsʜɪ
3. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
4. Mᴀᴅᴇ Iɴ Aʙʏss
5. Cʟᴀʏᴍᴏʀᴇ
6. BTOOOM
7. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
8. Rᴏᴋᴋᴀ Nᴏ Yᴜᴜsʜᴀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Mᴀɢɪ Sᴇʀɪᴇs
11. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ 
12. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ 
13. Nᴀʀᴜᴛᴏ Sᴇʀɪᴇs
14. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ 
15. Fᴀɪʀʏ Tᴀɪʟ
16. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
17. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ 
18. Cᴏᴅᴇ Gᴇᴀss
19. Kɪɴᴏ ɴᴏ Tᴀʙɪ: Tʜᴇ Bᴇᴀᴜᴛɪғᴜʟ Wᴏʀʟᴅ
20. Sᴏᴜʟ Eᴀᴛᴇʀ
21. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
22. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
23. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
24. Dʀᴀɢᴏɴ Bᴀʟʟ
25. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ 
26. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ
27. Rᴏᴍᴇᴏ ɴᴏ Aᴏɪ Sᴏʀᴀ
28. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
29. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
30. Sᴇɴ ᴛᴏ Cʜɪʜɪʀᴏ ɴᴏ Kᴀᴍɪᴋᴀᴋᴜsʜɪ
31. Nᴜʀᴀʀɪʜʏᴏɴ Nᴏ Mᴀɢᴏ
32. Lᴏɢ Hᴏʀɪᴢᴏɴ
33. Tᴏʀɪᴋᴏ
34. Gᴀʀɢᴀɴᴛɪᴀ ᴏɴ ᴛʜᴇ Vᴇʀᴅᴜʀᴏᴜs Pʟᴀɴᴇᴛ
35. Jᴏᴊᴏ’s Bɪᴢᴀʀʀᴇ Aᴅᴠᴇɴᴛᴜʀᴇ
36. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
37. Bʟᴀᴄᴋ Lᴀɢᴏᴏɴ
38. D.Gʀᴀʏ-ᴍᴀɴ
39. Aᴛᴛᴀᴄᴋ ᴏɴ Tɪᴛᴀɴ
40. IɴᴜYᴀsʜᴀ
41. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
42. Nᴏʀᴀɢᴀᴍɪ
43. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
44. Rᴀᴅɪᴀɴᴛ

Mᴇᴄʜᴀ
1. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
2. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
3. Cʀᴏss Aɴɢᴇ: Tᴇɴsʜɪ ᴛᴏ Rʏᴜᴜ ɴᴏ Rᴏɴᴅᴏ
4. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
5. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
6. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ (Vᴀʟᴠʀᴀᴠᴇ ᴛʜᴇ Lɪʙᴇʀᴀᴛᴏʀ)
7. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
8. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
9. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
10. Cᴏᴅᴇ Gᴇᴀss
11. Dᴀᴛᴇ A Lɪᴠᴇ
12. Gᴇɴᴇsɪs ᴏғ Aϙᴜᴀʀɪᴏɴ (Sᴏᴜsᴇɪ ɴᴏ Aϙᴜᴀʀɪᴏɴ)
13. Vɪsɪᴏɴ ᴏғ Esᴄᴀғʟᴏᴡɴᴇ 
14. Mᴀᴄʀᴏss Sᴇʀɪᴇs
15. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ: Sᴛᴀɴᴅ Aʟᴏɴᴇ Cᴏᴍᴘʟᴇx
16. RᴀʜXᴇᴘʜᴏɴ
17. Yᴜᴜsʜᴀ-Oᴜ GᴀᴏGᴀɪGᴀʀ
18. FLCL
19. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
20. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
21. Sᴜɪsᴇɪ ɴᴏ Gᴀʀɢᴀɴᴛɪᴀ
22. Uɴᴅᴇғᴇᴀᴛᴇᴅ Bᴀʜᴀᴍᴜᴛ Cʜʀᴏɴɪᴄʟᴇ
23. Hᴜɴᴅʀᴇᴅ
24. Sɪᴅᴏɴɪᴀ ɴᴏ Kɪsʜɪ
25. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
26. Hᴏsʜɪ ɴᴏ Kᴏᴇ
27. Gᴜɴᴅᴀᴍ Wɪɴɢ
28. Bᴏᴋᴜʀᴀɴᴏ
29. MᴏʙɪʟᴇSᴜɪᴛGᴜɴᴅᴀᴍ:Iʀᴏɴ-Bʟᴏᴏᴅᴇᴅ Oʀᴘʜᴀɴs
30. Kɴɪɢʜᴛ’s & Mᴀɢɪᴄ
31. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
32. Sᴀᴍᴜʀᴀɪ Sᴇᴠᴇɴ
33. Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ
34. Sᴛᴀʀ Dʀɪᴠᴇʀ: Kᴀɢᴀʏᴀᴋɪ ɴᴏ Tᴀᴋᴜᴛᴏ
35. Asᴜʀᴀ Cʀʏɪɴ'
36. Hᴇʀᴏɪᴄ Aɢᴇ
37. Aϙᴜᴀʀɪᴏɴ Eᴠᴏʟ
38. Kᴜʀᴏᴍᴜᴋᴜʀᴏ
39. Nᴏʙᴜɴᴀɢᴀ ᴛʜᴇ Fᴏᴏʟ
40. Sᴄʜᴡᴀʀᴢᴇsᴍᴀʀᴋᴇɴ
41. Tᴏᴘ ᴡᴏ Nᴇʀᴀᴇ! Gᴜɴʙᴜsᴛᴇʀ
42. Sᴄʀᴀᴘᴘᴇᴅ Pʀɪɴᴄᴇss
43. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
44. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
45. Rᴀᴋᴜᴇɴ Tsᴜɪʜᴏᴜ 
46. Vᴀɴᴅʀᴇᴀᴅ
47. Bᴜʙᴜᴋɪ Bᴜʀᴀɴᴋɪ
48. Aᴘᴘʟᴇsᴇᴇᴅ (2004)
49. Dʀᴀɢᴏɴᴀᴜᴛ: Tʜᴇ Rᴇsᴏɴᴀɴᴄᴇ
50. Gᴜɴ X Sᴡᴏʀᴅ

Cᴀʀs
1. Tᴀᴋᴜᴍɪ's AE86 / Iɴɪᴛɪᴀʟ D
2. Aᴋɪᴏ's Fᴀɪʀ Lᴀᴅʏ Z / Wᴀɴɢᴀɴ Mɪᴅɴɪɢʜᴛ
3. JP's Tʀᴀɴsᴀᴍ / Rᴇᴅʟɪɴᴇ
4. Nɪᴄᴏ's Mᴇʀᴄᴇᴅᴇs A-ᴄʟᴀss / Nᴇxᴛ A-ᴄʟᴀss
5. Kᴀᴋᴇʀᴜ's Rᴀɪʟʙɪʀᴅ / Cʜᴏᴜsᴏᴋᴜ Hᴇɴᴋᴇɪ Gʏʀᴏᴢᴇᴛᴛᴇʀ
6. Sᴏɪᴄʜɪ's Lᴏᴛᴜs Sᴜᴘᴇʀ 7 / ᴇX-Dʀɪᴠᴇʀ: Tʜᴇ ᴍᴏᴠɪᴇ
7. Sʜɪʀᴏ's ᴍᴏᴅɪғɪᴇᴅ F-1 / Tᴀɪʟᴇɴᴅᴇʀs
8. Vɪᴄᴇ Pʀɪɴᴄɪᴘᴀʟ Uᴄʜɪʏᴀᴍᴀᴅᴀ's Tᴏʏᴏᴛᴀ Cʀᴇsᴛᴀ / GTO
9. Cᴀᴘᴇᴛᴀ's Fᴏʀᴍᴜʟᴀ Oɴᴇ / Cᴀᴘᴇᴛᴀ
10. Rᴏᴍᴀɴ ᴀɴᴅ Oᴛᴛᴏ's sʜᴀʀᴋ ᴄᴀʀ / Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ

Dʀᴀᴍᴀ
1. RᴇLIFE
2. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
3. AɴᴏHᴀɴᴀ
4. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
5. Mᴀᴅᴇ Iɴ Aʙʏss
6. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
7. Rᴇ: Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
8. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
9. Aɴɢᴇʟ Bᴇᴀᴛs
10. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
11. Cʜᴀʀʟᴏᴛᴛᴇ
12. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
13. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
14. Eʀᴏᴍᴀɴɢᴀ-sᴇɴsᴇɪ
15. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
16. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
17. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴜᴊɪɴ
18. Cʟᴀɴɴᴀᴅ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ

Fᴀɴᴛᴀsʏ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴀᴅᴇ ɪɴ Aʙʏss
3. Rᴇ:Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
4. DᴀɴMᴀᴄʜɪ
5. OᴠᴇʀLᴏʀᴅ
6. Sᴀʏᴏɴᴀʀᴀ ɴᴏ Asᴀ ɴɪ Yᴀᴋᴜsᴏᴋᴜhɴᴏ Hᴀɴᴀ ᴡᴏ 
7. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
8. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
9. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
10. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
11. Lᴏɢ Hᴏʀɪᴢᴏɴ
12. Bᴇʀsᴇʀᴋ
13. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
14. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
15. Mᴀɢɪ Sᴇʀɪᴇs
16. Fᴀɪʀʏ Tᴀɪʟ
17. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
18. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
19. Sᴏᴜʟ Eᴀᴛᴇʀ
20. Fᴀᴛᴇ/sᴛᴀʏ ɴɪɢʜᴛ: Uɴʟɪᴍɪᴛᴇᴅ Bʟᴀᴅᴇ Wᴏʀᴋs
21. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ
22. Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
23. Kᴏʙᴀᴛᴏ.
24. Dʀɪғᴛᴇʀs
25. Hᴀɪʙᴀɴᴇ Rᴇɴᴍᴇɪ
26. Mᴀʜᴏᴜᴊɪɴ Gᴜʀᴜɢᴜʀᴜ
27. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ Nɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
28. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
29. Kᴏɴᴏsᴜʙᴀ
30. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
31. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
32. Mᴜsʜɪsʜɪ
33. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
34. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
35. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
36. Hᴏᴜsᴇᴋɪ ɴᴏ Kᴜɴɪ
37. Pʀɪɴᴄᴇss Mᴏɴᴏɴᴏᴋᴇ
38. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
39. Yᴀᴏɢᴜᴀɪ Mɪɴɢᴅᴀɴ
40. Jᴜᴜɴɪ Kᴏᴋᴜᴋɪ
41. Cᴀʀᴅᴄᴀᴘᴛᴏʀ Sᴀᴋᴜʀᴀ: Cʟᴇᴀʀ Cᴀʀᴅ-ʜᴇɴ
42. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
43. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
44. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
45. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
46. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ

Sᴄʜᴏᴏʟ Lɪғᴇ
1. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
2. Hʏᴏᴜᴋᴀ
3. Cʜᴀʀʟᴏᴛᴛᴇ
4. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
5. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
6. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
7. Tᴏʀᴀᴅᴏʀᴀ!
8. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
9. Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
10. RᴇLIFE
11. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
12. AɴᴏHᴀɴᴀ
13. Issʜᴜᴋᴀɴ Fʀɪᴇɴᴅs
14. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
15. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
16. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
17. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
18. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
19. Tᴏᴋʏᴏ Rᴀᴠᴇɴs
20. Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ-ᴄʜᴀɴ
21. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
22. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
23. Aɴɢᴇʟ Bᴇᴀᴛs
24. Bʟᴇᴀᴄʜ
25. Bʟᴏᴏᴅ-C
26. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Sʜᴏᴋᴜɢᴇᴋɪ ɴᴏ Sᴏᴜᴍᴀ
29. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
30. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
31. Oʀᴀɴɢᴇ
32. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
33. Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ?
34. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
35. Kᴜʀᴏᴋᴏ ɴᴏ Bᴀsᴜᴋᴇ
36. Nɪsᴇᴋᴏɪ
37. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
38. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
39. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
40. Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
41. Aʜᴏ Gɪʀʟ
42. Iᴛsᴜᴅᴀᴛᴛᴇ Bᴏᴋᴜʀᴀ ɴᴏ Kᴏɪ ᴡᴀ 10-Cᴇɴᴛɪᴍᴇᴛᴇʀs Dᴀᴛᴛᴀ
43. Jᴜsᴛ Bᴇᴄᴀᴜsᴇ!
44. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
45. Kᴏᴋᴏʀᴏ ɢᴀ Sᴀᴋᴇʙɪᴛᴀɢᴀᴛᴛᴇʀᴜɴᴅᴀ

Sʟɪᴄᴇ ᴏғ Lɪғᴇ
1. Gᴇɴsʜɪᴋᴇɴ
2. Sʜɪɴʀʏᴀᴋᴜ! Iᴋᴀ Mᴜsᴜᴍᴇ
3. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
4. Kᴏᴛᴏɴᴏʜᴀ ɴᴏ Nɪᴡᴀ
5. Mᴜsʜɪsʜɪ
6. Pᴀᴘᴀ ɴᴏ Iᴜᴋᴏᴛᴏ ᴡᴏ Kɪᴋɪɴᴀsᴀɪ!
7. Aɪʀ
8. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ ɴᴏ Nᴀᴍᴀᴇ ᴡᴏ Bᴏᴋᴜᴛᴀᴄʜɪ ᴡᴀ Mᴀᴅᴀ Sʜɪʀᴀɴᴀɪ.
9. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
10. Bᴀʀᴀᴋᴀᴍᴏɴ ᴅᴀɴ Hᴀɴᴅᴀ-ᴋᴜɴ
11. Dᴀɢᴀsʜɪ Kᴀsʜɪ
12. Aᴍᴀᴀᴍᴀ ᴛᴏ Iɴᴀᴢᴜᴍᴀ
13. Cʟᴀɴɴᴀᴅ
14. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
15. Hɪᴍᴏᴜᴛᴏ! Uᴍᴀʀᴜ-ᴄʜᴀɴ
16. Sᴀᴋᴜʀᴀ Qᴜᴇsᴛ
17. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
18. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
19. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
20. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
21. Tᴀᴍᴀᴋᴏ Lᴏᴠᴇ Sᴛᴏʀʏ
22. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
23. Usᴀɢɪ Dʀᴏᴘ
24. Nᴇᴡ Gᴀᴍᴇ!
25. Wᴏʀᴋɪɴɢ!! (Wᴀɢɴᴀʀɪᴀ!!) Sᴇʀɪᴇs
26. Gᴏᴄʜᴜᴜᴍᴏɴ ᴡᴀ Usᴀɢɪ ᴅᴇsᴜ ᴋᴀ??
27. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
28. Uᴄʜᴜᴜ Kʏᴏᴜᴅᴀɪ
28. Nɪᴄʜɪᴊᴏᴜ
30. Nᴀɴᴀ
31. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
32. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
33. Dᴀɴsʜɪ Kᴏᴜᴋᴏᴜsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ
34. K-Oɴ!
35. Yᴜʀᴜ Cᴀᴍᴘ
36. Gɪɴ ɴᴏ Sᴀᴊɪ
37. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
38. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
39. RᴇLIFE
40. Kᴜʀᴀɢᴇʜɪᴍᴇ
41. Sʜᴏᴜᴊᴏ Sʜᴜᴜᴍᴀᴛsᴜ Rʏᴏᴋᴏᴜ
42. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
43. Hʏᴏᴜᴋᴀ
44. Iᴇ Nᴀᴋɪ Kᴏ Rᴇᴍʏ
45. Tᴀɴᴀᴋᴀ-ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
46. Sʜɪʀᴏʙᴀᴋᴏ
47. Gʀᴇᴀᴛ Tᴇᴀᴄʜᴇʀ Oɴɪᴢᴜᴋᴀ
48. Sᴀɪᴋɪ Kᴜsᴜᴏ ɴᴏ Ψ Nᴀɴ
49. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
50. 3-ɢᴀᴛsᴜ ɴᴏ Lɪᴏɴ
51. Gᴀᴋᴜᴇɴ Bᴀʙʏsɪᴛᴛᴇʀs
52. Mɪᴛsᴜʙᴏsʜɪ Cᴏʟᴏʀs
53. Hɪɴᴀᴍᴀᴛsᴜʀɪ
54. Tᴀᴅᴀ-ᴋᴜɴ ᴡᴀ Kᴏɪ ᴡᴏ Sʜɪɴᴀɪ
55. Cᴏᴍɪᴄ Gɪʀʟs
56. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
57. Hᴀɴᴀsᴀᴋᴜ Iʀᴏʜᴀ
58. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ

Sᴀᴍᴜʀᴀɪ
1. Sᴀᴍᴜʀᴀɪ 7
2. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
3. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
4. Aғʀᴏ Sᴀᴍᴜʀᴀɪ
5. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ: Sᴀᴍᴜʀᴀɪ Kɪɴɢs
6. Gɪɴᴛᴀᴍᴀ
7. Hᴀᴋᴜᴏᴜᴋɪ
8. Sᴡᴏʀᴅ ᴏғ ᴛʜᴇ Sᴛʀᴀɴɢᴇʀ
9. Bʟᴀᴅᴇ ᴏғ ᴛʜᴇ Iᴍᴍᴏʀᴛᴀʟ
10. Rᴏɴɪɴ Wᴀʀʀɪᴏʀs
11.Sᴀᴍᴜʀᴀɪ X

Mɪʟɪᴛᴀʀʏ
1. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
2. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
3. Cᴏᴅᴇ Gᴇᴀss: Hᴀɴɢʏᴀᴋᴜ ɴᴏ Lᴇʟᴏᴜᴄʜ
4. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
5. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ ɴɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
6. Aʟᴅɴᴏᴀʜ .Zᴇʀᴏ
7. Gᴏᴅ Eᴀᴛᴇʀ
8. Yᴏᴜᴊᴏ Sᴇɴᴋɪ 
9. SAO Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Gᴜɴ Gᴀʟᴇ Oɴʟɪɴᴇ
10. Nᴇᴊɪᴍᴀᴋɪ Sᴇɪʀᴇɪ Sᴇɴᴋɪ: Tᴇɴᴋʏᴏᴜ ɴᴏ Aʟᴅᴇʀᴀᴍɪɴ
11. Gɪʀʟs ᴜɴᴅ Pᴀɴᴢᴇʀ
12. Kᴀɴᴛᴀɪ Cᴏʟʟᴇᴄᴛɪᴏɴ
13. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
14. 07-Gʜᴏsᴛ
15. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
16. Kɪɴɢᴅᴏᴍ
17. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ
18. Sᴛʀɪᴋᴇ Wɪᴛᴄʜᴇs
19. Mᴀᴄʀᴏss Fʀᴏɴᴛɪᴇʀ
20. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
21. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
22. Sᴇɴᴊᴏᴜ ɴᴏ Vᴀʟᴋʏʀɪᴀ
23. Oᴛᴏᴍᴇ Yᴏᴜᴋᴀɪ Zᴀᴋᴜʀᴏ
24. Aɴɢᴏʟᴍᴏɪs: Gᴇɴᴋᴏᴜ Kᴀssᴇɴᴋɪ
25. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
26. Hɪɢʜ Sᴄʜᴏᴏʟ Fʟᴇᴇᴛ
27. Tᴏsʜᴏᴋᴀɴ Sᴇɴsᴏᴜ
28. Sᴀʙᴀɢᴇʙᴜ!
29. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜɪᴋᴇɴ Sʜᴏᴜᴛᴀɪ
30. Jᴏᴋᴇʀ Gᴀᴍᴇ

Hɪsᴛᴏʀɪᴄᴀʟ
1. Gɪɴᴛᴀᴍᴀ
2. Mᴜsʜɪsʜɪ
3. Dᴏʀᴏʀᴏ
4. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
5. Bᴀᴄᴄᴀɴᴏ!
6. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
7. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ: Mᴇɪᴊɪ Kᴇɴᴋᴀᴋᴜ Rᴏᴍᴀɴᴛᴀɴ
8. Gᴏsɪᴄᴋ
9. Kɪɴɢᴅᴏᴍ
10. Kᴜʀᴏsʜɪᴛsᴜᴊɪ
11. Aᴏɪ Bᴜɴɢᴀᴋᴜ Sᴇʀɪᴇs
12. Hᴇᴛᴀʟɪᴀ Axɪs Pᴏᴡᴇʀs
13. Hᴀᴋᴜᴏᴜᴋɪ
14. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
15. Jᴏᴋᴇʀ Gᴀᴍᴇ
16. Kᴀɢᴜʏᴀ Hɪᴍᴇ ɴᴏ Mᴏɴᴏɢᴀᴛᴀʀɪ
17. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ 

Pᴏʟɪᴄᴇ
1. Tᴀɪʜᴏ Sʜɪᴄʜᴀᴜ ᴢᴏ
2. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
3. Kᴏᴄʜɪʀᴀ Kᴀᴛsᴜsʜɪᴋᴀᴋᴜ Kᴀᴍᴇᴀʀɪ Kᴏᴜᴇɴᴍᴀᴇ 
4. Hᴀsʜᴜᴛsᴜᴊᴏ
5. Psʏᴄʜᴏ-Pᴀss
6. Mᴏʙɪʟᴇ Pᴏʟɪᴄᴇ Pᴀᴛʟᴀʙᴏʀ
7. Mɪʀᴀɪ Kᴇɪsᴀᴛsᴜ Uʀᴀsʜɪᴍᴀɴ
8. Wɪʟᴅ 7
9. Yᴜᴜsʜᴀ Kᴇɪsᴀᴛsᴜ J-Dᴇᴄᴋᴇʀ
10. Hɪᴍɪᴛsᴜ: Tʜᴇ Rᴇᴠᴇʟᴀᴛɪᴏɴ
11. Sᴀᴍᴜʀᴀɪ Fʟᴀᴍᴇɴᴄᴏ
12. B: Tʜᴇ Bᴇɢɪɴɴɪɴɢ
13. Jɪɴ-Rᴏʜ: Tʜᴇ Wᴏʟғ Bʀɪɢᴀᴅᴇ
14. Oɴɪʜᴇɪ
15. Kɪᴅᴏᴜ Kᴇɪsᴀᴛsᴜ Pᴀᴛʟᴀʙᴏʀ: Oɴ ᴛᴇʟᴇᴠɪsɪᴏɴ
16. Mᴏᴜsᴏᴜ Dᴀɪʀɪɴɪɴ
17. Pᴇᴀᴄᴇ Mᴀᴋᴇʀ Kᴜʀᴏɢᴀɴᴇ
18. Hʏᴘᴇʀ Pᴏʟɪᴄᴇ

Sᴄɪ-ғɪ
1. Sᴛᴇɪɴs;Gᴀᴛᴇ
2. Iɴᴜʏᴀsʜɪᴋɪ
3. Mᴀᴅᴇ ɪɴ Aʙʏss
4. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
5. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
6. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
7. Mᴀʜᴏᴜᴋᴀ Kᴏᴜᴋᴏᴜ ɴᴏ Rᴇᴛᴛᴏᴜsᴇɪ
8. Dɪᴍᴇɴsɪᴏɴ W
9. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
10. Dᴇɴɴᴏᴜ Cᴏɪʟ
11. Sᴘᴀᴄᴇ☆Dᴀɴᴅʏ
12. Kɪᴢɴᴀɪᴠᴇʀ
13. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
14. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
15. Pᴀᴘʀɪᴋᴀ
16. Mᴇɢᴀʟᴏ Bᴏx
17. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
18. Gᴀᴛᴄʜᴀᴍᴀɴ Cʀᴏᴡᴅs
19. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
20. Gɪɴᴛᴀᴍᴀ
21. Sᴀᴋᴀsᴀᴍᴀ ɴᴏ Pᴀᴛᴇᴍᴀ
22. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
23. Psʏᴄʜᴏ-Pᴀss
24. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
25. Mᴇᴋᴀᴋᴜᴄɪᴛʏ Aᴄᴛᴏʀs
26. Pʟᴀɴᴇᴛᴇs
27. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
28. Pᴇʀsᴏɴᴀ Sᴇʀɪᴇs
29. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ

Sᴘᴏʀᴛ
1. Cᴀᴘᴛᴀɪɴ Tsᴜʙᴀsᴀ
2. Gɪᴀɴᴛ Kɪʟʟɪɴɢ
3. Tʜᴇ Kɴɪɢʜᴛ ɪɴ Tʜᴇ Aʀᴇᴀ (Aʀᴇᴀ ɴᴏ Kɪsʜɪ )
4. Aᴏᴋɪ Dᴇɴsᴇᴛsᴜ Sʜᴏᴏᴛ! (Bʟᴜᴇ Lᴇɢᴇɴᴅ Sʜᴏᴏᴛ!)
5. Dᴀʏs
6. Wʜɪsᴛʟᴇ!
7. Oғғsɪᴅᴇ
8. Dʀᴀɢᴏɴ Lᴇᴀɢᴜᴇ
9. Fᴀɴᴛᴀsɪsᴛᴀ Sᴛᴇʟʟᴀ
10. Iɴᴀᴢᴜᴍᴀ Eʟᴇᴠᴇɴ
11. Gɪɴɢᴀ ᴇ Kɪᴄᴋᴏғғ!!
12. Hᴜɴɢʀʏ Hᴇᴀʀᴛ Wɪʟᴅ Sᴛʀɪᴋᴇʀ
13. Gᴀɴʙᴀʀᴇ Kɪᴄᴋᴇʀs
14. Kᴜʀᴏᴋᴏ Nᴏ Bᴀsᴋᴇᴛ
15. Sʟᴀᴍ Dᴜɴᴋ
16. Dᴇᴀʀ Bᴏʏs
17. I’ʟʟ/CKBC
18. Bᴜᴢᴢᴇʀ Bᴇᴀᴛᴇʀ
19. Bᴀsϙᴜᴀsʜ!
20. Rᴏ-Kʏᴜ-Bᴜ!
21. Dᴀsʜ Kᴀᴘᴘᴇɪ
22. Dɪᴀᴍᴏɴᴅ ɴᴏ Aᴄᴇ (Aᴄᴇ ᴏғ Dɪᴀᴍᴏɴᴅ)
23. Pʀɪɴᴄᴇss Nɪɴᴇ: Kɪsᴀʀᴀɢɪ Jᴏsʜɪᴋᴏᴜ Yᴀᴋʏᴜᴜʙᴜ
24. Mᴀᴊᴏʀ
25. Tᴏᴜᴄʜ
26. H2
27. Cʀᴏss Gᴀᴍᴇ
28. Tᴀɪsʜᴏᴜ Yᴀᴋʏᴜᴜ Mᴜsᴜᴍᴇ
29. Mᴏsʜɪᴅᴏʀᴀ (Wʜᴀᴛ Iғ ᴀ Fᴇᴍᴀʟᴇ Mᴀɴᴀɢᴇʀ ᴏғ ᴀ Hɪɢʜ Sᴄʜᴏᴏʟ Bᴀsᴇʙᴀʟʟ Tᴇᴀᴍ Rᴇᴀᴅ Dʀᴜᴄᴋᴇʀ’s)
30. Oɴᴇ Oᴜᴛs
31. Oᴏᴋɪᴋᴜ Fᴜʀɪᴋᴀʙᴜᴛᴛᴇ (Bɪɢ Wɪɴᴅᴜᴘ!)
32. Hᴀɪᴋʏᴜᴜ
33. Aᴛᴛᴀᴄᴋ ᴏɴ Tᴏᴍᴏʀʀᴏᴡ
34. Aᴛᴛᴀᴄᴋ Nᴏ.1
35. Aᴛᴛᴀᴄᴋᴇʀ Yᴏᴜ
36. Yᴏᴡᴀᴍᴜsʜɪ Pᴇᴅᴀʟ
37. Iᴅᴀᴛᴇɴ Jᴜᴍᴘ
38. Oᴠᴇʀ Dʀɪᴠᴇ
39. Nᴀsᴜ: Sᴜᴍᴍᴇʀ ɪɴ Aɴᴅᴀʟᴜsɪᴀ
40. Nᴀsᴜ : A Mɪɢʀᴀᴛᴏʀʏ Bɪʀᴅ ᴡɪᴛʜ Sᴜɪᴛᴄᴀsᴇ
41. Hᴀᴊɪᴍᴇ ɴᴏ Iᴘᴘᴏ
42. Asʜɪᴛᴀ ɴᴏ Jᴏᴇ
43. Gᴀɴʙᴀʀᴇ Gᴇɴᴋɪ
44. Nᴏᴢᴏᴍɪ Wɪᴛᴄʜᴇs
45. Oɴᴇ Pᴏᴜɴᴅ Gᴏsᴘᴇʟ
46. Aɪᴍ ғᴏʀ ᴛʜᴇ Aᴄᴇ!
47. Tʜᴇ Pʀɪɴᴄᴇ ᴏғ Tᴇɴɴɪs
48. Bᴀʙʏ Sᴛᴇᴘs
49. Eʏᴇsʜɪᴇʟᴅ 21
50. Sᴍᴀsʜ
51. Sʜᴀᴋᴜɴᴇᴛsᴜ ɴᴏ ᴛᴀᴋᴋʏᴜᴜ ᴍᴜsᴜᴍᴇ
52. Aɪʀ ɢᴇᴀʀ
53. Pʀɪɴᴄᴇ Oғ Sᴛʀɪᴅᴇ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ
54. Fʀᴇᴇ!
55. Kᴇɴᴋᴏᴜ Zᴇɴʀᴀᴋᴇɪ Sᴜɪᴇɪʙᴜ Uᴍɪsʜᴏᴜ

Mᴀʀᴛɪᴀʟ Aʀᴛ
1. Bᴏʀᴜᴛᴏ: Nᴀʀᴜᴛᴏ Nᴇxᴛ Gᴇɴᴇʀᴀᴛɪᴏɴs
2. Sʜɪᴋᴀʙᴀɴᴇ Hɪᴍᴇ: Aᴋᴀ
3. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
4. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ (KᴇɴIᴄʜɪ: Tʜᴇ Mɪɢʜᴛɪᴇsᴛ Dɪsᴄɪᴘʟᴇ)
5. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
6. Tᴀʙᴏᴏ Tᴀᴛᴛᴏᴏ
7. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
8. Bᴇɴ-ᴛᴏ
9. Mᴇᴅᴀᴋᴀ Bᴏx
10. Mᴜsʜɪʙᴜɢʏᴏᴜ
11. Mᴀᴋᴇɴ-ᴋɪ!
12. Bʟᴀᴅᴇ & Sᴏᴜʟ
13. Fʀᴇᴇᴢɪɴɢ
14. Iᴋᴋɪᴛᴏᴜsᴇɴ (Iᴋᴋɪ Tᴏᴜsᴇɴ)
15. Asᴜ ɴᴏ Yᴏɪᴄʜɪ!
16. Kᴜʀᴏᴋᴀᴍɪ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
17. Tᴏᴋʏᴏ Mᴀᴊɪɴ Gᴀᴋᴜᴇɴ Kᴇɴᴘᴜᴄʜᴏ: Tᴏᴜ
18. Tᴇɴᴊᴏᴜ Tᴇɴɢᴇ
19. Bᴀᴋɪ (2018)
20. Kᴏɪʜɪᴍᴇ †Mᴜsᴏᴜ
21. Dʀᴀɢᴏɴ Bᴀʟʟ

Mᴜsɪᴋ
1. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
2. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
3. Zᴏᴍʙɪᴇʟᴀɴᴅ Sᴀɢᴀ
4. K-Oɴ!
5. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
6. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
7. Bᴇᴄᴋ
8. BᴀɴG Dʀᴇᴀᴍ!
9. Tʜᴇ ɪDOLM@STER
10. Lᴏᴠᴇ Lɪᴠᴇ! Sᴄʜᴏᴏʟ Iᴅᴏʟ Pʀᴏᴊᴇᴄᴛ
11. Dᴇᴛʀᴏɪᴛ Mᴇᴛᴀʟ Cɪᴛʏ
12. Nᴀɴᴀ
13. IDOLɪSH7
14. Sᴀᴋᴀᴍɪᴄʜɪ ɴᴏ Aᴘᴏʟʟᴏɴ
15. Kɪɴɪʀᴏ ɴᴏ Cᴏʀᴅᴀ
16. Mᴀɢɪᴄ-Kʏᴜɴ! Rᴇɴᴀɪssᴀɴᴄᴇ
17. Pɪᴀɴᴏ ɴᴏ Mᴏʀɪ
18. Fᴜʟʟ Mᴏᴏɴ ᴡᴏ Sᴀɢᴀsʜɪᴛᴇ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ
20. Wᴀᴋᴇ Uᴘ, Gɪʀʟs!
21. Tᴀʀɪ Tᴀʀɪ
22. Gʀᴀᴠɪᴛᴀᴛɪᴏɴ
23. Mᴀᴄʀᴏss Sᴇʀɪᴇs
24. ᴇғ: A Tᴀʟᴇ ᴏғ Mᴇᴍᴏʀɪᴇs.
25. Kᴀᴄʜᴏᴜ Oᴜᴊɪ
26. Lɪᴢ ᴛᴏ Aᴏɪ Tᴏʀɪ
27. Yᴏᴀᴋᴇ Tsᴜɢᴇʀᴜ Lᴜ ɴᴏ Uᴛᴀ
28. Aɪᴋᴀᴛsᴜ!
29. Sᴛᴀʀᴍʏᴜ
30. Fᴜᴜᴋᴀ
31. Sʜᴇʟᴛᴇʀ
32. AKB0048
33. Sʜᴏᴡ Bʏ Rᴏᴄᴋ!!
34. Sʏᴍᴘʜᴏɢᴇᴀʀ 

Hᴀʀᴇᴍ
1. Dᴀᴛᴇ ᴀ Lɪᴠᴇ
2.Mᴀʏᴏ Cʜɪᴋɪ!
3. Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ Nᴏ Iʀᴜ Nɪᴄʜɪᴊᴏᴜ
4. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜᴏᴜᴛᴀɪ
5. Tʜᴇ Wᴏʀʟᴅ Gᴏᴅ Oɴʟʏ Kɴᴏᴡs
6. Dᴇɴᴘᴀ Kʏᴏᴜsʜɪ
7. Kᴏʀᴇ Wᴀ Zᴏᴍʙɪᴇ Dᴇsᴜᴋᴀ
8. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs
9. OʀᴇIᴍᴏ
10. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
11. Mᴀʜᴏᴜ Sᴇɴsᴇɪ Nᴇɢɪᴍᴀ!
12. Isᴇᴋᴀɪ ɴᴏ Sᴇɪᴋɪsʜɪ Mᴏɴᴏɢᴀᴛᴀʀɪ
13. Mᴀɴɢᴀᴋᴀ-sᴀɴ ᴛᴏ Assɪsᴛᴀɴᴛ-sᴀɴ ᴛᴏ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
14. Iᴄʜɪɢᴏ 100%
15. Hᴀɪʏᴏʀᴇ! Nʏᴀʀᴜᴋᴏ-sᴀɴ
16. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
17. Cᴀᴍᴘɪᴏɴᴇ!
18. Gʀɪsᴀɪᴀ Sᴇʀɪᴇs
19. Fʀᴇᴇᴢɪɴɢ
20. MM!
21. NᴏᴜCᴏᴍᴇ
22. Aʜ, Mʏ Gᴏᴅᴅᴇss
23. Lᴏᴠᴇ Hɪɴᴀ
24. Hɪɢʜ Sᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
25. Kɪss x sɪs
26. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ.
27. Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
28. Sᴇᴋɪʀᴇɪ
29. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
30. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
31. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
32. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
33. Sʜᴜғғʟᴇ!
34. Nʏᴀɴ Kᴏɪ!
35. Oᴜᴛʙʀᴇᴀᴋ Cᴏᴍᴘᴀɴʏ
36. Mᴀᴅᴀɴ ɴᴏ Oᴜ ᴛᴏ Vᴀɴᴀᴅɪs
37. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
38. Pʀɪɴᴄᴇss Lᴏᴠᴇʀ!
29. Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
40. Rᴏᴋᴜᴊᴏᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ!?
41. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
42. Nɪsᴇᴋᴏɪ
43. Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
44. Rᴏsᴀʀɪᴏ ᴛᴏ Vᴀᴍᴘɪʀᴇ
45. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
46. Tᴏ LOVE-Rᴜ Sᴇʀɪᴇs
47. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ
48. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
49. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7-ɴɪɴ ɴᴏ Mᴀᴊᴏ
50. Iᴄʜɪʙᴀɴ Usʜɪʀᴏ ɴᴏ Dᴀɪᴍᴀᴏᴜ

Rᴇᴠᴇʀsᴇ Hᴀʀᴇᴍ
1. Hᴀɴᴀsᴀᴋᴇʀᴜ Sᴇɪsʜᴏᴜɴᴇɴ
2. Uᴛᴀ ɴᴏ☆Pʀɪɴᴄᴇ-sᴀᴍᴀ♪
3. Hᴀᴋᴜᴏᴜᴋɪ
4. Yᴀᴍᴀᴛᴏ Nᴀᴅᴇsʜɪᴋᴏ Sʜɪᴄʜɪ Hᴇɴɢᴇ
5. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
6. Fᴜsʜɪɢɪ Yᴜᴜɢɪ (Mʏsᴛᴇʀɪᴏᴜs Pʟᴀʏ)
7. Dɪᴀʙᴏʟɪᴋ Lᴏᴠᴇʀs
8. Aʀᴄᴀɴᴀ Fᴀᴍɪɢʟɪᴀ
9. Bʀᴏᴛʜᴇʀs Cᴏɴғʟɪᴄᴛ
10. Dᴀɴᴄᴇ ᴡɪᴛʜ Dᴇᴠɪʟs
11. Oᴜʀᴀɴ Hɪɢʜ Sᴄʜᴏᴏʟ Hᴏsᴛ Cʟᴜʙ
12. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
13. Aᴍɴᴇsɪᴀ
14. Bᴏɴᴊᴏᴜʀ Sᴡᴇᴇᴛ Lᴏᴠᴇ Pᴀᴛɪssᴇʀɪᴇ
15. Kᴀᴍɪɢᴀᴍɪ ɴᴏ Asᴏʙɪ
16. Hɪɪʀᴏ ɴᴏ Kᴀᴋᴇʀᴀ

Rᴏᴍᴀɴᴄᴇ
1 Cʟᴀʏ & Mᴀʀɪᴀ
2. Wʜɪᴛᴇ Aʟʙᴜᴍ 
3. Cʟᴀɴɴᴀᴅ Aғᴛᴇʀ Sᴛᴏʀʏ
4. Aɴɢᴇʟ Bᴇᴀᴛs
5. Isʜᴜᴜᴋᴀɴ Fʀɪᴇɴᴅs.
6. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
7. Nɪsᴇᴋᴏɪ
8. Gᴏʟᴅᴇɴ Tɪᴍᴇ
9. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
10. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
11. Oʀᴇ Mᴏɴᴏɢᴀᴛᴀʀɪ
12. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Nᴏ Sᴏᴅᴀᴛᴇᴋᴀ
13. Gᴇᴋᴋᴀɴ Sʜᴏᴊᴏᴜ Nᴏᴢᴀᴋɪ-Kᴜɴ
14. Sᴀɴᴋᴀʀᴇᴀ
15. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
16. Aᴍᴀɢᴀᴍɪ SS
17. Kᴏᴛᴏᴜʀᴀ-sᴀɴ (Mᴀsᴜᴋɪɴ Dᴀғᴛᴀʀ Cᴀᴅᴀɴɢᴀɴ Aᴊᴀʜ)
18. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
19. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
20. Kᴀɪᴄʜᴏᴜ ᴡᴀ Mᴀɪᴅ-sᴀᴍᴀ!
21. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
22. Tᴏʀᴀᴅᴏʀᴀ!
23. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ
24. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
25. Bᴏᴋᴜʀᴀ ᴡᴀ Mɪɴɴᴀ Kᴀᴡᴀɪsᴏᴜ
26. Iᴛᴀᴢᴜʀᴀ ɴᴀ Kɪss
27. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ Mᴀᴊᴏ
28. Aᴋᴀᴛsᴜᴋɪ Nᴏ Yᴏɴᴀ
29. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
30. Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ
31. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
32. Aɴᴏ Nᴀᴛsᴜ ᴅᴇ Mᴀᴛᴛᴇʀᴜ
33. Nᴀʀᴜᴛᴏ Sʜɪᴘᴘᴜᴅᴇɴ : Tʜᴇ Lᴀsᴛ
34. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
35. Gᴏsɪᴄᴋ
36. Nᴀɢᴀᴛᴏ Yᴜᴋɪ-Cʜᴀɴ ɴᴏ Sᴏᴜsʜɪᴛsᴜ (Gᴀᴍʙᴀʀ ᴅᴀʀɪ Sᴢᴜᴍɪʏᴀ Hᴀʀᴜʜɪ ɴᴏ Sᴏᴜsʜɪᴛsᴜ)
37. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
38. Oʀᴇɢᴀɪʀᴜ
39. Sᴏʀᴇᴅᴇᴍᴏ Sᴇᴋᴀɪ ᴡᴀ Uᴛsᴜᴋᴜsʜɪɪ
42. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
43. Wᴏʀᴋɪɴɢ
44. Aᴋᴀɢᴀᴍɪ ɴᴏ Sʜɪʀᴀʏᴜᴋɪ Hɪᴍᴇ
45. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
46. Tᴀsᴏɢᴀʀᴇ Oᴛᴏᴍᴇ x Aᴍɴᴇsɪᴀ
47. NHK Nɪ Yᴏᴜᴋᴏsᴏ
48. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
49. Iɴᴜ x Bᴏᴋᴜ Sᴇᴄʀᴇᴛ Sᴇʀᴠɪᴄᴇ
50. Nᴀᴢᴏ ɴᴏ Kᴀɴᴏᴊᴏ X
51. Sᴘᴇᴄɪᴀʟ A
52. Lᴏᴠᴇʟʏ Cᴏᴍᴘʟᴇx
53. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
54. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ Eᴍᴍᴀ
55. Nᴀɴᴀ
56. Rᴏᴍᴇᴏ x Jᴜʟɪᴇᴛ
57. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
58. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
59. Bᴏᴋᴜʀᴀ ɢᴀ Iᴛᴀ
60. Kᴏɪ Kᴀᴢᴇ
61. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
62. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ 
63. Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ ᴇ
64. Kɪᴍɪ ɴᴏ Nᴀ Wᴀ?
65. Hᴏʀɪ-sᴀɴ ᴛᴏ Mɪʏᴀᴍᴜʀᴀ-ᴋᴜɴ
66. Rᴇᴄ
67. Cʜɪʜᴀʏᴀғᴜʀᴜ
68. Mᴀsʜɪʀᴏ-ɪʀᴏ Sʏᴍᴘʜᴏɴʏ
70. Cʀᴏss Gᴀᴍᴇ
71. Tʀᴜᴇ Tᴇᴀʀs
72. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ 
73. Sᴇɪʀᴇɴ 
74. RᴇLIFE
75. Hᴏsʜɪᴢᴏʀᴀ ᴇ Kᴀᴋᴀʀᴜ Hᴀsʜɪ
76. Eʀᴏᴍᴀɴɢᴀ-Sᴇɴsᴇɪ
77. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
78. Nᴏɢɪᴢᴀᴋᴀ Hᴀʀᴜᴋᴀ ɴᴏ Hɪᴍɪᴛsᴜ
79. Kɪᴢɴᴀɪᴠᴇʀ
80. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
81. Oʀᴀɴɢᴇ
82. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
83. Gᴀᴍᴇʀs
84. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ ᴘᴇᴛ ɴᴀ ᴋᴀɴᴏᴊᴏᴜ
85. Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ`, text, tescuk, cr)
					break
				case 'amv':
				client.updatePresence(from, Presence.composing) 
				if (isBanned) return reply(ind.baned())
				 if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
				 reply(`sedang diproses 2+ menit, btw yang buat Xptn/owner🗿`)
				 data = fs.readFileSync('./src/amv.js');
		                 jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
	                	 randKey = jsonData[randIndex];
	                	buffer = await getBuffer(randKey.result)
        		        client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'p':
				case 'asli':
					client.sendMessage(from, 'LYNX BOTT', text, { quoted: mek })
					break
				case 'rulestext':
                                        client.sendMessage(from, '*📍RULES BOT LYNX 📍*\n*┏━━━━━━━━━━━━━━━━━━━━━*\n*┃*\n*┣➣Patuhi Aturan ya🍁*\n*┃*\n*┗━━━━━━━━━━━━━━━━━━━━━*\n*[1]DILARANG SPAM❌*\n*[2]DILARANG VC\NELPON❌*\n*[3]DILARANG MEMBANDING BOT❌*\n*[4]WAJIB SV NOMOR OWNER⭕*\n*[5]DILARANG NGATAIN BOT❌*\n*━━━━━━━━━━━━━━━━━━━━*\n*_NOTE:JANGAN LUPA DONASI DENGAN KETIK ,DONASI_*', text, { quoted: mek })
                                        break
				if (text.includes('P')){
                  client.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text, {quoted: mek});
                   }
				case 'jadian':
				if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
				case 'artinama':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break
				case 'readmore':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('*teks nya mana kak?*')
					var kls = body.slice(9)
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
				client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'kodenuklir':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                                        if (!isNsfw) return reply(ind.nsfwoff())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					costum( kodenuklir(), text, tescuk, cr)
					break
				case 'nekopoi':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                                if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.sendMessage(from, nekopoi() , text, tescuk, cr)
					break
				case 'kpop':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE:V*`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
				case 'asupan':
				client.updatePresence(from, Presence.composing) 
				 if (!isOwner) return reply(ind.ownerb())
				 data = fs.readFileSync('./src/asupan.js');
		                 jsonData = JSON.parse(data);
                		 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                buffer = await getBuffer(randKey.result)
		                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'naruto':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: '**UZUMAKI NARUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: '*MINATO NAMIKAZE*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: '*UZUMAKI BORUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*SASUKE UCIHA', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: '*SAKURA*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kaneki':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${apikey}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					client.sendMessage(from, ki, image, { caption: '*KANEKI-KUN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: '*I LOVE MIKU♥*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'howgay':
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                                        client.sendMessage(from, '*Si Tukang Gay Adalah:*\nwa.me/${anug}', text, { quoted: mek })
                                        break
				case 'neko':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Nih neko mu*'})
					await limitAdd(sender)
					break
				case 'darkjokes':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*TOLONGG GELAP BANGET KA*')
				break	
				case 'antilinkgrup':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*[SUKSES]MENGAKTIFKAN ANTI LINK DI GROUP*')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*[SUKSES]MEMATIKAN ANTI LINK DI GROUP*')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
				case 'family100':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apivhtear}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi... cepet kak!_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi... cepetan woe!_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi... cepet!_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakin':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VhtearKey}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak kak gk bisa jawab ke kick:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
                                        nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break
				case 'bokep':
				client.updatePresence(from, Presence.composing) 
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('*JANGAN SANGEAN YA!*')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'asupan':
					if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                anu = await fetchJson(`http://itsmeikygans.my.id/asupan?apikey=${apikey}`)
                asup = await getBuffer(anu.result)
                client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break
				case 'kalkulator':
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    client.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break
				case 'memeindo':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME*'})
					await limitAdd(sender)
					break
				case 'caklontong':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VhtearKey}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					lontong = `[🔎] Jawaban : *${anu.result.jawaban}* \n➸ Penjelasan : *${anu.result.desk}*`
					setTimeout( () => {
					client.sendMessage(from, lontong, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi… cepetan!!_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi... cepett!!_', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'emoji':
				if (isBanned) return reply(ind.baned())
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'tiktok':
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*From* : ${anu.result.from}\n*Judul* : ${anu.result.title}\n*Upload* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'profile':
				if (isBanned) return reply(ind.baned())
    				if (!isRegistered) return reply(ind.noregis())
				reply(ind.wait())
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *User Terdaftar:* ✅\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰─────────────────────`
					prof = await getBuffer(anu.result.profil)
		 			client.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
				case 'nulis2':
				case 'tulis2':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati')
				laysha = body.slice(8)
				reply('ã€Œâ—ã€WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'nulis':
				case 'tulis':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                                if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Yang mau di tulis apa kak?')
					tulis = body.slice(6)
					reply(ind.wait())
					buffer4 = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${VhtearKey}`, {method: 'get'})
					client.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Awas Ketahuan guru'})
					break
				case 'jadwaltv':
						if (isBanned) return reply(ind.baned())
			        	       client.updatePresence(from, Presence.composing) 
		        	               data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
					       if (data.error) return reply(data.error)
					       reply(data.result)
					       break
				case 'assalamualaikum':
		               			client.reply(from, `Waalaikumsalam ${pushname2}:)`)
		                		break
				case 'lirik':
				if (isBanned) return reply(ind.baned())
		                if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
			                reply(ind.wait())
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('*Lirik dari lagu '+teks+' adalah* :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break
		   		 case 'wa.me':
				  case 'wame':
  					client.updatePresence(from, Presence.composing) 
				        options = {
			                text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
			                contextInfo: { mentionedJid: [sender] }
				        }
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'leaderboard':
				case 'lbAXCT ':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL BOT* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG BOT* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'mutual':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Parter AXCT ')
                await reply(`wa.me/${anug}`)
                await reply( `Partner Ketemu😉: 🗿\n*${prefix}next* — New partner AXCT `)
            break
		case 'report':
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('62895704959080@s.whatsapp.net', options, text, {quoted: mek})
                    reply('*🍁DEAR USER🍁*\n*━━━━━━━━━━━━━━━━━━━━*\nMasalah telah di laporkan ke owner BOT AXCT , laporan palsu/main² tidak akan ditanggapi.\n*━━━━━━━━━━━━━━━━━━━━*')
                    break
            case 'next':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Parter AXCT ')
                await reply(`wa.me/${anug}`)
                await reply( `Partner Ketemu😉: 🗿\n*${prefix}next* —  new partner AXCT `)
            break
				case 'transfer':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895704959080@s.whatsapp.net', fee)
                reply(`*「 SUKSES CUY 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}\nNote:Jangan Lupa Donasi:)`)
                break
				case 'bank':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN SUKES 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
		case 'memeindo':  
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME*'})
					await limitAdd(sender)
					break 
		case 'waifu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: '*DARLING OHAYOU!*', quoted: mek })
					break
		case 'infogc':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
	     	                   client.updatePresence(from, Presence.composing)
                	       	   ppUrl = await client.getProfilePicture(from)
	                	   reply(ind.wait())
	      		           buffer = await getBuffer(ppUrl)
			           client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
	                	   break
                case 'moddroid':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
            case 'bitly':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'nangis':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'randomhentai':
                                        gatauda = body.slice(6)
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
		                        if (!isNsfw) return reply(ind.nsfwoff())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroupAdmins) return reply(ind.admin())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
		case 'pornhub':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(9)
					var alan2 = gh.split("&")[0];
					var alan3 = gh.split("&")[1];
					if (args.length < 1) return reply(ind.wrongf())
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${alan2}&text2=${alan3}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai':
				    try {
				    if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
				   if (!isGroup) return reply(ind.groupo())
                                      if (!isGroupAdmins) return reply(ind.admin())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://ferdiz-api.herokuapp.com/api/anime/hentai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hati hati ketawan bisa ke ben '})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
		case 'shota':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isGroup) return reply(ind.groupo())
                        if (!isNsfw) return reply(ind.nsfwoff())
	    		     res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`)
 		             buffer = await getBuffer(res.image)
			     client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
			     await limitAdd(sender)
			     break
		case 'loli':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
			gatauda = body.slice(6)
			reply(ind.wait())
			anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`, {method: 'get'})
			buffer = await getBuffer(anu.result.result)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*LOLINYA NGAB*'})
			await limitAdd(sender)
			break
		case 'nekonime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (!isGroup) return reply(ind.groupo())
             		        if (!isNsfw) return reply(ind.nsfwoff())
		   		      gatauda = body.slice(10)
				      reply(ind.wait())
			   	      anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${VhtearKey}`, {method: 'get'})
				      buffer = await getBuffer(anu.result.result)
			    	      client.sendMessage(from, buffer, image, {quoted: mek, caption: '*KUCINGNYA NI OM:V*'})
				      await limitAdd(sender)
				      break
                case 'blowjob':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				   if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
				        reply('[❗] Awas Ketawan Owner Bisa Ke block/kick')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*AWAS ADA FBI*'})
					})
					case 'cium':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		      case 'ttp':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
		    	        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*PARAMETER SALAH❌*\nContoh= ${prefix}ttp AXCT BOT')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
						})
                      case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '*PARAMETERSALAH❌*\nContoh= ${prefix}qrcode AXCT  bot', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'dadu':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
		case 'fake':
			costum('kamu gay', '0@s.whatsapp.net', `njir`, {quoted: mek})
			break
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'wibu':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
			data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
			buffer = await getBuffer(data.result.foto)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*IH WIBU*'})
			await limitAdd(sender)
			break
                case 'husbu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*HUSBU FROM AXCT  BOT*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR* ❌')
					}
					await limitAdd(sender)
					break
		case 'randomhentong':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'ranime':
		case 'randomanime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek ,caption:'*RANIMENYA BANG*'})
					await limitAdd(sender)
					break
	                        case 'gacha cewek':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   var cewe =['ullzang girl','cewe cantik','hijab cantik','korean girl','cewe sexy']
                   anu = await fetchJson('https://api.fdci.se/rep.php?gambar= '+ cewe,)
                   var n = JSON.parse(JSON.stringify(anu));
                   var nimek =  n[Math.floor(Math.random() * n.length)];
					reply(ind.wait())
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gacha cowok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   var cewe =['cowo ganteng', 'cogan', 'korean boy', 'chinese boy', 'japan boy']
                   anu = await fetchJson('https://api.fdci.se/rep.php?gambar= '+ cewe,)
                   var n = JSON.parse(JSON.stringify(anu));
                   var nimek =  n[Math.floor(Math.random() * n.length)];
					reply(ind.wait())
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kickbeban':
			if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (!isGroup) return reply(ind.groupo())
                                if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan beban grup :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`*otw kick kita!,kasih waktu dlu yamkan😂 : @${mentioned[0].split('@')[0]}*`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*Sayonara Beban Grup👋😂*', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*2 Sabarr...😂*', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*3🗿*', text) // ur cods
					}, 1000) // 1000 = 10s,
					setTimeout( () => {
					client.sendMessage(from, '*Bissmillah hedshot 🤾‍♂*', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
		case 'kpop':
		if (isBanned) return reply(ind.baned())
              if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
              anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${tobzapi}`, {method: 'get'})
              buffte = await getBuffer(anu.result)
              client.sendMessage(from, buffte, image, {quoted: mek, caption: '*Ih gay*'})
              break 
	       case 'hartatahta':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Contoh : ${prefix}hartatahta botwea')
				har = body.slice(12)
					reply('*[🔎]Error kak ............*')
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'joox':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isGroup) return reply(ind.groupo())
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Berhasil Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Note: LAGU BENTAR LAGI DIKIRIM JDI JAN SPAM*`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                reply('[⏳] Orang Sabar Disayang Dajjal')
		client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                case 'play':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VhtearKey}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「🍁」Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Sabar Ya kak Sekitar 1 Menit*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break			
				case 'quotesanime':
				    try {
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'waifu':
			if (isBanned) return reply(ind.baned())
                        if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
                 case 'avengers':
                 if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					if (!q.includes('|')) return  reply(ind.wrongf())
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'wolfmetal':
					if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*teksnya mana kak?*')
					wometal = body.slice(10)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'pubg':
                			if (!isRegistered) return reply(ind.noregis())
		                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(5)
					var tels5 = gh.split("|")[0];
					var tels6 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${tels5}&text2=${tels6}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case '8bit':
	        	        	if (!isRegistered) return reply(ind.noregis())
        	        	 if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(5)
					var tels8 = gh.split("|")[0];
					var tels7 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${tels8}&text2=${tels7}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'goldbutton':
					if (!isRegistered) return reply(ind.noregis())
	                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gol = body.slice(12)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/gplaybutton?text=${gol}&apikey=apivinz`, {method: 'get'})
					gools = await getBuffer(anu.result)
					client.sendMessage(from, gools, image, {quoted: mek})
					break
					case 'halloweentext':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    client.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
					case 'summer':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'metaldark':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'dropwater':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'toxic':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blood':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'lava':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					reply('[❗] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
		case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
		case 'oyasumi':
const oyasumi = fs.readFileSync('./assets/oyasumi');
client.sendMessage(from, oyasumi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
		case 'bot':
const bot = fs.readFileSync('./assets/bot');
client.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'yamete':
const yamete = fs.readFileSync('./assets/yamete');
client.sendMessage(from, yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                case '1cak':
				    try {
			    	            if (!isRegistered) return reply(ind.noregis())
				            if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}\n╠➥ Note:Jangan Lupa Donasi:D`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih beb profil barunya😉')
					break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP AXCT  」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}\nNote:Jangan Lupa Donasi:D`)
						}
						reply('Sukses broadcast group')
					}
					break 
	      				case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST AXCT  BOT*`})
					await limitAdd(sender)
					break 
					case 'resepmasakan':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstalk':
   				if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://ferdiz-api.herokuapp.com/api/stalkig/user/name=${body.slice(9)}`, {method: 'get'})
					buffer = await getBuffer(data.img)
					reply(ind.wait())
					hasil = `*username* : ${data.username}\n*Fullname* : ${data.fullname}\n*pengikut* : ${data.followers}\n*Mengikuti* : ${data.following}\n*POSTS* : ${data.posts}\n*bio* :\n ${data.bio}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
		                        await limitAdd(sender) 
		                        break
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list GROUP BOT AXCT  :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 20) return reply(`*UMUR KAMU TERLALU TUA UNTUK MENJADI TEMAN AXCT *`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA UNTUK MRNJADI TEMAN AXCT *`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser,  serialUser, time, sender))
                    reply('Terima Kasih Sudah Daftar')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 99999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena kamu owner bot AXCT  ini ${one}Xp untuk kamu😉`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				const katailham = [
				'lu bacod anying\nKatailham'
				]
				case 'seberapagay':
		                if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(1)
		     		        anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
	   		        	hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${res.data.persen}%\nAlert!!! : ${res.data.desc}`
		         	        reply(hasil)
				        await limitAdd(sender)
					break
				case 'hobby':
		                if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi',`Jual Cewe`,`Sholat Bercandaan`,'Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
          case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
               case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role), text, tescuk, cr)
					break
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
                case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL AKUN* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *AXCT*\n*AUTHOR* : AXCT\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*BOT AKTIF SELAMA* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                case 'quotemaker':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                     case 'ytmp4':
    		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(ind.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 DOWNLOADER* 」\n\n• Title : *${anu.result.title}*\n• *Size:* ${anu.result.size}\n• *Link:* https://www.youtu.be/${anu.result.id}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.result.imgUrl)
					reply(ind.wait)
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Nih Anjim'})
					await limitAdd(sender) 
					break 
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    reply('[❗] Menunya Rusak')
		    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								reply('*Here You Sticker~*')
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Ganti Prefix ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Mengubah Peraturan Member Menjadi ${memberlimit} SUCCESS!`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲??𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'ownergrup':
				  case 'ownergroup':
			               client.updatePresence(from, Presence.composing) 
			               options = {
			               text: `*Owner di Group ini adalah : @${from.split("-")[0]} Tadaaa*`,
			               contextInfo: { mentionedJid: [from] }
			               }
			               client.sendMessage(from, options, text, { quoted: mek } )
			     	       break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` ❮ *TAG ALL AXCT * ❯\n┣➥ @${mem.jid.split('@')[0]}\n║`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*perintah diterima* , 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 block ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ *BROADCAST AXCT* ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST AXCT BOT 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('*SUKSES MENGGANTI PP GRUP')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan , Mungkin Abis left di grup')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*❗`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*❗`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh kontak owner aku:), jangan spam atau ku block kamu❗','save nomornya jan lupa😉',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*YAH GK JDI ADMIN LAGI MAKANYA JADI ADMIN JANGAN NAKAL*🤣👋 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*@${mentioned[0].split('@')[0]} YAH GK JDI ADMIN LAGI:)*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*SELAMAT @${mentioned[0].split('@')[0]} KAMU JADI ADMIN GRUP* 🥳`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*ASEEK BEBAN GRUP DI KICK* @${mentioned[0].split('@')[0]} 👋`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Udah Jadi Nih*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':v')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳❗')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Mengaktifkan Fitur Simih❗*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ * SUKES* ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️❗')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*❗')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶❗')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️❗')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(':D')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya❗*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
					break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF*❗')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️✔')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️✔')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF*❗')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*✔️')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ Menonaktifkan EVENN Di Group ini✔️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam menu bot axct *${prefix}menu Bot axct !*`)
		const none = fs.readFileSync('./assets/none');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
