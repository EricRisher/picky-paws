// main js file, for general js code :)

// Function to handle the search button click
function handleSearch() {
  const searchInput = document.querySelector('#search-bar input');
  const searchQuery = searchInput.value;

  // Get all the product cards
  const productCards = document.querySelectorAll('.product-card');

  // Loop through each product card and check if it matches the search query
  productCards.forEach(function (card) {
    const productName = card.querySelector('.product-name').textContent.toLowerCase();
    if (productName.includes(searchQuery.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Clear the search input field
  searchInput.value = '';
}

// Function to handle the filter selection
function handleFilterSelection() {
  const selectedFilters = document.querySelectorAll('.filter-checkbox:checked');

  // Create an array to store the selected filter values
  const selectedFilterValues = [];

  // Loop through each selected filter and add its value to the array
  selectedFilters.forEach(function (filter) {
    selectedFilterValues.push(filter.value);
  });
}

// Event Listener
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the LDClient to be ready
  LDClient.on('ready', function () {
    // Search button click event
    const searchButton = document.querySelector('#search-bar button');
    searchButton.addEventListener('click', handleSearch);

    // Filter selection event
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    filterCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', handleFilterSelection);
    });
  });
});