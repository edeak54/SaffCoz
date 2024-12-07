function validateForm() {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
  
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value;
    const subscribe = document.getElementById('subscribe').checked;
  
    let isValid = true;
    if (fullName.length < 3) {
      document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
      isValid = false;
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').textContent = 'Email must contain "@" and a domain.';
      isValid = false;
    }

    if (isNaN(phone) || phone.length < 10) {
      document.getElementById('phoneError').textContent = 'Phone number must be numeric and at least 10 digits.';
      isValid = false;
    }

    if (gender === '') {
      document.getElementById('genderError').textContent = 'Please select your gender.';
      isValid = false;
    }
  
    if (!subscribe) {
      document.getElementById('subscribeError').textContent = 'You must check the subscription box to continue.';
      isValid = false;
    }

    if (isValid) {
      alert('Thank you for contacting us!');
    }
  }
  