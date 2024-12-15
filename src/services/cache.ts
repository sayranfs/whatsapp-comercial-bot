type MessageCacheEntry = {
	role: string;
	text: string;
};

const messageCache: MessageCacheEntry[] = [];

/**
 * Adiciona uma mensagem ao cache.
 *
 * @param role - Função do remetente da mensagem (ex: "user" ou "model").
 * @param text - Conteúdo da mensagem.
 */
function addToCache(role: string, text: string): void {
	messageCache.push({ role, text });
	if (messageCache.length > 10) {
		messageCache.shift();
	}
}

module.exports = { addToCache };
