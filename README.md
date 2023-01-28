# INJOLOCA

- [INJOLOCA](#injoloca)
  - [Para que serve?](#para-que-serve)
  - [Como instalar?](#como-instalar)
  - [Como usar?](#como-usar)
  - [Quais modalidades são suportadas?](#quais-modalidades-são-suportadas)
  - [Por que o nome INJOLOCA?](#por-que-o-nome-injoloca)
  - [Como posso contribuir com o projeto?](#como-posso-contribuir-com-o-projeto)
  - [Não conheço o Cologa. Do que se trata, onde posso baixá-lo?](#não-conheço-o-cologa-do-que-se-trata-onde-posso-baixá-lo)
  - [Changelog](#changelog)
    - [Versão 2.0](#versão-20)
  - [Issues](#issues)
  - [TODO](#todo)

## Para que serve?
Extensão para navegadores modernos que tem como objetivo auxiliar no preenchimento de apostas no site [Loterias Online](https://www.loteriasonline.caixa.gov.br/) da Caixa Econômica Federal (CEF).

## Como instalar?


## Como usar?
1. Abra o INJOLOCA.
2. Escolha a modalidade
3. Escolha quantos números deseja jogar.
4. Se desejar Teimosinhas, escolha a quantidade a ser acrescida.
5. Caso a modalidade seja a Lotomania e deseje apostas espelho, marque a caixa correspondente.
6. Insira os jogos diretamente do Cologa ou outra ferramenta que preferir. O formato deve seguir os padrões do Cologa.
7. Para aprender mais, veja o [vídeo](https://youtu.be/CbIE_54CLww) no canal de YouTube do Software Cologa.

## Quais modalidades são suportadas?
Todas as modalidades de Loterias da CEF são suportadas, inclusive os concursos especias (Mega da Virada, etc.). Entretanto, não há garantia de funcionamento para sempre, dada a possibilidade de mudanças no site [Loterias Online](https://www.loteriasonline.caixa.gov.br/), o qual não tem qualquer vínculo com este script.

## Por que o nome INJOLOCA?
Trata-se de um acrônimo, que significa: INsere JOgos no LOterias da CAixa.

## Como posso contribuir com o projeto?
Se você encontrar um *bug* ou funcionalidade quebrada, reporte um *issue* aqui no repositório do INJOLOCA.
Lembre-se que esse é um software de código aberto, oferecido como ele é, sem garantias, e, portanto, pode
ser que demore um tempo até algum desenvolvedor dar uma olhada no seu problema.

Caso tenha alguma contribuição a fazer para o projeto, seja um acréscimo de funcionalidade ou correção de erros de funcionamento, abra um *pull request* neste repositório, o qual será analisado e posteriormente publicado, caso seja considerado válido para a melhoria do software.

## Não conheço o Cologa. Do que se trata, onde posso baixá-lo?
O Cologa pode ser baixado gratuitamente [pelo site oficial](https://www.cologa.com.br/). As suas funcionalidades são extensivamente abordadas pelo autor do software no canal oficial de YouTube do [Software Cologa](https://www.youtube.com/@cologaoficial).

## Changelog

### Versão 2.0
- [Corrigido] Quantidade de números das apostas seguem as modalidades
- [Corrigido] Quantidade de Teimosinhas seguem as modalidades
- [Melhorias] Maior performance
- [Melhorias] Refatoraçõa de código: maior modularidade no código, permitindo acrescentar novas Loterias ou *features* no futuro
- [Melhorias] É possível usar números menores que 10 sem o zero à frente.
- [Melhorias] Aparência

## Issues
- Não é possível registrar mais de 20 apostas por vez.

## TODO
- [ ] Migrar para *Manifest V3*
