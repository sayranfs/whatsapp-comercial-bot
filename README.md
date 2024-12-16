# 🚀 WhatsApp Bot Comercial

Um bot automatizado para WhatsApp desenvolvido com **Node.js**, **TypeScript** e **Venom-Bot**.

## 📋 **Índice**
1. [Descrição](#descrição)
2. [Tecnologias](#tecnologias)
3. [Estrutura](#estrutura)
4. [Instalação](#instalação)
5. [Uso](#uso)
6. [Configuração](#configuração)
7. [Autor](#autor)

---

## 📜 **Descrição**
Bot comercial para automatização de mensagens no WhatsApp. Personalizável para atendimento, gerenciamento de pedidos e respostas automáticas.

---

## 🛠 **Tecnologias**
- Node.js
- TypeScript
- Venom-Bot
- Puppeteer
- dotenv

---

## 🧉 **Estrutura**

```bash
whatsapp-bot/
│
├── src/                  # Código-fonte
│   ├── config/           # Configurações
│   │   ├── venom.ts      # Inicialização do Venom-Bot
│   │   ├── dotenv.ts     # Variáveis de ambiente
│   │   └── info.txt      # Informações adicionais
│   │
│   ├── handlers/         # Manipuladores de mensagens
│   │   └── messageHandler.ts
│   │
│   └── services/         # Serviços auxiliares
│       ├── cache.ts      # Cache de dados
│       ├── logger.ts     # Logs
│       └── googleGenerativeAI.ts # API externa
│
├── tokens/               # Tokens e sessões
├── .env                  # Configuração do ambiente
├── package.json          # Dependências
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Documentação
```

---

## ⚙️ **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/whatsapp-bot.git
   cd whatsapp-bot
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```env
   API_TOKEN=GEMINI_TOKEN
   ```

4. Execute o projeto:
   ```bash
   npm run start
   ```

---

## 🚀 **Uso**
- **Personalize** o arquivo `messageHandler.ts` para definir respostas automáticas.
- **Instruções iniciais** podem ser feitas no arquivo `config/info.txt`.
- Introduza o **token da AI** no arquivo `.env` para manter as credenciais seguras.

Exemplo básico de resposta:
```ts
if (message.body.toLowerCase() === 'oi') {
  client.sendText(message.from, 'Olá! Como posso ajudar?');
}
```

---

## 🔧 **Configuração**
- **Variáveis de ambiente:** Use o `.env` para armazenar chaves e tokens.
- **Sessões:** Gerencie sessões do WhatsApp com `venom.ts`.
- **Logs:** Ative os logs no arquivo `logger.ts`.

---

## 👤 **Autor**
Desenvolvido por **Sayran Felix**.

- GitHub: [github.com/sayranfs](https://github.com/sayranfs)
- Instagram: [instagram.com/sayranfelix](https://www.instagram.com/sayranfelix/)

---

## 📝 **Licença**
Este projeto está sob a licença **MIT**.
