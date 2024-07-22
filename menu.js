document.addEventListener('DOMContentLoaded', () => {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            const menuItemsContainer = document.getElementById('menu-items');
            const menuCategories = {
                "PELENGKAP": "filter-pelengkap",
                "SNACK": "filter-snack"
            };

            Object.keys(data).forEach(category => {
                data[category].forEach(item => {
                    const menuItem = document.createElement('div');
                    menuItem.classList.add('col-lg-6', 'menu-item', menuCategories[category]);

                    const menuContent = `
                        <div class="menu-content">
                            <a href="#">${item.name}</a><span>${item.price}</span>
                        </div>
                    `;
                    menuItem.innerHTML = menuContent;
                    menuItemsContainer.appendChild(menuItem);
                });
            });
        })
        .catch(error => console.error('Error loading menu:', error));
});