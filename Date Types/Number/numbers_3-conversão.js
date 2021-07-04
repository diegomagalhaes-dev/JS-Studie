/*
    ==== EXECUTAR TODOS OS COMANDOS NO CONSOLE DO NODE
*/

// Por meio da invocação da função Number
new Number("10");
Number("10");
Number("9.9");
Number("0xFF");
Number("0b10");
Number("0o10");
Number("0o10");
Number();
Number("JavaScript");

// Por meio dos operadores numéricos
~~"10";
+"10";
"10" - 0;
"10" * 1;
"10" / 1;

// toString (o método toString de um número permite converte-lo para qualquer sistema de numeração, bastando indicar qual a base desejada)
(0xA).toString(10);
(0b1010).toString(16);
(010).toString(2);
(10).toString(8);

// parseInt 
parseInt("10", 10);
parseInt("9.9", 10);
parseInt("A", 16);
parseInt("11", 2);
parseInt("010", 8);

// parseFloat
parseFloat("10");
parseFloat("2.5");
parseFloat("0xFF");
parseFloat("0b10");