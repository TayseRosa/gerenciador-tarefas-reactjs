# 📋 Gerenciador de Tarefas em React

Este é um projeto simples de Gerenciador de Tarefas (To-Do List) desenvolvido com **React.js** e estilizado com **Tailwind CSS**. O foco do projeto é praticar os conceitos fundamentais do React, como componentes, `props`, `useState`, e renderização condicional.

## 🖼️ Visão Geral

A aplicação exibe uma lista de tarefas com botões de interação (ainda sem funcionalidades completas). O componente principal gerencia o estado das tarefas e renderiza os subcomponentes de adicionar e listar tarefas.

## 📁 Estrutura do Projeto

```
src/
│
├── App.jsx              # Componente principal
├── components/
│   ├── AddTask.jsx      # Componente para adicionar nova tarefa (em construção)
│   └── Tasks.jsx        # Componente que renderiza a lista de tarefas
└── index.css            # Estilização com Tailwind (não incluso aqui)
```

## 📦 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/) (`ChevronRightIcon`)

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-tarefas-react.git
   cd gerenciador-tarefas-react
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## 🧠 Funcionalidades

- ✅ Exibir lista de tarefas com título
- 🕒 Planejado:
  - Adicionar nova tarefa
  - Marcar tarefa como concluída
  - Remover tarefas
  - Editar título da tarefa

## ✨ Preview

![preview](https://via.placeholder.com/800x400.png?text=Preview+do+Gerenciador+de+Tarefas)

## 👨‍💻 Autor(a)

Desenvolvido por [Tayse Rosa](https://github.com/tayserosa) 🧑‍💻

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
