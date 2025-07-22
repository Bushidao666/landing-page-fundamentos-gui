# 🔧 Solução: Parâmetros de Telefone no Checkout

## ❌ **PROBLEMA IDENTIFICADO:**

### **Formato Incorreto Enviado:**
```url
phone=%2B5521990478137
```
- Parâmetro único `phone` com valor URL-encoded
- Não é reconhecido pelo sistema de checkout

### **Formato Correto Esperado:**
```url
phoneac=21&phonenumber=990478137
```
- **`phoneac`** = Código DDD (ex: 21, 11, 47)
- **`phonenumber`** = Número sem DDD (ex: 990478137)

---

## ✅ **SOLUÇÃO IMPLEMENTADA:**

### **1. Função de Parse do Telefone:**
```typescript
function parsePhoneNumber(phone: string): { ddd: string; number: string } {
  // Diferentes cenários de formatação brasileira:
  
  // 11999999999 → DDD: 11, Número: 999999999
  // (11) 99999-9999 → DDD: 11, Número: 999999999
  // +5511999999999 → DDD: 11, Número: 999999999
  // 5511999999999 → DDD: 11, Número: 999999999
}
```

### **2. Atualização dos Tipos:**
```typescript
interface CheckoutUrlParams {
  name: string;
  email: string;
  phoneac: string;    // ✅ Código DDD 
  phonenumber: string; // ✅ Número sem DDD
  s1_extid: string;
  // ... outros parâmetros
}
```

### **3. Construção Correta dos Parâmetros:**
```typescript
// Extrair DDD e número do telefone
const { ddd, number } = parsePhoneNumber(formData.phone);

const baseParams: CheckoutUrlParams = {
  name: formData.name,
  email: formData.email,
  phoneac: ddd,        // ✅ DDD separado
  phonenumber: number, // ✅ Número separado
  s1_extid: globalData.external_id,
};
```

---

## 📊 **EXEMPLOS DE TRANSFORMAÇÃO:**

| **Input** | **DDD (phoneac)** | **Número (phonenumber)** |
|-----------|-------------------|---------------------------|
| `(21) 99047-8137` | `21` | `990478137` |
| `11999999999` | `11` | `999999999` |
| `+5547988776655` | `47` | `988776655` |
| `5521990478137` | `21` | `990478137` |

---

## 🧪 **DEBUG E TESTE:**

### **Console Commands:**
```javascript
// Testar diferentes formatos
DebugCheckout.testPhoneFormats();

// Simular fluxo completo
DebugCheckout.simulateModalFlow({
  name: 'João',
  email: 'joao@email.com', 
  phone: '(21) 99047-8137'
});

// Validar URL construída
DebugCheckout.validateCheckoutUrl(url);
```

### **Resultado Esperado:**
```url
https://checkout.exemplo.com?
name=João&
email=joao@email.com&
phoneac=21&
phonenumber=990478137&
s1_extid=uuid-123&
s2_fbp=fb.1.123.456&
s3_fbc=fb.1.123.789
```

---

## ✅ **STATUS:**

- ✅ **Problema identificado** - Formato de parâmetro incorreto
- ✅ **Função de parse** implementada  
- ✅ **Tipos atualizados** para phoneac + phonenumber
- ✅ **Debug tools** atualizadas
- ✅ **Teste completo** implementado

## 🎯 **RESULTADO:**

**Agora o telefone será enviado no formato correto esperado pelo checkout!** 

Os parâmetros `phoneac` e `phonenumber` serão enviados separadamente, garantindo o pré-preenchimento correto no checkout. 📞✅ 