@echo off
title Invoice Studio Server
cd /d "%~dp0"
echo Starting Invoice Builder Studio...
start "" "http://localhost:3000"
node server.js
pause