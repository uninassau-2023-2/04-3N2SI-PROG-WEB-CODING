# 01-2M4CC-PERF-MOBILE

## Apagar diretórios desnecessários antes de enviar para o GitHub

Funciona apenas no linux:

```bash
find . -type d -name '.angular' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
find . -type d -name '.vscode' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
find . -type d -name 'android' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
find . -type d -name 'node_modules' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
find . -type d -name 'gradle' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
find . -type d -name 'resources' -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
```

Limpar sub-diretórios .git, usar com cuidado:

```bash
find . -mindepth 2 -name '.git' -type d -print0 | xargs -0 -n1 bash -c 'rm -rf "$0"'
```

## Envio final

```bash
find . -print | sort | while read filename; do touch -c -m -t $(date +%Y%m%d%H%M.%S) "$filename"; done
git add .
git commit -m "Envio final, fechando o repositório."
git push origin main
```
