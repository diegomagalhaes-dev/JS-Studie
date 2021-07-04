/*
    ==== EXECUTAR TODOS OS COMANDOS NO CONSOLE DO NODE
*/

typeof true;
typeof false;

// --> Construtor
new Boolean(true);
new Boolean(false);

typeof new Boolean(true);

// --> APENAS os valores abaixo são evaluados para false (sofrem COERSÃO DE TIPO)
!!0;
!!NaN;
!!"";
!!false;
!!undefined;
!!null;

// --> Exemplos de valores true
!!-10;
!!"LeandroEspetos";
!!{};
!![];
!!/JavaScript/;
!!new Date();
!!function () { };