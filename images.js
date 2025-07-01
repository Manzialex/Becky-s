  let cart = [];
       let total = 0;

       function addToCart(name, price){
        cart.push({ name,price});
        total += price;
        updateCart();
      }

      function updateCart(){
        const cartList = document.getElementById('cart-items');
        const totalDisplay = document.getElementById('total');
        cartList.innerHTML = '';

        cart.forEach((item, index) =>{
          const li = document.createElement('li');
          li.textContent = `${item.name} - USD ${item.price.toLocaleString()}`;
          cartList.appendChild(li);
        });
        totalDisplay.textContent = total.toLocaleString(); 
      }

      function sendToWhatsApp(){
        if (cart.length === 0){
            alert("your cart is empty");
            return;
        }

        let message = "*Hello , i would like to place this order:*\n\n";

        cart.forEach((item, i) =>{
            message += `${i + 1}. ${item.name} - USD ${item.price}\n`;
        });

        message += `\n*Total: USD ${total}*\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "256787663293"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
      }