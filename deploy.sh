#! /bin/bash 

echo "Working!" 

rm -rf build

cd cyberron-official
npm run build 

cd .. 

mv cyberron-official/build build


git add . 
git commit -m "updating production environment"
git push 

echo "All built for production"