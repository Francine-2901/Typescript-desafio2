// Desadio 2 - Como podemos melhorar o esse código usando TS? 

import { NotEmittedStatement } from "typescript";

enum Profissoes {
    Atriz,
    padeiro
}

type pessoa = {
    nome: string,
    idade: number,
    profissao: Profissoes,
}

let pessoa1: pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissoes.Atriz,
};

let pessoa2: pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissoes.padeiro
};

let pessoa3: pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz,
};

let pessoa4: pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.padeiro
}