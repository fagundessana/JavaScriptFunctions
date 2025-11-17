// EXERCÍCIO 1: Verificador de Idade para Habilitação
        function podeDirigir(idade) {
            if (idade >= 18) {
                return "Pode ser habilitado(a)";
            } else {
                return "Ainda não pode";
            }
        }

        function testarEx1() {
            const idade = parseInt(document.getElementById('idade').value);
            const resultado = document.getElementById('result1');
            
            if (isNaN(idade)) {
                mostrarResultado(resultado, "Por favor, digite uma idade válida!", "erro");
                return;
            }
            
            const resposta = podeDirigir(idade);
            mostrarResultado(resultado, resposta, "info");
        }

        // EXERCÍCIO 2: Determinar o Maior entre Três
        function encontrarMaiorEntreTres(a, b, c) {
            if (a > b && a > c) {
                return a;
            } else if (b > a && b > c) {
                return b;
            } else {
                return c;
            }
        }

        function testarEx2() {
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);
            const n3 = parseFloat(document.getElementById('num3').value);
            const resultado = document.getElementById('result2');
            
            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                mostrarResultado(resultado, "Por favor, preencha todos os números!", "erro");
                return;
            }
            
            const maior = encontrarMaiorEntreTres(n1, n2, n3);
            mostrarResultado(resultado, `O maior número é: ${maior}`, "sucesso");
        }

        // EXERCÍCIO 3: Classificador de Moedas
        function classificarMoeda(valor) {
            if (valor == 0.01) {
                return "Um Centavo";
            } else if (valor == 0.05) {
                return "Cinco Centavos";
            } else if (valor == 0.10) {
                return "Dez Centavos";
            } else if (valor == 0.25) {
                return "Vinte e Cinco Centavos";
            } else if (valor == 0.50) {
                return "Cinquenta Centavos";
            } else if (valor == 1.00) {
                return "Um Real";
            } else {
                return "Valor Desconhecido";
            }
        }

        function testarEx3() {
            const moeda = parseFloat(document.getElementById('moeda').value);
            const resultado = document.getElementById('result3');
            
            if (isNaN(moeda)) {
                mostrarResultado(resultado, "Por favor, selecione uma moeda!", "erro");
                return;
            }
            
            const classificacao = classificarMoeda(moeda);
            mostrarResultado(resultado, classificacao, "info");
        }

        // EXERCÍCIO 4: Verificador de Senha
        function senhaForte(senha) {
            if (senha.length >= 8 && senha !== "12345678") {
                return true;
            } else {
                return false;
            }
        }

        function testarEx4() {
            const senha = document.getElementById('senha').value;
            const resultado = document.getElementById('result4');
            
            if (senhaForte(senha)) {
                mostrarResultado(resultado, "✓ Senha forte!", "sucesso");
            } else {
                mostrarResultado(resultado, "✗ Senha fraca! Precisa ter mais de 8 caracteres e não pode ser '12345678'", "erro");
            }
        }

        // EXERCÍCIO 5: Alerta de Temperatura
        function checarTemperatura(temp) {
            if (temp < 10) {
                return "Alerta de Frio";
            } else if (temp >= 10 && temp <= 25) {
                return "Temperatura Ideal";
            } else {
                return "Alerta de Calor";
            }
        }

        function testarEx5() {
            const temp = parseFloat(document.getElementById('temp').value);
            const resultado = document.getElementById('result5');
            
            if (isNaN(temp)) {
                mostrarResultado(resultado, "Por favor, digite uma temperatura válida!", "erro");
                return;
            }
            
            const alerta = checarTemperatura(temp);
            mostrarResultado(resultado, alerta, "info");
        }

        // EXERCÍCIO 6: Classificador de Dia da Semana
        function nomeDoDia(numero) {
            switch(numero) {
                case 1:
                    return "Domingo";
                case 2:
                    return "Segunda";
                case 3:
                    return "Terça";
                case 4:
                    return "Quarta";
                case 5:
                    return "Quinta";
                case 6:
                    return "Sexta";
                case 7:
                    return "Sábado";
                default:
                    return "Número inválido! Use de 1 a 7";
            }
        }

        function testarEx6() {
            const dia = parseInt(document.getElementById('dia').value);
            const resultado = document.getElementById('result6');
            
            const nomeDia = nomeDoDia(dia);
            mostrarResultado(resultado, nomeDia, "info");
        }

        // EXERCÍCIO 7: Tipo de Triângulo
        function tipoTriangulo(L1, L2, L3) {
            if (L1 == L2 && L2 == L3) {
                return "Equilátero";
            } else if (L1 == L2 || L1 == L3 || L2 == L3) {
                return "Isósceles";
            } else {
                return "Escaleno";
            }
        }

        function testarEx7() {
            const l1 = parseFloat(document.getElementById('lado1').value);
            const l2 = parseFloat(document.getElementById('lado2').value);
            const l3 = parseFloat(document.getElementById('lado3').value);
            const resultado = document.getElementById('result7');
            
            if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
                mostrarResultado(resultado, "Por favor, preencha todos os lados!", "erro");
                return;
            }
            
            const tipo = tipoTriangulo(l1, l2, l3);
            mostrarResultado(resultado, `Triângulo ${tipo}`, "sucesso");
        }

        // EXERCÍCIO 8: Gerador de Nome Completo
        function gerarNomeCompleto(obj) {
            return obj.primeiroNome + " " + obj.sobrenome;
        }

        function testarEx8() {
            const primeiro = document.getElementById('primeiroNome').value;
            const sobre = document.getElementById('sobrenome').value;
            const resultado = document.getElementById('result8');
            
            if (!primeiro || !sobre) {
                mostrarResultado(resultado, "Por favor, preencha nome e sobrenome!", "erro");
                return;
            }
            
            const nomeCompleto = gerarNomeCompleto({
                primeiroNome: primeiro,
                sobrenome: sobre
            });
            mostrarResultado(resultado, `Nome completo: ${nomeCompleto}`, "sucesso");
        }

        // EXERCÍCIO 9: Calculadora de Média
        function calcularMediaSimples(N1, N2) {
            const media = (N1 + N2) / 2;
            if (media >= 7) {
                return `Aprovado (Média: ${media.toFixed(1)})`;
            } else {
                return `Reprovado (Média: ${media.toFixed(1)})`;
            }
        }

        function testarEx9() {
            const n1 = parseFloat(document.getElementById('nota1').value);
            const n2 = parseFloat(document.getElementById('nota2').value);
            const resultado = document.getElementById('result9');
            
            if (isNaN(n1) || isNaN(n2)) {
                mostrarResultado(resultado, "Por favor, preencha ambas as notas!", "erro");
                return;
            }
            
            const resultadoFinal = calcularMediaSimples(n1, n2);
            const tipo = resultadoFinal.includes("Aprovado") ? "sucesso" : "erro";
            mostrarResultado(resultado, resultadoFinal, tipo);
        }

        // EXERCÍCIO 10: Formatação de Telefone
        function formatarTelefone(numero) {
            const parte1 = numero.slice(0, 5);
            const parte2 = numero.slice(5, 9);
            return parte1 + "-" + parte2;
        }

        function testarEx10() {
            const tel = document.getElementById('telefone').value;
            const resultado = document.getElementById('result10');
            
            if (tel.length !== 9) {
                mostrarResultado(resultado, "O telefone deve ter exatamente 9 dígitos!", "erro");
                return;
            }
            
            const telFormatado = formatarTelefone(tel);
            mostrarResultado(resultado, `Telefone formatado: ${telFormatado}`, "sucesso");
        }

        // Função auxiliar para mostrar resultados
        function mostrarResultado(elemento, mensagem, tipo) {
            elemento.textContent = mensagem;
            elemento.className = `resultado ${tipo}`;
            elemento.style.display = 'block';
        }
