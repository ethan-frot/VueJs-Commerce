export const cardProduct = {
  props: {
    id: Number,
    name: String,
    imgsrc: String,
    like: Boolean,
    price: Number,
    togglelike: Function,
    addtocart: Function,
  },
  template: `
          <div class="image-container">
            <img :src="imgsrc" class="image" />
            <p class="price">{{ price }} €</p>
          </div>
          <div class="button-container">
            <button @click="() => togglelike(id)" class="button like">
              <i v-if="like" class="fa-solid fa-heart" style="color: white"></i>
              <i v-else class="fa-regular fa-heart" style="color: white"></i>
            </button>
            <button @click="() => addtocart(id)" class="button cart">
              <i class="fa-solid fa-cart-shopping" style="color: white"></i>
            </button>
          </div>
    `,
};
