const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const initForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
};

form.addEventListener('input', e => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log('Form submitted:', formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

document.addEventListener('DOMContentLoaded', initForm);
