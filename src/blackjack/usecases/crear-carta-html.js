/**
 * Esta funcion crea la imagen de la carta
 * @param {String} carta
 * @returns {HTMLImageElement} Elemento HTML de retorno
 */

export const crearCartaHtml = (carta) => {
  if (!carta) throw new Error('carta es obligatorio');

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add('carta');

  return imgCarta;
};
