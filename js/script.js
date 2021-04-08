const app = new Vue (
  {
    el: "#root",
    data: {
      cards: [],
    },
    mounted: function () {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then( (reply) => {
          this.cards = reply.data.response;
      });
    },
  }
);
