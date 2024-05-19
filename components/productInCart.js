export const productInCart = {
  props: {
    id: Number,
    name: String,
    imgsrc: String,
    price: Number,
    removefromcart: Function,
  },
  template: `
    <img :src="imgsrc" class="cart-image"/>
    <div class="cart-info-container">
        <div class="cart-info">
            <h4 class="cart-info-name">{{ name }}</h4>
            <p class="cart-info-price">{{ price }} €</p>
        </div>
        <button @click="() => removefromcart(id)" class="cart-info-button">
            <i class="fa-solid fa-trash-can" style="color: red"></i>
        </button>
    </div>
      `,
};
