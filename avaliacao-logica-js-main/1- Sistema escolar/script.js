function calcular(){
    const alunos = document.getElementById("alunos").value;

    const alunosPCD = document.getElementById("alunos_pcd").value;

    const total = parseInt(alunos) + parseInt(alunosPCD);

    const percentual = ((parseInt(alunosPCD) / total) * 100).toFixed(1);

    const resultadoTotal = document.getElementById("percentual_pcd");

    resultadoTotal.innerText = `${total}`;

    percentualTotal.innerText = `${percentual}`;
}
