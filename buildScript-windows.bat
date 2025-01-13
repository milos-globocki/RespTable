@echo off

npm install
npm run build
xcopy dist\* examples\react-example\src\compiled-files-here \E \I \Y
cd examples\react-example\src\
npm install
npm start

pause
