document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="option"]');
  
    radios.forEach(radio => {
      radio.addEventListener("change", function() {
        // Hide all sections
        document.querySelectorAll('.radio-option div[id]').forEach(section => {
          section.classList.add('hidden');
        });
  
        // Show the selected section
        if (this.id === 'option1Radio') {
          document.getElementById('option1Section').classList.remove('hidden');
          document.getElementById('total').textContent = '$10.00 USD';
        } else if (this.id === 'option2Radio') {
          document.getElementById('option2Section').classList.remove('hidden');
          document.getElementById('total').textContent = '$18.00 USD';
        } else if (this.id === 'option3Radio') {
          document.getElementById('option3Section').classList.remove('hidden');
          document.getElementById('total').textContent = '$24.00 USD';
        }
      });
    });
  });
  