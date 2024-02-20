export default function usePayedMessage(payedBoolean) {
  if (payedBoolean === true) {
    return "Efetuado";
  }
  return "Ainda não efetuado";
}
