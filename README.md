# Re.Trip 

## 📦 Guide Commits

| Emoji  | Gitmoji        | Tipo de Commit   | Descrição                     |
|--------|----------------|------------------|-------------------------------|
| ✨     | `:sparkles:`   | `add:`           | Nova Feature                  |
| 🐛     | `:bug:`        | `fix:`           | Correção de bug               |
| ♻️     | `:recycle:`    | `refactor:`      | Refatoração de código         |
| 💄     | `:lipstick:`   | `style:`         | Ajustes de estilo             |
| 🔧     | `:wrench:`     | `function:`      | Nova Funcionalidade           |
| 🔥     | `:fire:`       | `remove:`        | Remoção de arquivos ou código |
| 📝     | `:memo:`       | `docs:`          | Documentação ou comentários   |
| 🔖     | `:bookmark:`   | `release:`       | Lançamento de versão/tag      |

## 🚀 Fluxo de Branches - GitFlow

### 🌿 Branches principais

| Branch    | Função                                                   |
|-----------|----------------------------------------------------------|
| `main`    | Recebe atualizações apenas em **lançamento** de versões. |
| `develop` | Ambiente de integração e testes. Recebe novas features. É a padrão do repositório. |
| `backup`  | Cópia de segurança da `main`. Usada em caso de perdas, atualizada em lançamento de versões da `main`.   |

---

### 🔧 Branches funcionais

`feature_*`
- Criada para novas funcionalidades.
- Base: `develop`
- Merge: `feature_*` → `develop` (após finalizada)

```bash
git checkout develop
git checkout -b feature_nome-da-feature
# ... desenvolver ...
git checkout develop
git merge feature_nome-da-feature
git branch -d feature_nome-da-feature # comando para deletar a branch
```

---

`backup`
- Após cada deploy ou versão em produção, fazer merge:
```bash
git checkout backup
git merge main
git push origin backup
```
- Para restaurar a `main`:
```bash
git checkout main
git merge backup
```

---

### ⚙️ Comandos para build
```
\frontend
npm i 
npm run dev

\backend
composer i
php -S localhost:8000 -t public
php artisan db:seeder TagSeeder
php artisan db:seeder UsuariosSeeder
```

---

### ⚙️ Libs para instalar
```
composer require flipbox/lumen-generator
```
