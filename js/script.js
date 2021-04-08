const app = new Vue (
  {
    el: "#root",
    data: {
      disks: [],
      genres: [],
    },
    mounted: function () {
      // chiamata API
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then( (reply) => {
          // aggiunta carte
          this.disks = reply.data.response;

          // aggiunta generi
          reply.data.response.forEach((item, i) => {
            if (!this.genres.includes(item.genre)) {
              this.genres.push(item.genre);
            }
          });
      });
    },
  }
);
