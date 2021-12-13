export const isInputValid = (inputs) => {
  /*
   * Converte os inputs para string e verifica se estão vazios;
   * Retorna true se todos os inputs estiverem preenchidos;
   * Retorna false se um input estiver vazio.
   */

  for (let input of inputs) {
    if (input !== undefined) {
      input = input.toString();
      input = input.trim();
      if (input.length === 0) return false;
    } else return false;
  }

  return true;
};
