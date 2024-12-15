const venom = require("venom-bot");

/**
 * Inicializa o Venom Bot.
 *
 * @param sessionName - Nome da sessão.
 * @param onReady - Função chamada ao inicializar com sucesso.
 * @param onError - Função chamada em caso de erro.
 */
function initializeVenom(
	sessionName: string,
	onReady: (client: any) => void,
	onError: (err: any) => void
): void {
	venom
		.create({
			session: sessionName,
			multidevice: true,
		})
		.then(onReady)
		.catch(onError);
}

module.exports = initializeVenom;
