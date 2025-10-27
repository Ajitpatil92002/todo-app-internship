STEP1: mkdir backend and mkdir frontend  
STEP2: cd backend  
STEP3: npm init -y  
STEP4: npm i express nodemon cors

STEP5: npm install prisma --save-dev  
STEP6: npx prisma init --datasource-provider postgresql --output ../generated/prisma  
STEP7: npx prisma generate  
STEP8: npx prisma db push  
STEP9: add dev script in package.json: "dev": "nodemon index.js"  
STEP10: npm run dev
