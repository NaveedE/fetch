async function addProcuts() {
  const resp = await fetch('https://dummyjson.com/products');
  const arr = await resp.json();
  const container = document.getElementById('product-container');
  arr.products.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.thumbnail}">
      <h2>${item.title}</h2>
      <p>${item.description}</P>
      <p class="price">$${item.price}</p>
      <p>&#11088;${item.rating} out of 5</p>
      <button class="btn">Add to cart</button>
      <button class="btn">Buy Now</button>
    `;
    container.appendChild(card);
  });

  
}
addProcuts();

