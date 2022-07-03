"use strict";
// Desadio 2 - Como podemos melhorar o esse código usando TS? 
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["padeiro"] = 1] = "padeiro";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissoes.Atriz,
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissoes.padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz,
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.padeiro
};
