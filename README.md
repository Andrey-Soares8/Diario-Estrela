# 🌟 Diário Estrelado

Diário Estrelado é uma aplicação web interativa onde você pode registrar seus sentimentos e vê-los representados como estrelas em um fundo estrelado.

## 📁 Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

```
index.html
script.js
styles.css
.vscode/
    launch.json
```

### 📄 Arquivos

- `index.html`: Estrutura principal da página web.
- `script.js`: Lógica JavaScript para manipulação de elementos e armazenamento de sentimentos.
- `styles.css`: Estilos CSS para a aparência da página.
- `.vscode/launch.json`: Configuração para depuração no Visual Studio Code.

## ✨ Funcionalidades

- **Adicionar Sentimento**: Permite ao usuário adicionar um sentimento que será representado como uma estrela na tela.
- **Tooltip**: Ao passar o mouse sobre uma estrela, uma tooltip aparece mostrando o sentimento associado.
- **Modal**: Ao clicar em uma estrela, um modal aparece mostrando detalhes do sentimento.
- **Armazenamento Local**: Sentimentos são salvos no `localStorage` para persistência entre sessões.

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Escreva seu sentimento na área de texto e clique no botão "Adicionar Sentimento".
3. Veja a estrela aparecer no fundo estrelado.
4. Passe o mouse sobre a estrela para ver o sentimento em uma tooltip.
5. Clique na estrela para ver detalhes do sentimento em um modal.

## 🛠️ Configuração de Desenvolvimento

### Requisitos

- Visual Studio Code
- Extensão do Chrome para depuração

### Instruções

1. Clone o repositório.
2. Abra o projeto no Visual Studio Code.
3. Use a configuração de depuração fornecida em `.vscode/launch.json` para iniciar o Chrome e depurar a aplicação.

## 🎨 Estilos

Os estilos são definidos no arquivo `styles.css` e incluem:

- **Layout Responsivo**: A página é responsiva e se adapta a diferentes tamanhos de tela.
- **Animações**: Estrelas e tooltips possuem animações suaves para uma melhor experiência do usuário.
- **Temas**: Fundo estrelado com gradiente e elementos estilizados para uma aparência moderna.

## 📜 Scripts

O arquivo `script.js` contém a lógica para:

- **Adicionar e Posicionar Estrelas**: Funções para criar e posicionar estrelas aleatoriamente na tela.
- **Mostrar e Esconder Tooltips**: Funções para exibir tooltips ao passar o mouse sobre as estrelas.
- **Abrir e Fechar Modal**: Funções para abrir e fechar o modal com detalhes do sentimento.
- **Armazenamento Local**: Funções para salvar e carregar sentimentos do `localStorage`.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
