// Membuat variabel untuk menangkap elemen form dan hasil pada HTML
const form = document.querySelector('#calculator-form');
const result = document.querySelector('#result');

// Ketika form di-submit, menjalankan fungsi ini
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Menangkap nilai dari input pada form dan operator yang dipilih
  const input1 = parseFloat(this.querySelector('#input1').value);
  const operator = this.querySelector('#operator').value;
  const input2 = parseFloat(this.querySelector('#input2').value);

  // Melakukan perhitungan berdasarkan operator yang dipilih
  let output;
  switch (operator) {
    case 'add':
      output = input1 + input2;
      break;
    case 'subtract':
      output = input1 - input2;
      break;
    case 'multiply':
      output = input1 * input2;
      break;
    case 'divide':
      output = input1 / input2;
      break;
    default:
      output = NaN;
  }

  // Menampilkan hasil perhitungan pada HTML
  if (isNaN(output)) {
    result.innerText = 'Invalid input';
  } else {
    result.innerText = output;
  }
});
