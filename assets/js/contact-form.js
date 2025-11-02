// contact-form.js
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("contact-container");

  // Create form
  const form = document.createElement("form");
  form.id = "contact-form";
  form.action = "https://formsubmit.co/S00326667@myacu.edu.au";
  form.method = "POST";

  // Create fieldset
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Your Details";
  fieldset.appendChild(legend);

  // Helper function to make labeled inputs
  function makeInput(labelText, type, id, placeholder) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    input.required = true;

    fieldset.appendChild(label);
    fieldset.appendChild(input);
  }

  // Add form fields
  makeInput("Full Name", "text", "name", "First & Last Name Here");
  makeInput("Email Address", "email", "email", "name@example.com");

  // Message textarea
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message";
  const message = document.createElement("textarea");
  message.id = "message";
  message.name = "message";
  message.placeholder = "How can I help?";
  message.required = true;

  fieldset.appendChild(messageLabel);
  fieldset.appendChild(message);

  // Submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Send Message";

  // Add everything
  form.appendChild(fieldset);
  form.appendChild(button);
  container.appendChild(form);

  // ✅ Form validation
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      e.preventDefault(); // stop submission
      alert("Please fill in all fields before submitting.");
    } else {
      alert("Message sent successfully!");
    }
  });
});