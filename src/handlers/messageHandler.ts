const { addToCache } = require("../services/cache");
const log = require("../services/logger");

/**
 * Lida com mensagens recebidas e envia respostas.
 *
 * @param client - Cliente do Venom Bot.
 * @param chat - Instância do ChatModel do Google Generative AI.
 */
function handleMessage(client: any, chat: any): void {
	client.onMessage(async (msg: any) => {
		// Verificações
		if (msg.isGroupMsg) return;
		if (String(msg.body).length === 0) return;
		if (String(msg.body).length > 500) return;

		log("info", "Nova mensagem recebida:", msg.body);
		addToCache("user", msg.body);

		try {
			const { response } = await chat.sendMessage(msg.body);
			const responseText =
				response?.text() || "Não foi possível gerar uma resposta.";
			await client.sendText(msg.from, responseText);

			log("info", "Resposta enviada:", responseText);
			addToCache("model", responseText);
		} catch (error) {
			console.error("Erro ao lidar com a mensagem:", error);
		}
	});
}

module.exports = handleMessage;
