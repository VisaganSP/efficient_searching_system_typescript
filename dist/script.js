"use strict";
const data = [];
for (let i = 0; i < 1000000; i++) {
    data.push(`Item ${i}`);
}
const binarySearch = (arr, searchTerm) => {
    let start = 0;
    let end = arr.length - 1;
    const results = [];
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const item = arr[mid];
        if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(item);
        }
        if (item.toLowerCase() < searchTerm.toLowerCase()) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return results;
};
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    const searchResults = binarySearch(data, searchTerm);
    const searchResultsElement = document.getElementById('searchResults');
    searchResultsElement.innerHTML = '';
    searchResults.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResultsElement.appendChild(li);
    });
};
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', handleSearch);
//# sourceMappingURL=script.js.map