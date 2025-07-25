const totalPagesInput = document.getElementById('totalPages');
const colorPagesInput = document.getElementById('colorPages');
const copiesInput = document.getElementById('copies');
const costOutput = document.getElementById('cost');

function calculateCost() {
  const totalPages = parseInt(totalPagesInput.value) || 0;
  const colorPages = parseInt(colorPagesInput.value) || 0;
  const copies = parseInt(copiesInput.value) || 1;
  const bwPages = Math.max(totalPages - colorPages, 0);
  const bwCostPerPage = 0.5;
  const colorCostPerPage = 1.5;
  const cost = ((bwPages * bwCostPerPage) + (colorPages * colorCostPerPage)) * copies;
  costOutput.textContent = `Estimated Cost: GHS ${cost.toFixed(2)}`;
}

totalPagesInput.addEventListener('input', calculateCost);
colorPagesInput.addEventListener('input', calculateCost);
copiesInput.addEventListener('input', calculateCost);
