const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * Inicializa o Google Generative AI Chat Model.
 *
 * @param apiToken - Token da API do Google Generative AI.
 * @param systemInstruction - Instrução inicial do sistema.
 * @param modelName - Nome do modelo (padrão: "gemini-1.5-flash").
 * @returns Instância do ChatModel.
 */
function initializeGoogleGenerativeAI(
	apiToken: string,
	systemInstruction: string,
	modelName: string = "gemini-1.5-flash"
) {
	const genAI = new GoogleGenerativeAI(apiToken);
	const model = genAI.getGenerativeModel({
		model: modelName,
		systemInstruction,
		temperature: 1,
	});

	return model.startChat();
}

module.exports = initializeGoogleGenerativeAI;
