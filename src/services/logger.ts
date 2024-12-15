const chalk = require("chalk");

/**
 * Loga uma mensagem formatada no console.
 *
 * @param level - Nível do log ("info", "warn", "error").
 * @param message - Mensagem a ser exibida.
 * @param meta - Dados adicionais opcionais.
 */
function logger(
	level: "info" | "warn" | "error",
	message: string,
	meta?: any
): void {
	const timestamp = new Date().toLocaleTimeString();
	let coloredLevel: string;

	switch (level.toUpperCase()) {
		case "ERROR":
			coloredLevel = chalk.red(`[${level}]`);
			break;
		case "WARN":
			coloredLevel = chalk.yellow(`[${level}]`);
			break;
		case "INFO":
			coloredLevel = chalk.green(`[${level}]`);
			break;
		default:
			coloredLevel = `[${level}]`;
	}

	console.log(
		`${chalk.blue(`[${timestamp}]`)} ${coloredLevel} ${message}`,
		meta || ""
	);
}

module.exports = logger;
