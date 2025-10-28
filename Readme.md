
### STEP 1
```bash
mkdir backend && mkdir frontend
````

### STEP 2

```bash
cd backend
```

### STEP 3

```bash
npm init -y
```

### STEP 4

```bash
npm i express nodemon cors prisma
```

### STEP 5

```bash
npm install prisma --save-dev
```

### STEP 6

```bash
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

### STEP 7

```bash
npx prisma generate
```

### STEP 8

```bash
npx prisma db push
```

### STEP 9

```bash
npm i @prisma/client
```

### STEP 10 — Add dev script in `package.json`

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

### STEP 11

```bash
npm run dev
```

---

### Optional Cleanup

```bash
npm cache clean --force
```
