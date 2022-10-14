#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectName = process.argv[3];
const pwd = process.cwd();
const projectDir = path.resolve(pwd, projectName);

try{
    fs.mkdirSync(projectDir);

    const apiPath = path.resolve(projectDir, 'api');

    const frontendPath = path.resolve(projectDir, 'frontend');
    console.log('Copiando os arquivos do frontend...');
    fs.cpSync(path.resolve(__dirname, 'frontend'), frontendPath, {
        recursive: true
    });

    console.log('Copiando os arquivos da api...');
    fs.cpSync(path.resolve(__dirname, 'api'), apiPath, {
        recursive: true
    });

    console.log('Tudo pronto! Use o yarn install nas pastas api e frontend e depois teste o template usando yarn dev');
}catch(error){
    if(error.code == 'EEXIST'){
        console.log('Um diretório com o mesmo nome que você escolheu já existe.\n Troque o nome do projeto ou do diretório');
    }else{
        console.log('Ocorreu um erro inesperado, cheque o log:');
        console.log(error);
    }
}
