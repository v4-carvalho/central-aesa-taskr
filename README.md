# Central V4 · AESA e Taskr

Central de tarefas, testes, campanhas e atas dos clientes AESA e Taskr (V4 Carvalho).

- `index.html` — página da central (exportada do artefato no Claude).
- `items.json` — export dos registros do banco do artefato (vazio no momento do export, 12/11/2026).

> A página lê e grava os dados via `window.claude.use('db')`, que só existe dentro do Claude.
> Aberta fora dele (GitHub Pages, Vercel, local), ela carrega a interface mas mostra o aviso de que os dados não estão disponíveis.
