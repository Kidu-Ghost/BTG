document.getElementById("help-request-Form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const form = e.target;
  const data = {
    email: form.email.value,
    helptype: form.helptype.value,
    message: form.message.value,
    location: form.location.value
  };

  fetch("https://formspree.io/f/xblgeowa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.ok ? res.text() : Promise.reject("Failed to send"))
  .then(msg => {
    document.getElementById("response").innerText = "Request sent successfully!";
  })
  .catch(err => {
    document.getElementById("response").innerText = "Error: " + err;
  });
});
