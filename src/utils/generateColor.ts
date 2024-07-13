export default function generateColor() {
  const randomNumber = Math.floor(Math.random() * 2 ** 24);
  const randomColor = randomNumber.toString(16).padStart(7, '#0');
  return randomColor;
}