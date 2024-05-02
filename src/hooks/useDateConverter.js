import dayjs from "dayjs";

export default function (date) {
  const dateConverted = dayjs(date).format("DD/MM/YYYY");
  return dateConverted;
}
