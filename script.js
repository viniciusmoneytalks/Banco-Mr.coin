document.addEventListener("DOMContentLoaded", () => {
  const saudacao = document.getElementById("saudacao");
  const nome = "Usuário"; // Substituir dinamicamente pelo nome real
  const hora = new Date().getHours();
  let saudacaoTexto = "Bom dia";
  if (hora >= 12 && hora < 18) saudacaoTexto = "Boa tarde";
  else if (hora >= 18) saudacaoTexto = "Boa noite";
  saudacao.textContent = `${saudacaoTexto}, ${nome}`;

  const saldo = 2750000000;
  document.getElementById("saldo").textContent = formatarMrCoins(saldo);
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