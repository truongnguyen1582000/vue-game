const app = Vue.createApp({
  data() {
    return {
      heroHealth: 100,
      monsterHealth: 1000,
      heroDamage: 120,
      monsterDamage: 20,
      heroShield: 30,
      monsterShield: 40,
      heroCritical: 50,
      monsterCritical: 20,
      heroDodge: 60,
      monsterDodge: 10,
    };
  },
  methods: {
    attacking: function () {
      if (this.monsterDodge >= this.randomPercent()) {
        console.log("dodged");
        return;
      }
      if (this.monsterHealth > 0) {
        this.monsterHealth -= this.heroDamage - this.monsterShield;
      }

      if (this.monsterHealth === 0) {
        alert("Bình tĩnh đi bạn tôi! Nó chết rồi...");
        return;
      }

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        setTimeout(() => {
          alert("Bạn là nhất =))");
        }, 1);
      }
    },
    healing: function () {
      this.heroHealth += parseInt(this.heroHealth * (10 / 100));
    },
    randomPercent: function () {
      return Math.ceil(Math.random() * 10 * 10);
    },
  },

  watch: {},
});

app.mount(".game");
