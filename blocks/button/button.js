export default function decorate(block) {
  console.error("Decorating button block");
  const button = block.querySelector("button");
  if (button) {
    button.classList.add("custom-button");
  }
}
