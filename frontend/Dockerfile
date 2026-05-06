# ══════════════════════════════════════════════
#  STAGE 1 — Build do React/Vite
# ══════════════════════════════════════════════
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm ci

# Copia o código fonte e builda
COPY . .

# API_URL vazia = chamadas relativas (/api/...) que o Nginx faz proxy para o backend
ENV VITE_API_URL=""
RUN npm run build

# ══════════════════════════════════════════════
#  STAGE 2 — Servir com Nginx (imagem leve)
# ══════════════════════════════════════════════
FROM nginx:alpine

# Remove config padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build do React para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
