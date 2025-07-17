document.addEventListener("DOMContentLoaded", () => {
  const saldoInvestido = 5000000000;
  const rendimento = saldoInvestido * 0.1;
  document.getElementById("saldo-investido").textContent = formatarMrCoins(saldoInvestido);
  document.getElementById("renda").textContent = formatarMrCoins(rendimento);
});

function formatarMrCoins(valor) {
  const unidades = ["", "K", "M", "B", "T", "QAD", "QNT"];
  let i = 0;
  while (valor >= 1000 && i < unidades.length - 1) {
    valor /= 1000;
    i++;
  }
  return valor.toFixed(1).replace(/\.0$/, "") + unidades[i];
}