let $botoesEl = $('.botao-img');
let $b1El = $('#b1');
let $b2El = $('#b2');
let $b3El = $('#b3');
let $b4El = $('#b4');
let $logoEl = $('#logo');
let $modalEl = $('#vis-modal');
let $cabecalhoEl = $('.cabecalho-modal');
let $corpoEl = $('.corpo-modal');
let $div4El = $('#divs4');

let modalAberto = false;

function abrirModal($modalEl) {
    $modalEl.css('display', 'block');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
        modalAberto = true;
    }, 500);
}

function fecharModal($modalEl) {
    $modalEl.css('display', 'none');
    document.body.style.overflow = 'auto';
    $cabecalhoEl.empty();
    $corpoEl.empty();
    setTimeout(function () {
        modalAberto = false;
    }, 500);
}

$b1El.click(function () {
    $logoEl.empty();
    $('<img src="imagens/ceu-noite.png" class="ceu">' +
        '<div id="sol">' +
        '<img src="imagens/lua.png" class="sol">' +
        '</div>').appendTo($logoEl);

    $('header').css('background-color', '#367CE5');
    $('main').css('background-color', '#94C0FF');
    abrirModal($modalEl);
    $('<h3>Sobre mim</h3>').appendTo($cabecalhoEl);
    $('<p>Eu sou o Gabriel Damasceno, tenho 15 anos e atualmente estou no segundo ano do Curso Técnico Integrado em Informática. Venho de um contexto social desfavorecido, a periferia da divisa entre Belo Horizonte e Ribeirão das Neves. Estudei durante todo o Ensino Fundamental em uma pequena escola pública municipal de Belo Horizonte, localizada perto da minha casa.</p>').appendTo($corpoEl);
    $('<p>Desde cedo, fui instigado a me dedicar aos estudos e às atividades estimulantes intelectualmente. Sempre gostei desse caminho e não penso diferente atualmente. Na escola, fui aluno destaque e com notas excelentes durante todos os anos cursados.</p>').appendTo($corpoEl);
    $('<p>Quando tinha cerca de 8 anos de idade, descobri a existência do Cefet-MG e outras instituições federais que ofertam o Ensino Médio com curso técnico integrado.Nesse momento, decidi que esse era um dos meus objetivos, que, com muito esforço e dedicação, foi cumprido.</p>').appendTo($corpoEl);
    $('<p>Já no final do oitavo ano do Ensino Fundamental, comecei a estudar e me informar sobre os vestibulares dessas instituições. Passei o ano seguinte inteiro me preparando, sem folga ou desistência. No final de 2022, obtive o resultado desejado, fui aprovado em primeira chamada nos cursos mais disputados do Cefet-MG e do Coltec da UFMG, Informática e Desenvolvimento de Sistemas, respectivamente.</p>').appendTo($corpoEl);
    $('<p>Com o sonho realizado, comecei minha jornada nesta instituição. Ao longo do primeiro ano, obtive ótimos resultados. Notas acima da média em todas as matérias, além de ser o primeiro classificado no processo seletivo para um projeto de Iniciação Científica e, como bônus, cito que tive um desempenho de 99 pontos na disciplina de Laboratório de Programação Web, esta, que é essencial para a participação neste Projeto de Extensão.</p>').appendTo($corpoEl);
    $('<p>Somado ao fato de eu ser pobre e periférico, ainda tenho que enfrentar mais desafios e preconceitos, por ser um garoto transgênero, parte da comunidade LGBT. Eu estou às margens da sociedade e tenho plena consciência disto. Contudo, também sei que oportunidades como esta podem ajudar a tirar a mim e pessoas como eu de uma situação de invisibilidade social. Nos dando a possibilidade de construir um futuro melhor e longe das estatísticas que vemos na televisão.</p>').appendTo($corpoEl);
    $('<p>Por esses e outros motivos, acredito que eu sou a pessoa correta para participar deste projeto.</p>').appendTo($corpoEl);
});

$b2El.click(function () {
    $logoEl.empty();
    $('<img src="imagens/ceu-noite.png" class="ceu">' +
        '<div id="sol">' +
        '<img src="imagens/lua.png" class="sol">' +
        '</div>').appendTo($logoEl);

    $('header').css('background-color', '#367CE5');
    $('main').css('background-color', '#94C0FF');
    abrirModal($modalEl);
    $('<h3 class="participar">Por que quero participar?</h3>').appendTo($cabecalhoEl);
    $('<p class="participar">Eu quero participar deste projeto de extensão, pois desejo seguir atuando, profissionalmente, na área de Desenvolvimento de Sistemas após o fim do curso técnico. Esta seria uma experiência fenomenal para adicionar ao meu currículo, ainda mais em um começo de carreira.</p>').appendTo($corpoEl);
    $('<p class="participar">Acrescento que, de todas as subáreas da Informática, o Desenvolvimento Web é o que mais me fascina, além de estar ligado à minha melhor performance e mais veloz desenvolvimento.</p>').appendTo($corpoEl);
    $('<p class="participar">Cito também que, com esta oportunidade, poderia aprimorar meu desempenho escolar em todas as disciplinas técnicas. Pois, adiquiriria mais conhecimento e “molejo” nessa área, frisando que comecei do zero no início do curso. Ao apresentar esse fato, já se pode ser percebida a minha facilidade de aprendizado em qual seja o campo escolhido, coisa que agilizaria todo o processo e faria com que todos os resultados estivessem dentro ou acima do esperado.</p>').appendTo($corpoEl);
});

