// Sample large dataset (array of strings)
const data: string[] = [];

// Generate large dataset (replace with your actual data)
for (let i = 0; i < 1000000; i++) {
    data.push(`Item ${i}`);
}

// Function to perform binary search
const binarySearch = (arr: string[], searchTerm: string): string[] => {
    let start = 0;
    let end = arr.length - 1;
    const results: string[] = [];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const item = arr[mid];

        // Check if the current item matches the search term
        if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(item);
        }

        // Adjust the search range
        if (item.toLowerCase() < searchTerm.toLowerCase()) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return results;
};

// Function to handle search
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const searchTerm = searchInput.value.trim();

    // Perform binary search
    const searchResults = binarySearch(data, searchTerm);

    // Display search results
    const searchResultsElement = document.getElementById('searchResults')!;
    searchResultsElement.innerHTML = '';
    searchResults.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResultsElement.appendChild(li);
    });
};

// Event listener for search input
const searchInput = document.getElementById('searchInput')!;
searchInput.addEventListener('input', handleSearch);
