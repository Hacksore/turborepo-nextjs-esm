# Turborepo + NextJS + ESM

How do you use ESM with NextJS and Turborepo?

### The problem
I want to load  `shared/utils/*` files from the nextjs `apps/web` project but currently get error saying:

```
web:dev: error - ./pages/index.tsx:2:0
web:dev: Module not found: Can't resolve 'shared/utils/user'
web:dev:   1 | // TODO: this should load from packages/shared/utils/user
web:dev: > 2 | import { getNiceNumber } from "shared/utils/user";
```