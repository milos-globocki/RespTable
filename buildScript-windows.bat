@echo off

CALL npm install
CALL npm run build
CALL xcopy dist\* examples\react-example\src\compiled-files-here /E /I /Y
CALL cd examples\react-example\src\
CALL npm install
CALL npm start
CALL cd ..\..\..

pause