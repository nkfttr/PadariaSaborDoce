let vendasTotais = 0;
let vendasProdutos = { pao: 0, bolo: 0, doce: 0 };

function calcular() {
    let qtdPao = parseInt(document.getElementById("pao").value);
    let qtdBolo = parseInt(document.getElementById("bolo").value);
    let qtdDoce = parseInt(document.getElementById("doce").value);
    let pago = parseFloat(document.getElementById("pago").value);

    if (isNaN(qtdPao)) qtdPao = 0;
    if (isNaN(qtdBolo)) qtdBolo = 0;
    if (isNaN(qtdDoce)) qtdDoce = 0;

    const precoPao = 1;
    const precoBolo = 5;
    const precoDoce = 3;

    let subtotal = (qtdPao * precoPao) + (qtdBolo * precoBolo) + (qtdDoce * precoDoce);

    // Desconto por quantidade
    let desconto = 0;
    if (qtdPao + qtdBolo + qtdDoce >= 10) {
        desconto = subtotal * 0.1; // 10% de desconto
    }

    let total = subtotal - desconto;
    let troco = pago - total;
    let pontos = Math.floor(total / 5); // 1 ponto a cada R$5

    // Conversão em dólares (simples, sem API externa)
    let dolar = (total / 5).toFixed(2);

    // Atualização de vendas
    vendasTotais += total;
    vendasProdutos.pao += qtdPao;
    vendasProdutos.bolo += qtdBolo;
    vendasProdutos.doce += qtdDoce;

    // Encontrar mais vendido
    let maisVendido = Object.entries(vendasProdutos).sort((a, b) => b[1] - a[1])[0][0];
    let nome = {pao: "Pão", bolo: "Bolo", doce: "Doce"}[maisVendido];

    // Mostrar resultados
    document.getElementById("total").innerText = `Total: R$${total.toFixed(2)}`;
    document.getElementById("desconto").innerText = desconto > 0 ? `Desconto aplicado: R$${desconto.toFixed(2)}` : "Sem desconto.";
    document.getElementById("troco").innerText = `Troco: R$${troco.toFixed(2)}`;
    document.getElementById("pontos").innerText = `Pontos de fidelidade: ${pontos}`;
    document.getElementById("moeda").innerText = `💵 Equivalente em dólar: $${dolar}`;
    document.getElementById("maisVendido").innerText = nome;
    document.getElementById("vendasTotais").innerText = `R$${vendasTotais.toFixed(2)}`;
}