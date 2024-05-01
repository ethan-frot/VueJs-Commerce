import { cardProduct } from "./components/cardProduct.js";

const { createApp, ref } = Vue;
const vm = createApp({
  components: {
    "card-product": cardProduct,
  },
  data() {
    return {
      productList: [],
    };
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
