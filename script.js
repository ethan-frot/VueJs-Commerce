import { cardProduct } from "./components/cardProduct.js";
import { productInCart } from "./components/productInCart.js";

const { createApp, ref, computed } = Vue;
const vm = createApp({
  components: {
    "card-product": cardProduct,
    "product-in-cart": productInCart,
  },
  data() {
    return {
      productList: [],
      cart: [],
    };
  },
  methods: {
    togglelike(productId) {
      const product = this.productList.find((item) => item.id === productId);
      product.like = !product.like;
    },
    addToCart(productId) {
      const product = this.productList.find((item) => item.id === productId);
      if (!this.cart.some((item) => item.id === productId)) {
        this.cart.push(product);
      } else {
        this.removeFromCart(productId);
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
  computed: {
    isItemLiked() {
      return this.productList.some((item) => item.like);
    },
    isItemInCart() {
      return this.cart.length > 0;
    },
    totalPrice() {
      return this.cart.reduce((sum, product) => sum + product.price, 0);
    },
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.productList = data;
      });
    console.log("App mounted");
  },
}).mount("#products");
