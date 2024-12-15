const fs = require("fs");
const env = require("./config/dotenv");
const initVenom = require("./config/venom");
const initAI = require("./services/googleGenerativeAI");
const log = require("./services/logger");
const handleMsg = require("./handlers/messageHandler");

// Lê a instrução do sistema.
const info = fs.readFileSync("./src/config/info.txt", "utf8");

// Verifica se o token da API está definido.
const apiToken = env["API_TOKEN"];
if (!apiToken) {
	throw new Error("API_TOKEN não está definido nas variáveis de ambiente.");
}

// Inicializa o modelo de IA do Google.
const chat = initAI(apiToken, info);

// Inicializa o Venom Bot e configura o handler de mensagens.
initVenom(
	"Atendimento Thaty Confeitaria",
	(client: any) => handleMsg(client, chat),
	(err: any) => log("error", "Erro ao inicializar o Venom:", err)
);
