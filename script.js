
const cities = [
      "Khayelitsha, block 5, City of Cape Town (Cape Town), Western Cape[Eskom]",
      "Mitchells Plain, block 4, City of Cape Town (Cape Town), Western Cape [City of Cape Town Municipality]",
      "Strand, block 3, City of Cape Town (Cape Town), Western Cape [City of Cape Town Municipality]",
      "Stellenbosch, block 2, Stellenbosch, Western Cape [Municipality]",
      "Paarl, block 9, Drakenstein, Western Cape [Drakenstein Municipality]",
      "Thohoyandou, block 7, Thulamela, Limpopo [Eskom]",
      "Kuruman, block 9, Ga Segonyana, Nothern Cape[Ga Segonyana Municipality]",
      "Braamfontein, block 6, JHB City Power (Johanesburg), Gauteng [ JHB City Power Municipality]",
      "Roodepoort, block 16,  JHB City Power (Johanesburg), Gauteng [ JHB City Power Municipality]",
      "Thembisa, block 11, Ekurhuleni, Gauteng [Ekurhuleni Municipality]",
      "Katlehong, block 6, Ekurhuleni, Gauteng [Eskom]",
      "Pretoria, CHB block 14, Tshwane (Pretoria), Gauteng [Tshwane Municipality]",
      "Mamelodi, block 5, Tshwane (Pretoria), Gauteng [Tshwane Municipality]",
      "Potchefstroom, block 5, JB Marks, North West [JB Marks Municipality]",
      "Witbank, CBD, block 4, Emalahleni, (Witbank) Mpumulanga [Emalahleni Municipality]",
      "George, block 12, George, Western [George Municipality]",
      "Mmabatho, block 10, Mafikeng, North West [Eskom]",
      "Umlazi West, block 7, Ethekwini, kwazulu Natal [Ethekwini Municipality]"
];

const input = document.getElementById('cityInput');
const suggestions = document.getElementById('suggestions');

// Populate suggestions
function populateSuggestions(query = '') {
      suggestions.innerHTML = '';

      const filteredCities = cities.filter(city =>
            city.toLowerCase().startsWith(query.toLowerCase())
      );

      filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = city;
            li.addEventListener('click', () => {
                  input.value = city;
                  suggestions.innerHTML = '';
            });
            suggestions.appendChild(li);
      });
}

// Handle input event
input.addEventListener('input', function () {
      const query = this.value;
      populateSuggestions(query);
});

// Show all suggestions on focus
input.addEventListener('focus', function () {
      populateSuggestions();
});

// Hide suggestions when input loses focus
input.addEventListener('blur', function () {
      setTimeout(() => {
            suggestions.innerHTML = '';
      }, 100);
});
document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
            const contentBox = document.querySelector('.content_box');
            contentBox.classList.add('show');
      }, 1000);
});