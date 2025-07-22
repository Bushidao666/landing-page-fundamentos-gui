# 🔧 Variáveis de Ambiente - Configuração Obrigatória

## 📋 **ARQUIVO: `.env.local`**

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
# ==============================================
# FACEBOOK CONVERSIONS API - OBRIGATÓRIAS
# ==============================================

# URL da sua API de Conversões do Facebook
NEXT_PUBLIC_FB_CONVERSIONS_API_URL=https://sua-api.railway.app

# ID do seu Facebook Pixel (apenas números)
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345

# URL do checkout onde o cliente será redirecionado
NEXT_PUBLIC_CHECKOUT_URL=https://checkout.cakto.com.br/kit-inteligencia-estrategica

# URL do webhook para receber dados dos leads
NEXT_PUBLIC_WEBHOOK_URL=https://webhook.exemplo.com/leads

# ==============================================
# CONFIGURAÇÕES OPCIONAIS
# ==============================================

# Moeda padrão (padrão: BRL)
NEXT_PUBLIC_DEFAULT_CURRENCY=BRL

# Modo debug - true para desenvolvimento (padrão: false)
NEXT_PUBLIC_DEBUG_MODE=true

# Timeout para requisições em ms (padrão: 10000)
NEXT_PUBLIC_API_TIMEOUT=10000

# Tentativas de retry em caso de falha (padrão: 3)
NEXT_PUBLIC_RETRY_ATTEMPTS=3

# Cache TTL para dados do usuário em ms (padrão: 86400000 = 24h)
NEXT_PUBLIC_USER_DATA_CACHE_TTL=86400000
```

---

## 🔑 **COMO OBTER CADA VARIÁVEL:**

### **1. `NEXT_PUBLIC_FB_CONVERSIONS_API_URL`**
- URL da sua API backend que processa eventos do Facebook
- Exemplo: `https://minha-api.railway.app`

### **2. `NEXT_PUBLIC_FB_PIXEL_ID`**
- **Onde encontrar:**
  1. Acesse [Facebook Business Manager](https://business.facebook.com)
  2. Vá em **Events Manager**
  3. Selecione seu **Pixel**
  4. Copie o **ID** (apenas números)
- Exemplo: `123456789012345`

### **3. `NEXT_PUBLIC_CHECKOUT_URL`**
- URL da página de checkout onde o cliente finaliza a compra
- Exemplo: `https://checkout.cakto.com.br/seu-produto`

### **4. `NEXT_PUBLIC_WEBHOOK_URL`**
- URL do endpoint que receberá os dados dos leads
- Exemplo: `https://n8n.exemplo.com/webhook/leads`

---

## ⚠️ **IMPORTANTE:**

- ✅ **Arquivo obrigatório:** `.env.local` na raiz do projeto
- ✅ **Não commitar:** Adicione `.env.local` ao `.gitignore`
- ✅ **Produção:** Configure as mesmas variáveis no seu servidor
- ✅ **HTTPS obrigatório:** Todas as URLs devem usar HTTPS

---

## 🧪 **TESTE DE CONFIGURAÇÃO:**

Após configurar as variáveis, teste no console do navegador:

```javascript
// Verificar se as variáveis estão carregadas
console.log('API URL:', process.env.NEXT_PUBLIC_FB_CONVERSIONS_API_URL);
console.log('Pixel ID:', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
console.log('Checkout URL:', process.env.NEXT_PUBLIC_CHECKOUT_URL);
console.log('Webhook URL:', process.env.NEXT_PUBLIC_WEBHOOK_URL);

// Verificar validação das configurações
FBConversionsDebug.validate();
PixelDebug.info();
```

---

## ✅ **CHECKLIST DE CONFIGURAÇÃO:**

- [ ] Arquivo `.env.local` criado na raiz
- [ ] `NEXT_PUBLIC_FB_CONVERSIONS_API_URL` preenchida
- [ ] `NEXT_PUBLIC_FB_PIXEL_ID` preenchida (apenas números)
- [ ] `NEXT_PUBLIC_CHECKOUT_URL` preenchida
- [ ] `NEXT_PUBLIC_WEBHOOK_URL` preenchida
- [ ] Projeto reiniciado após criar `.env.local`
- [ ] Variáveis validadas no console

**Pronto! Seu sistema está configurado e funcionando! 🚀** 