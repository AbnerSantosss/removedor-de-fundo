<h1 align="center">
  <img src="imagens do projeto/logo.png" alt="Removedor de Fundo IA Logo" width="200"/>
  <br>
  Removedor de Fundo IA (SaaS Premium)
</h1>

<p align="center">
  <b>Precisão de estúdio em segundos. 100% automático e gratuito.</b>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-recursos-e-tecnologias">Recursos</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-desenvolvedor">Desenvolvedor</a>
</p>

---

## 💡 Sobre o Projeto

O **Removedor de Fundo IA** é uma ferramenta de ponta desenvolvida para democratizar a edição de imagens. Esqueça laços e *"pen tools"*; com a nossa plataforma, a remoção do fundo de suas fotos vira um processo de literalmente um clique. 

A ferramenta extrai o objeto principal perfeitamente em questão de segundos e entrega a sua imagem em alta resolução com o fundo transparente (`PNG`), pronta para e-commerce, criação de artes ou mídias sociais. 

E o melhor de tudo? É **100% gratuito, sem limites diários ou marca d'água.**

### Demonstração de Uso:
> *Dica: Você pode colocar um GIF ou Print do site rodando aqui dentro da pasta `imagens do projeto/tela-app.png` e descomentar a linha abaixo!*
<p align="center">
  <!-- <img src="imagens do projeto/tela-app.png" alt="Tela do Sistema" width="80%"/> -->
  <i>Uma experiência Cyberpunk de alto desempenho.</i>
</p>

---

## ⚡ Recursos e Tecnologias

O projeto utiliza o que há de mais moderno em desenvolvimento web e inteligência artificial para entregar um serviço super-rápido rodando localmente (resguardando toda sua privacidade).

### Front-End (Interface Gráfica)
*   **React + Vite:** Motor front-end focado em velocidade extrema.
*   **Tailwind CSS (Neon/Cyberpunk):** Estilização totalmente responsiva e inspirada em layouts de painéis super avançados *(Glassmorphism e brilhos animados)*.
*   **Framer Motion:** Animações interativas e progressivas para enriquecer a experiência de usuário.
*   **React-Dropzone:** Sistema intuitivo de *arrastar e soltar* as imagens.

### Back-End (Modelos de I.A)
*   **FastAPI:** Framework em Python altamente focado em processamento veloz.
*   **RembG (birefnet-general):** A verdadeira inteligência por trás: utiliza Redes Neurais convolucionais estado-da-arte para extração perfeita de silhuetas, preservando folhagens, cabelos e texturas difíceis.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
*   [Node.js](https://nodejs.org/) (Para rodar o Servidor Front-end)
*   [Python 3.10+](https://www.python.org/) (Para a I.A rodar no Back-end)

### 1. Preparando a Inteligência Artificial (Backend)
```bash
# Navegue até a pasta do backend
cd backend

# Ative seu ambiente virtual (ou crie um se não existir)
python -m venv venv
venv\Scripts\activate  # (Windows)
# source venv/bin/activate (Mac/Linux)

# Instale os requisitos
pip install -r requirements.txt

# Inicie o Servidor Python FastAPI!
uvicorn main:app --reload
```
*O Backend ficará online no endereço `http://127.0.0.1:8000`*

### 2. Rodando o Interface do Usuário (Frontend)
Em um **novo terminal**, abra a raiz do projeto e siga:

```bash
# Navegue até a pasta frontend
cd frontend

# Instale os pacotes visuais e bibliotecas
npm install

# Inicie a interface de desenvolvimento
npm run dev
```
*O Aplicativo abrirá no seu navegador, usualmente no endereço `http://localhost:5173` ou `5174`*

---

## 👨‍💻 Desenvolvedor

<p align="left">
  <img src="imagens do projeto/abner-developer.png" alt="Abner Henrique - Foto" width="150" style="border-radius: 20px; border: 2px solid #00FFFF; margin-right: 20px;" align="left" />
  <br>
  <b>Abner Henrique</b>
  <br>
  <i>Desenvolvedor & Apaixonado por Programação</i>
  <br><br>
  O desenvolvimento deste projeto une duas paixões centrais na vida do Abner: arquitetura limpa de software e Inteligência Artificial acessível. O Removedor de Fundo IA nasceu da necessidade de mostrar que produtos de alto valor agregado e design "enterprise" não precisam estar presos atrás de muros pagos e licenças caras, se tiverem a programação certa e a paixão certa por trás deles.
  <br><br>
  Siga os trabalhos do Abner nas redes para não perder nenhuma novidade no mundo da programação!
  <br><br>
  <a href="https://www.linkedin.com/in/abnersantoss/?skipRedirect=true" target="_blank">LinkedIn</a> • 
  <a href="https://github.com/AbnerSantosss" target="_blank">GitHub</a>
</p>

<br clear="left"/>

---

<p align="center">
Feito com dedicação 💻 por Abner Henrique.
</p>
