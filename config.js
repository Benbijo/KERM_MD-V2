//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/221772793284"; , https://wa.me/221772793284";
global.sudo = process.env.SUDO || "221772793284";
global.owner = process.env.OWNER_NUMBER || "221772793284";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Zzd0VHUmQ4R2l4ZmlFNXNzTS9qcFBHWEdickxsRWpYYUVuM1dFYjIxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFqMmF1VkhEY1lHUTEvd0VVRkpOdGt6L0dYMGVjb0QzTVhmNDFkQ1Rrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR3UwQllKSnpFRGpSbWVmSjlSREZEeGVkTHBnMURna2NhbnFWck41Z0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZWFPclVaZ3FjS0p3d3hLVS9kQUhCbkdDZW80YkljQWFGVnRQcGJsTkZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDejAxN3hhc29XSStJdExadVkrSUpIRFBxTW9MTnprZUY5MWZLRU1RRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wYjVvSTQwTHZpdGgwenBIcVZuN3hpM2RlWjdwMGxhM1FHbGJ3OTBnVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1BdDV4VzNCOTR1SUMxcGVaL0Jwckx2YTdXV0RZT2ZvekU3a3ZSb1dsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJ4NE5UWjhWYjhMZGJEaUlESFRiTGNRRHpSY1ZzMFFUMzc4V2RNT09YRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBIQlpXYVRSVit2ZUdONWJmaCtveWoyTE93RGlLdHQ0NjFyMytQaG82LzVKenlTNldMQXJUR3drYVl2UnVNdGtzWTZVM01yT2NQSGZMRXU2eUVjdERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlBndzczUXJ2dk8vckNTUjNwUmlxZVdxUi9xK04rMGFIR0xuVXRZRzh4anc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNIVXhXdzNpUW5TYTZBN3ZhV1U5SnciLCJwaG9uZUlkIjoiZmJlZGIxZDgtZDI1Yy00ZDRkLWIzYzktMjhjZjJhOGU2M2VlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMva0xZcVhCdFJjcWE4SFVPenc5RU5tb2ZEbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSGE4K1A2bFROZVF1bFdBc1VYS0QvRDI3eEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjFGVExQWEEiLCJtZSI6eyJpZCI6IjIyMTc3Mjc5MzI4NDo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6In5CIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQeUpuTFVFRUxyNHNiY0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEeGNVanBzZlZSOXRWc1lRQ20vc2xsZEo3bnI3WGdhN2lOUmErcXFzQ2d3PSIsImFjY291bnRTaWduYXR1cmUiOiJuYTNrNUE1MUF2a2NzTlAxOFgxNG8ySXQwZTN0OEpSZ0dYWVk4dlh0cGF5bXRmQmNZTDlLeEQ0V21lT3N6TWo0Si9JL2VBV3BScFJjVkttRkxYYUhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUgrZXhJQ2JKbHlES1lMandOZWFWUUJVMk5WQXlCM1BndFdhWUlBWUkzZ2ExN1V0Y2djYlhGQk5HTWRPaUFWQmZJTVdzakp3T21hMHJ2aGpKajJqQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NzI3OTMyODQ6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJROFhGSTZiSDFVZmJWYkdFQXB2N0paWFNlNTYrMTRHdTRqVVd2cXFyQW9NIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2Nzc0MzQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtIRCJ9"
module.exports = {
  menu: process.env.MENU || "•",
  HANDLERS: process.env.PREFIX || "•",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
