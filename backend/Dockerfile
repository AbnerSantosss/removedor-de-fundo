# ══════════════════════════════════════════════
#  Backend — Python FastAPI + rembg (IA)
# ══════════════════════════════════════════════
FROM python:3.11-slim

WORKDIR /app

# Instala dependências do sistema necessárias para o rembg/Pillow
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copia e instala dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código fonte
COPY . .

EXPOSE 8000

# Inicia o Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
