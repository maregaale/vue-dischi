const app = new Vue (
  {
    el: "#root",
    data: {
      disks: [],
      genres: [],
      selected: "",
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

          // ordinamento per anno di uscita
          this.disks.sort(function (disk1, disk2) {
            return disk1.year - disk2.year;
          });
      });
    },
  }
);
