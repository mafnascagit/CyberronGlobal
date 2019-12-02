#! /bin/bash 

echo "Working!" 

cd cyberron-official
npm run build 

cd .. 

cp cyberron-official/build/* build/
cp cyberron-official/build/static/* build/

git add . 
git commit -m "updating production environment"
git push 

echo "All built for production"