$b3El.click(function () {
    $logoEl.empty();
    $('<img src="imagens/ceu-noite.png" class="ceu">' +
        '<div id="sol">' +
        '<img src="imagens/lua.png" class="sol">' +
        '</div>').appendTo($logoEl);

    $('header').css('background-color', '#367CE5');
    $('main').css('background-color', '#94C0FF');
    abrirModal($modalEl);
    $('<h3 class="escolher">Por que me escolher?</h3>').appendTo($cabecalhoEl);
    $('<p class="escolher">Acredito que eu deva ser escolhido para participar deste Projeto de Extensão, pois serei produtivo, comprometido e aprenderei rapidamente. Como dito anteriormente, tenho uma capacidade excepcional de aprender coisas novas, característica que faz com que eu me destaque facilmente nos projetos em que trabalho. Sou extremamente pontual, dedicado e focado em tudo que que assumo compromisso, então é certo que, se selecionado, não vou decepcionar, tampouco atrasar  os deveres. Individualmente, sempre consigo atingir ou superar as expectativas e creio que, trabalhando em equipe com os colegas, não será diferente nesta extensão.</p>').appendTo($corpoEl);
    $('<p class="escolher">Vale ressaltar que, apesar de ser uma pessoa de Exatas, tenho potencial, também, em outras áreas, como a escrita e as artes, afinal, todos os desenhos e o design deste site foram feitos e idealizados exclusivamente por mim.</p>').appendTo($corpoEl);
    $('<p class="escolher">Durante as férias, realizei um curso intensivo de Python pelo YouTube, com certificado, mesmo antes de estar ciente desta oportunidade. Acredito que as habilidades adquiridas serão úteis.</p>').appendTo($corpoEl);
    $('<p class="escolher">Para encerrar, gostaria de dizer que pessoas como eu e que vêm do mesmo lugar, fazem toda a diferença e pluralidade em ambientes como esse. Que, geralmente, são marcados por estereótipos e preconceitos.</p>').appendTo($corpoEl);
    $('<p class="escolher">Portanto, além de agregar nas atividades, poderei trazer diversidade para este projeto.</p>').appendTo($corpoEl);
});

$b4El.click(function () {
    $logoEl.empty();
    $('<img src="imagens/ceu-noite.png" class="ceu">' +
        '<div id="sol">' +
        '<img src="imagens/lua.png" class="sol">' +
        '</div>').appendTo($logoEl);

    $('header').css('background-color', '#367CE5');
    $('main').css('background-color', '#94C0FF');
    abrirModal($modalEl);
    $('<h3 class="expectativa">Minhas expectativas</h3>').appendTo($cabecalhoEl);
    $('<ul><li class="expectativa" id="primeiro">Minhas expectativas ao participar deste Projeto de Extensão são:</li>').appendTo($corpoEl);
    $('<li class="expectativa">adquirir uma ótima experiência para iniciar a minha vida profissional;</li>').appendTo($corpoEl);
    $('<li class="expectativa">complementar e tornar mais atraente minha jornada acadêmica;</li>').appendTo($corpoEl);
    $('<li class="expectativa">me divertir, pois adoro trabalhar em projetos e aprender coisas novas;</li>').appendTo($corpoEl);
    $('<li class="expectativa">aprender muitas coisas relativas ao desenvolvimento de softwares;</li>').appendTo($corpoEl);
    $('<li class="expectativa">ampliar minhas habilidades sociais, trabalhando em equipe;</li>').appendTo($corpoEl);
    $('<li class="expectativa">fazer conexões e parcerias que podem durar além das atividades,</li>').appendTo($corpoEl);
    $('<li class="expectativa">me tornar cada vez mais ágil e bem articulado ao programar e</li>').appendTo($corpoEl);
    $('<li class="expectativa">por último, mas não menos importante, quero fazer a diferença, representar e construir um futuro melhor.</li></ul>').appendTo($corpoEl);
});

$('.cabecalho-modal-fechar').click(function () {
    $logoEl.empty();
    $('<img src="imagens/ceu.png" class="ceu">' +
        '<div id="sol">' +
        '<img src="imagens/sol.png" class="sol">' +
        '</div>').appendTo($logoEl);
    $('header').css('background-color', '#FFC851');
    $('main').css('background-color', '#FFEBC0');
    fecharModal($modalEl);
});

$("main").click(function () {
    if (modalAberto) {
        $logoEl.empty();
        $('<img src="imagens/ceu.png" class="ceu">' +
            '<div id="sol">' +
            '<img src="imagens/sol.png" class="sol">' +
            '</div>').appendTo($logoEl);
        $('header').css('background-color', '#FFC851');
        $('main').css('background-color', '#FFEBC0');
        fecharModal($modalEl);
    }
});

$("header").click(function () {
    if (modalAberto) {
        $logoEl.empty();
        $('<img src="imagens/ceu.png" class="ceu">' +
            '<div id="sol">' +
            '<img src="imagens/sol.png" class="sol">' +
            '</div>').appendTo($logoEl);
        $('header').css('background-color', '#FFC851');
        $('main').css('background-color', '#FFEBC0');
        fecharModal($modalEl);
    }
});