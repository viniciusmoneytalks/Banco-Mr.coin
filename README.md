import zipfile
from pathlib import Path

# Estrutura mínima de arquivos para o site Banco Mr.Coin com base nas especificações.
site_structure = {
    "index.html": """
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Banco Mr.Coin</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Banco Mr.Coin</h1>
    <nav>
      <a href="investimentos.html" class="botao-investimentos">Investimentos</a>
    </nav>
  </header>
  <main>
    <p id="saudacao"></p>
    <p>Saldo: <span id="saldo">0</span> Mr.Coin</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
""",
    "investimentos.html": """
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Investimentos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <a href="index.html" class="voltar">← Voltar</a>
    <h1>Página de Investimentos</h1>
  </header>
  <main>
    <p>Saldo investido: <span id="saldo-investido">0</span> Mr.Coin</p>
    <p>Renda mensal: <span id="renda">0</span> Mr.Coin</p>
  </main>
  <script src="investimentos.js"></script>
</body>
</html>
""",
    "style.css": """
body {
  font-family: Arial, sans-serif;
  background-color: #111;
  color: gold;
  padding: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.botao-investimentos, .voltar {
  text-decoration: none;
  background-color: gold;
  color: black;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
}
""",
    "script.js": """
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
  return valor.toFixed(1).replace(/\\.0$/, "") + unidades[i];
}
""",
    "investimentos.js": """
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
  return valor.toFixed(1).replace(/\\.0$/, "") + unidades[i];
}
"""
}

# Caminho para salvar o arquivo zip
zip_filename = "/mnt/data/Banco_MrCoin_Atualizado.zip"

# Criar os arquivos temporariamente e adicionar ao zip
with zipfile.ZipFile(zip_filename, 'w') as zipf:
    for filename, content in site_structure.items():
        filepath = Path(f"/mnt/data/{filename}")
        filepath.write_text(content.strip(), encoding="utf-8")
        zipf.write(filepath, arcname=filename)

zip_filename
