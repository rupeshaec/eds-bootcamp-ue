export default function decorate(block) {
    const button = block.querySelector("button");
    if (button) {
      button.classList.add("custom-button");
    }
  }