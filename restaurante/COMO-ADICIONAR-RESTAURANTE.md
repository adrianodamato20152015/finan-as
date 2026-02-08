# 🏪 Como Adicionar um Novo Restaurante

## Exemplo: Adicionando "Pizzaria Bella"

### 1️⃣ No Firebase Console

Acesse: Realtime Database → Adicione esta estrutura:

```json
{
  "restaurantes": {
    "espetaria_do_chefe": {
      "config": {
        "nome": "Espetaria do Chefe",
        "logo": "🍖",
        "corPrimaria": "#8B4513",
        "corSecundaria": "#D2691E"
      },
      "usuarios": {
        "admin": {
          "nome": "Administrador",
          "perfil": "gerente",
          "senha": "123456"
        }
      }
    },
    "pizzaria_bella": {
      "config": {
        "nome": "Pizzaria Bella",
        "logo": "🍕",
        "corPrimaria": "#E74C3C",
        "corSecundaria": "#F39C12"
      },
      "usuarios": {
        "mario": {
          "nome": "Mario Pizzaiolo",
          "perfil": "gerente",
          "senha": "pizza123"
        }
      }
    },
    "burger_king": {
      "config": {
        "nome": "Burger King Centro",
        "logo": "🍔",
        "corPrimaria": "#D62300",
        "corSecundaria": "#F5A623"
      },
      "usuarios": {
        "gerente": {
          "nome": "Gerente BK",
          "perfil": "gerente",
          "senha": "bk2026"
        }
      }
    }
  }
}
```

### 2️⃣ URLs de Acesso

Cada restaurante acessa seu próprio sistema pela URL:

**Espetaria do Chefe:**
```
URL: seu-app.com?rest=espetaria_do_chefe
Login: admin
Senha: 123456
Cores: Marrom/Chocolate 🍖
```

**Pizzaria Bella:**
```
URL: seu-app.com?rest=pizzaria_bella
Login: mario
Senha: pizza123
Cores: Vermelho/Laranja 🍕
```

**Burger King Centro:**
```
URL: seu-app.com?rest=burger_king
Login: gerente
Senha: bk2026
Cores: Vermelho BK/Dourado 🍔
```

### 3️⃣ Personalização Automática

Quando o cliente acessa a URL dele:
- ✅ Logo muda automaticamente
- ✅ Nome do restaurante aparece
- ✅ Cores do tema mudam
- ✅ Só vê os dados dele

### 4️⃣ Script para Adicionar Restaurante Rapidamente

Você pode usar este código no console do Firebase para adicionar um restaurante:

```javascript
// Substitua os valores
const novoRestaurante = {
  config: {
    nome: "Nome do Restaurante",
    logo: "🍽️",
    corPrimaria: "#FF5733",
    corSecundaria: "#C70039"
  },
  usuarios: {
    admin: {
      nome: "Administrador",
      perfil: "gerente",
      senha: "senha123"
    }
  }
};

// Cole no console do Firebase:
firebase.database().ref('restaurantes/id_do_restaurante').set(novoRestaurante);
```

### 5️⃣ Checklist ao Adicionar Cliente

- [ ] Definir ID único do restaurante (ex: `pizzaria_bella`)
- [ ] Adicionar nó no Firebase em `restaurantes/{id}`
- [ ] Configurar: nome, logo, cores
- [ ] Criar usuário gerente inicial
- [ ] Testar URL: `?rest={id}`
- [ ] Enviar credenciais ao cliente
- [ ] Cobrar taxa de setup! 💰

### 6️⃣ Sugestões de IDs

Use IDs simples e descritivos:
- ✅ `pizzaria_bella`
- ✅ `espetaria_do_chefe`
- ✅ `burger_king_centro`
- ✅ `restaurante_japones_liberdade`

Evite:
- ❌ Espaços: `pizzaria bella`
- ❌ Acentos: `pizzaria_belíssima`
- ❌ Caracteres especiais: `pizzaria@bella`

### 7️⃣ Ícones/Logos Disponíveis

Copie e cole no campo `logo`:

```
🍖 Churrascaria/Espetaria
🍕 Pizzaria
🍔 Hamburgueria
🍜 Restaurante Asiático
🍝 Italiana
🍱 Japonês
🌮 Mexicano
🥗 Saudável
🍰 Confeitaria
☕ Café
🍺 Bar
🍽️ Genérico
```

### 8️⃣ Paletas de Cores Sugeridas

```css
/* Churrascaria */
corPrimaria: "#8B4513" (marrom)
corSecundaria: "#D2691E" (chocolate)

/* Pizzaria */
corPrimaria: "#E74C3C" (vermelho)
corSecundaria: "#F39C12" (laranja)

/* Burger */
corPrimaria: "#D62300" (vermelho escuro)
corSecundaria: "#F5A623" (dourado)

/* Asiático */
corPrimaria: "#C0392B" (vermelho)
corSecundaria: "#F39C12" (dourado)

/* Saudável */
corPrimaria: "#27AE60" (verde)
corSecundaria: "#2ECC71" (verde claro)

/* Mexicano */
corPrimaria: "#E67E22" (laranja)
corSecundaria: "#F39C12" (amarelo)

/* Confeitaria */
corPrimaria: "#E91E63" (rosa)
corSecundaria: "#FF6F91" (rosa claro)

/* Bar */
corPrimaria: "#2C3E50" (azul escuro)
corSecundaria: "#34495E" (cinza azulado)
```

---

## 🚀 Pronto!

Agora você pode adicionar quantos restaurantes quiser no mesmo Firebase, cada um com sua própria identidade visual! 🎨
