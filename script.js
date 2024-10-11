const shirtAreas = document.querySelectorAll('.shirt-area');
const shirtInfoDiv = document.querySelector('.shirt-info');

shirtAreas.forEach((area) => {
  area.addEventListener('mouseover', (e) => {
    const shirtName = area.getAttribute('data-name');
    const shirtPrice = area.getAttribute('data-price');
    const rect = area.getBoundingClientRect();

    document.getElementById('shirt-name').innerText = shirtName;
    document.getElementById('shirt-price').innerText = shirtPrice;
    shirtInfoDiv.style.display = 'block';
    shirtInfoDiv.style.top = `${rect.top + 50}px`; // adjust based on circle radius
    shirtInfoDiv.style.left = `${rect.left}px`;
  });

  area.addEventListener('mouseout', () => {
    shirtInfoDiv.style.display = 'none';
  });
});

