export const isInputValid = (inputs) => {
  /*
   * Verifica se os inputs estão vazios;
   * Retorna true se todos os inputs estiverem preenchidos;
   * Retorna false se um input estiver vazio.
   */

  const foundEmptyInput = inputs.find((input) => input.length === 0);
  if (foundEmptyInput !== undefined) return false;
  else return true;
};
