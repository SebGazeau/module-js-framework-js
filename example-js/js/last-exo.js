function addItem() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;

    if (inputValue.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

        const itemList = document.getElementById('itemList');
        itemList.appendChild(listItem);

        inputField.value = ""; // Réinitialiser le champ
    }
}