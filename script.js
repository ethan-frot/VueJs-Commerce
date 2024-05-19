import { cardProduct } from "./components/cardProduct.js";

const { createApp, ref, computed } = Vue;
const vm = createApp({
  components: {
    "card-product": cardProduct,
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
      this.cart.push(productId);
    },
  },
  computed: {
    isItemLiked() {
      return this.productList.some((item) => item.like);
    },
    isItemInCart() {
      return this.cart.length > 0;
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
