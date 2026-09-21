#!/usr/bin/env bash

# Script para atualização automática e deploy imediato no GitHub e Vercel
set -e

echo "🚀 Iniciando atualização automática do AXÉ IA..."

# Mensagem do commit (padrão ou fornecida via argumento)
COMMIT_MSG="${1:-Update: automated site updates and improvements}"

# Verificar integridade do build antes de enviar
echo "📦 Validando o build do projeto..."
npm run build

echo "✅ Build validado com sucesso!"

# Adicionar arquivos e fazer commit
echo "📤 Sincronizando com o GitHub..."
git add .
git commit -m "$COMMIT_MSG" || echo "Nenhuma alteração pendente para commit."

# Enviar para a branch principal (main)
echo "🚀 Enviando para o repositório remoto (main)..."
git push origin main

echo "🎉 Pronto! O GitHub foi atualizado e a Vercel iniciará o deploy automaticamente!"
