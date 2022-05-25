// Version: 2.4.0 Private

require("dotenv").config();
const { Client, Intents } = require('discord.js');
const token = process.env.BOT_TOKEN;
const commandPrefix = process.env.COMMAND_PREFIX;

// Create a new client instance
const client = new Client({
	intents: [
		//Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGES,
 		//Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
 		//Intents.FLAGS.DIRECT_MESSAGE_TYPING,
 		Intents.FLAGS.GUILDS,
 		//Intents.FLAGS.GUILD_BANS,
 		//Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
 		//Intents.FLAGS.GUILD_INTEGRATIONS,
 		//Intents.FLAGS.GUILD_INVITES,
 		//Intents.FLAGS.GUILD_MEMBERS,
 		//Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
 		//Intents.FLAGS.GUILD_MESSAGE_TYPING,
 		//Intents.FLAGS.GUILD_PRESENCES,
 		//Intents.FLAGS.GUILD_VOICE_STATES,
 		//Intents.FLAGS.GUILD_WEBHOOKS
	]
});

client.once('ready', () => {
	console.log('Ready!');
});

const commands = {
	"help": help,
	"dictionary": dictionary,
	"solonggaybowser": gaybowser,
	"slgb": gaybowser,
	"braadworstspring": skeerogame,
	"bws": skeerogame,
	"walcrack": walcrack,
	"walcoin": walcrack,
	"credits": credit,
}

function help(msg) {
	let ret = "Lijst van commands:";
	for (const command in commands) {
		ret += "\n- " + commandPrefix + command;
	}
	ret += "\n\nvoor meer hulp, ga naar: http://www.matsw.tk/www/Bas/BanaanBot/BanaanBot.html"
	return ret;
}

function gaybowser(msg) {
	return "http://www.matsw.tk/";
}

function dictionary(msg) {
	return "http://www.matsw.tk/www/Bas/BanaanBot/BanaanBot.html";
}

function skeerogame(msg) {
	return "https://theepicblock.nl/braadworstspring";
}

function walcrack(msg) {
	return "http://matsw.tk/www/Discord/WalCrack.html";
}

function credit(msg) {
	return "Gemaakt door Sentinel met behulp van TheEpicBlock_TEB, MichaHere, Walcraft22 & Foxite"
}

// source: Woordenboek K - Nederlands (https://docs.google.com/document/d/1lavyuSKmQSTa-GWlmRY5kel-iEe6wuf5_VkqlgXtA7M/mobilebasic)
function autocorrect(msg) { //all replacements
	let result = msg.content.toLowerCase()
	const replacements = {
		"nice": "🤧",
		"ja": "🧅",
		"een dom persoon": "aardappel",
		"een oude computer": "aardappel",
		"het antwoord op alles": "ankergetal",
		"kromme fruitsoort": "banaan",
		"geweldig": "banaan",
		"schiet op jij slome slak!": "besta sneller",
		"kan letterlijk elk werkwoord betekenen aan de hand van de context": "consumeren", // too specific
		"though": "deeg",
		"kan letterlijk elk woord betekenen": "deur", // too specific
		"doei": "kom met me mee",
		"de deur dicht, maar niet op slot doen": "door de deur de deur dicht doen",
		"scramblen": "door de midden halen",
		"frans": "flu‌t", // zero width non joiner between 'u' and 't'
		"no offence": "geen uit-hek",
		"geluiden": "geluiten",
		"graphic": "graphic",
		"hersenen": "grote roze hoofd-spons",
		"hoofdingang": "head-in-hallway",
		"heel erg": "heg",
		"hoe laat is het": "hoe tijd is het",
		"hey": "ga weg",
		"hoi": "I wish you a merry x-mas, I wish you a merry x-mas, I wish you a merry x-mas and a happy new year",
		"jep": "Jeb",
		"jou": "jij",
		"de taal k": "Kaas",
		"kapot": "kapto",
		"leven": "leverpastei",
		"blijheid": "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch",
		"ghast": "Marshmallow",
		"ster": "meester",
		"maandag die flut is": "mehndag", // perhaps too specific
		"steve jobs": "Minecraft-hoofdpersonage Banen",
		"natuurkunde": "NASK",
		"natoerkunde": "NASK min SK",
		"no-lifer": "olijfer",
		"o&o": "oooo",
		"de wortel van iets berekenen": "ergens een wortel op pleuren", //perhaps too specific
		"updaten": "omhoogdatumen",
		"pdof": "Portable Document... Oh, and it's a Format",
		"presentatie": "presnentation",
		"appeltaart": "rabbeldebabsquiche",
		"appel": "rabbeldebabski",
		"dingen die random zijn": "randomerigheden",
		"kieran": "Randomerigheden",
		"rasp": "raps",
		"reageert": "rea-Gert",
		"bill gates": "Rekening Poorten",
		"mensen uit groep acht": "rivieren",
		"de lichtelijke irritatie van iemand die lichtelijk geïrriteerd is": "superieure kracht van de woede van de aandachtige Juno door de woede", // perhaps too specific
		"woede": "**LLANFAIRPWLLGWYNGYLLGOGERYCHWYRNDROBWLLLLANTYSILIOGOGOGOCH!!!**",
		"endportal gateway": "TicTac Endportal",
		"flut": "tomaat",
		"mensen uit klassen hoger dan die van jou": "tunnels", // too specific
		"laptop": "uit de kluiten gewassen klaptelefoon",
		"wat is dit": "wat is these",
		"wat zijn de specs": "wat voor laptop zit er in", // too specific
		"wesp": "weps",
		"hond": "woef",
		"slapen": "z'tjes consumeren",
		// end of dictionary K - Nederlands
		"bedoelde je: aardappel?": "Aardappel",
		"worst case": "worst kaas",
		"patat": "fr‌iet", // zero width non joiner between 'r' and 'i'
		"friet": "patat",
		"oof": "🥚",
		"belgie": "Benederland",
		"belgië": "Benederland",
		"madagaskar": "Mad at gas car",
		"helaas": "gekaasfondued",
		//"o": "OwO", // put these 3 last.
		//"u": "UwU", //
		//"t": "TwT", //
	};

	for (const target in replacements) {
		result = result.replaceAll(target, replacements[target]);
	}

	if (result == msg.content.toLowerCase()) {	// all lowercase
		return;
	}

	result = "Bedoelde je: " + result + "?";	// Bedoelde je: ?

	if (result.length >= 2000) { // if message is too long, send something else
		msg.reply("Stop pesten 😭");
	} else if (result !== msg.content) { // otherwise send the message
		msg.reply(result);
	}
}

client.on('messageCreate', (msg) => { // if message author is a bot, don't send message
    if(msg.author.bot){
        return;
    }

    if (msg.content.startsWith(commandPrefix)) {
        command = msg.content.toLowerCase().substring(commandPrefix.length);
        try{
			const result = commands[command](msg);
            if (!result) {
                console.error("trying to send null or empty string");
            } else if (result.length >= 2000) {
                console.error("trying to send message over 2000 characters");
            } else {
                msg.reply(result);
            }
        }catch(e){
            console.log("Unexpected error: "+e)
            }
    } else {
        autocorrect(msg);
    }
});

client.login(token);


/*
Known bugs:
-Crashes when an unknown command occurs.
-Makes the whole sentence lowercase.
*/