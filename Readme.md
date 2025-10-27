STEP1: mkdir backend and mkdir frontend
STEP2: cd backend
STEP3: npm init -y
STEP4: npm i express nodemon cors
STEP5: npm run dev (add dev script in package.json "dev":"nodemon index.js")

npm install prisma --save-dev
npx prisma init --datasource-provider postgresql --output ../generated/prisma
npx prisma generate
npx prisma db push
npm cache clean --force
