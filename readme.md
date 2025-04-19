# Brasil Web Utils

**Brasil Web Utils** é um compilado de funções que facilitam a criação de sites para o Brasil, que sempre precisam de algum tipo de implementação de CEP, seleção de cidades, máscaras de input, etc.

---

## 📦 Estrutura do Projeto

```
/ (raiz)
│
├── index.html           # Exemplo de uso em HTML
├── style.css            # Estilos de exemplo
├── wbu.js               # Biblioteca principal (JS)
├── wbu_state_city.json  # Script JSON com estados e cidades
└── README.md            # Documentação do projeto
```

---

## 🚀 Funcionalidades

- **Seleção de cidades por estado** (wbu_state_city)
- **Busca de endereço via CEP** (wbu_cep_finder)
- Módulo sem dependências além do `fetch` e Alpine.js opcional

---

## ⚙️ Instalação

Você pode utilizar a biblioteca de três maneiras:

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/franciskaster/brasil-web-utils.git
   ```

2. **Baixar diretamente o arquivo JS**:

   - [Baixe `wbu.js`](https://raw.githubusercontent.com/franciskaster/brasil-web-utils/main/wbu.js)

3. **Copiar apenas as partes que interessam** para seu projeto:

   - Inclusão do script JSON com estados e cidades
   - Importação e inicialização das funções no seu HTML

---

## 📄 Uso

### 1. Adicione o JSON de estados e cidades

No `<head>` do seu HTML, insira o script com o mapeamento:

```html
<script type="application/json" id="wbu_state_city_json">
  { /* ...conteúdo de wbu_state_city.json... */ }
</script>
```  

### 2. Importe `wbu.js`

Logo após o JSON ou ao final da `<body>`, importe:

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script defer src="/caminho/para/wbu.js" type="module"></script>
```  

### 3. Inicialize nos selects/inputs

```js
import { wbu_state_city, wbu_cep_finder } from './wbu.js';

wbu_state_city({
  statesId: 'estados',   // ID do select de estados
  citysId:  'cidades'    // ID do select de cidades
});

wbu_cep_finder({
  cepId:      'cep',         // ID do input de CEP
  addressId:  'address',     // ID do input de endereço
  districtId: 'district',    // ID do input de bairro (opcional)
  cityId:     'city',        // ID do input de cidade (opcional)
  stateId:    'state',       // ID do input de estado (opcional)
  isSelect:   false          // true se cidade/estado forem selects
});
```

---

## 🔧 Opções de Configuração

| Função           | Parâmetro   | Descrição                                        | Obrigatório |
|------------------|-------------|--------------------------------------------------|-------------|
| `wbu_state_city` | `statesId`  | ID do `<select>` de estados                     | Sim         |
|                  | `citysId`   | ID do `<select>` de cidades                     | Sim         |
| `wbu_cep_finder` | `cepId`     | ID do `<input>` de CEP                           | Sim         |
|                  | `addressId` | ID do `<input>` de endereço                      | Sim         |
|                  | `districtId`| ID do `<input>` de bairro                        | Não         |
|                  | `cityId`    | ID do `<input>` de cidade                        | Não         |
|                  | `stateId`   | ID do `<input>` de estado                        | Não         |
|                  | `isSelect`  | `true` se cidade/estado forem `<select>`s        | Não         |

---

## 🙌 Contribuição

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-melhora`
3. Faça commits: `git commit -m 'Adiciona...'`
4. Push: `git push origin minha-melhora`
5. Abra um Pull Request

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 📬 Contato

- GitHub: [franciskaster](https://github.com/franciskaster)

---

*Escolha a forma que preferir: clone o repositório, baixe o JS ou copie apenas o que precisa!*

