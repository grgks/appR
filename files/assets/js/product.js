document.addEventListener('DOMContentLoaded', function() {
  // Εμφάνιση όλων των προϊόντων
  fetchProducts();

  // Υποβολή φόρμας δημιουργίας προϊόντος
  const createForm = document.getElementById('create-product-form');
  if (createForm) {
      createForm.addEventListener('submit', createProduct);
  }
});

// Συνάρτηση για την εμφάνιση των προϊόντων
async function fetchProducts() {
  try {
      const response = await fetch('/api/products');
      const data = await response.json();

      if (data.status) {
          const productList = document.getElementById('product-list');
          productList.innerHTML = ''; // Καθαρισμός προηγούμενης λίστας
          data.data.forEach(product => {
              const productElement = document.createElement('div');
              productElement.classList.add('product');
              productElement.innerHTML = `
                  <h3>${product.product}</h3>
                  <p>Κόστος: €${product.cost}</p>
                  <p>Ποσότητα: ${product.quantity}</p>
                  <p>Ημερομηνία: ${new Date(product.date).toLocaleDateString()}</p>
              `;
              productList.appendChild(productElement);
          });
      } else {
          console.error('Πρόβλημα στην ανάκτηση των προϊόντων:', data.data);
      }
  } catch (err) {
      console.error('Πρόβλημα στην επικοινωνία με την API:', err);
  }
}

// Συνάρτηση για τη δημιουργία νέου προϊόντος
async function createProduct(event) {
  event.preventDefault();

  const productName = document.getElementById('product').value;
  const cost = document.getElementById('cost').value;
  const quantity = document.getElementById('quantity').value;

  const newProduct = {
      product: productName,
      cost: parseFloat(cost),
      quantity: parseInt(quantity),
  };

  try {
      const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
      });

      const data = await response.json();
      if (data.status) {
          alert('Το προϊόν δημιουργήθηκε με επιτυχία!');
          fetchProducts();  // Ανανεώση λίστας
      } else {
          console.error('Πρόβλημα με τη δημιουργία του προϊόντος:', data.data);
      }
  } catch (err) {
      console.error('Πρόβλημα στην επικοινωνία με την API:', err);
  }
}
