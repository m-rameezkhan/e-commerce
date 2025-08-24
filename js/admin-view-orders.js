// Switch between tabs
const tabs = document.querySelectorAll('.tab-btn');
const tables = document.querySelectorAll('.orders-table');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');

        tables.forEach(table => table.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
