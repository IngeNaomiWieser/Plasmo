export const config = {
  matches: ["https://www.google.com/*"]
}

console.log("👋 Plasmo content script loaded on Google!")

const mount = () => {
  const button = document.createElement("button")
  button.textContent = "Click Me Please"
  button.style.position = "fixed"
  button.style.top = "20px"
  button.style.right = "20px"
  button.style.zIndex = "10000"
  button.style.padding = "10px 20px"
  button.style.background = "#4285f4"
  button.style.color = "white"
  button.style.border = "none"
  button.style.borderRadius = "4px"
  button.style.cursor = "pointer"

  button.onclick = () => {
    alert("Plasmo proudly presents: A BUTTON!")
  }
  document.body.appendChild(button)
}

// Export a default function so Plasmo runs it
export default mount
