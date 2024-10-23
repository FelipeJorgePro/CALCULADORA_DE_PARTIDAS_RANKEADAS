function calcularRank(vitorias, derrotas) {

    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
  
    // Determinando o nível com base nas vitórias:
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias 
   <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
  
    }
  
    // Resultado:
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
  }
  
  // Exemplo de uso:
  calcularRank(87, 36)