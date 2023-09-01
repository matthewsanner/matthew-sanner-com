document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let form = event.target;
  let formData = new FormData(form);
  
  let xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      let response = JSON.parse(xhr.responseText);
      
      let message = document.getElementById('form-message');
      
      if (response.success) {
        message.textContent = response.message;
        message.classList.add('success');
        // Additional code to handle success
      } else {
        message.textContent = response.message;
        message.classList.add('error');
        // Additional code to handle failure
      }
      
      message.style.display = 'block';
      setTimeout(function() {
        message.style.display = 'none';
        message.classList.remove('success', 'error');
      }, 10000); // 10 seconds
      
      // Clear the form inputs
      form.reset();
    }
  };
  
  xhr.send(formData);
});