import TelegramBot from "node-telegram-bot-api";
const token = "6906911449:AAHXjzku_QHQMAMqQcaVyGNhjknKG5XYtEw";

const bot = new TelegramBot(token, { polling: true });

// recieve a messsage with text gasto,1500,supermercado

bot.onText(/\/start/, (msg, match) => {
	bot.sendMessage(msg.chat.id, "Hola, estoy aqui para ayudarte.");
	bot.sendMessage(msg.chat.id, "Comandos disponibles:");
	bot.sendMessage(msg.chat.id, "/gasto 1500 ARS Supermercado");
	bot.sendMessage(msg.chat.id, "/ingreso 1500 USD Garage");
});

bot.on("message", (msg) => {
	const chatId = msg.chat.id;
	const message = msg.text?.toLocaleLowerCase();
	if (message) {
		const [command, amount, category, type] = message.split(" ");
		const cotizationType = type ? type : "ARS";
		if (command === "gasto") {
			bot.sendMessage(
				chatId,
				`Se guardo el gasto de ${amount} ${cotizationType} en ${category}`,
			);
		}

		if (command === "ingreso") {
			bot.sendMessage(
				chatId,
				`Se guardo el ingreso de ${amount} ${cotizationType} en ${category}`,
			);
		}
	}
});
