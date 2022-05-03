const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token ='5158191525:AAHtxyO_hpIz8KF8T5JZB9HRZuemAMoQxH8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.on('message', (msg) => {
 var Hi = "hi";
 if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
   bot.sendMessage(msg.chat.id,"<b>Welcome to our Company!</b> \n <i>I'm JoeBot and I'm going to help you here ;-)</i> \n <em>Please, check my linkedin for further information</em> \n <a href=\"http://www.linkedin.com/in/joevieirajr\">My LinkedIn URL</a> \n <code>J. Vieira Jr.</code> \n <pre>AI Chatbot Developer</pre>" ,{parse_mode : "HTML"});

}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});