export const cardProduct = {
  props: {
    id: Number,
    name: String,
    imgsrc: String,
    like: Boolean,
    price: Number,
  },
  template: `
      <div :key="id">
          <img :src="imgsrc" />
          <p>{{ price }}</p>
          <button>
              {{ like === true ? "Liked" : "Not liked"}}
          </button>
      </div>
    `,
};
