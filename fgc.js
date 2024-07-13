const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkedCheckboxes.length > 2) {
            const uncheckedCheckbox = checkedCheckboxes.find(cb => cb !== event.target);
            uncheckedCheckbox.checked = false;
        }
    });
});