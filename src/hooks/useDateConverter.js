export default function (date) {
  const dateConverted = new Date(date).toLocaleDateString("pt-BR");
  return dateConverted;
}
