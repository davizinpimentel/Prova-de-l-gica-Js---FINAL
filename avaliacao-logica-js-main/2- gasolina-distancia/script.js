function calcular(){
    let distancia = document.getElementById("distancia").value;
    let consumo = document.getElementById("consumo").value;
    let preco = document.getElementById("preco").value;
    let passageiros = document.getElementById("passageiros").value;

    let gasolinaNecessaria = parseFloat(distancia) / parseFloat(consumo);

    let custoTotal = gasolinaNecessaria * parseFloat(preco);

    let custoPessoa = custoTotal / parseInt(passageiros);

    document.getElementById("resultado_gasolina_litros").innerText = gasolinaNecessaria.toFixed(1);

    document.getElementById("resultado_custo").innerText = custoTotal.toFixed(1);

    document.getElementById("resultado_custo_pessoa").innerText = custoPessoa.toFixed(1);
}