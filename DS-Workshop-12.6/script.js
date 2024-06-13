document.addEventListener('DOMContentLoaded', function() {
    handleActionChange();
});

function handleActionChange() {
    const actionSelect = document.getElementById('action-select');
    const insertForm = document.getElementById('insert-form');
    const retrieveOptions = document.getElementById('retrieve-options');

    if (actionSelect.value === 'insert') {
        insertForm.style.display = 'block';
        retrieveOptions.style.display = 'none';
    } else if (actionSelect.value === 'retrieve') {
        insertForm.style.display = 'none';
        retrieveOptions.style.display = 'block';
    } else {
        insertForm.style.display = 'none';
        retrieveOptions.style.display = 'none';
    }
}

function submitProduct() {
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;

    // logic to send this data to your server or process 
    console.log('Product submitted:', { id, name, price, stock });
    alert('Product submitted successfully!');
}

function retrieveAllProducts() {
    // Logic 
    console.log('Retrieve all products');
    alert('Retrieving all products...');
}

function retrieveAllOrders() {
    // Logic 
    console.log('Retrieve all orders');
    alert('Retrieving all orders...');
}
