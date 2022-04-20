<template>
  <div class="home">
    <input type="text" placeholder="輸入篩選姓名或城市" v-model="search" />
    <Card :people="searchPeoples" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      peoples: [],
      search: "",
      filterPeoples: null,
    };
  },
  name: "Home",
  components: {
    Card,
  },
  computed: {
    searchPeoples() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.peoples.filter((people) => {
        return (
          people.name.toLowerCase().match(this.search) ||
          people.city.toLowerCase().match(this.search)
        );
      });
    },
  },
  created() {
    this.$http
      .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((res) => {
        this.peoples = res.data;
        this.filterPeoples = [...this.peoples];
      });
  },
};
</script>
