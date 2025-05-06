export function calcularMedia(avaliacoes: { nota: number }[]): number {
    if (avaliacoes.length === 0) return 0;
  
    const total = avaliacoes.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
    const media = total / avaliacoes.length;
    return media
  }