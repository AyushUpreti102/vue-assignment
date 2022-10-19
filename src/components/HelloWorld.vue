<template>
  <div class="hello">
    <ul class="hello__List">
      <li v-for="(value, index) in paginated" :key="index">{{value.name}}</li>
    </ul>
    <div class="hello__buttons">
      <button @click="previousPage" :disabled="state2">previous</button>
      <button v-for="(value, index) in paginated" :key="index" @click="changepage(index)">{{index+1}}</button>
      <button @click="nextPage" :disabled="state1">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      users: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }, { name: 'item4' }, { name: 'item5' },
      { name: 'item6' }, { name: 'item7' }, { name: 'item8' }, { name: 'item9' }, { name: 'item10' }, { name: 'item11' },
      { name: 'item12' }, { name: 'item13' }, { name: 'item14' }, { name: 'item15' }, { name: 'item16' }, { name: 'item17' },
      { name: 'item18' }, { name: 'item19' }, { name: 'item20' }, { name: 'item21' }, { name: 'item22' }, { name: 'item23' },
      { name: 'item24' }, { name: 'item25' }],
      itemPerPage: 5,
      currentPage: 2,
      pageCount: 5,
      pageItems: 5,
      paginated: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }, { name: 'item4' }, { name: 'item5' }],
      state1: false,
      state2: true,
      page: 0,
    }
  },
  methods: {
    nextPage() {
      this.page = this.currentPage - 1;
      this.pageItems = this.pageItems + this.itemPerPage;
      this.paginated = this.users.slice(this.page * this.itemPerPage, this.pageItems);
      this.currentPage++;
      if (this.pageItems === 25) {
        this.state1 = true;
      }
      if (this.pageItems > this.itemPerPage) {
        this.state2 = false;
      }
    },
    previousPage() {
      this.currentPage--;
      this.page = this.currentPage - 2;
      this.pageItems = this.pageItems - this.itemPerPage;
      this.paginated = this.users.slice(this.page * this.itemPerPage, this.pageItems);
      if (this.pageItems < 25) {
        this.state1 = false
      }
      if (this.pageItems === this.itemPerPage) {
        this.state2 = true;
      }
    },
    changepage(index) {
      this.currentPage = (index + 1) + 1;
      this.page = index;
      this.pageItems = this.itemPerPage * (index + 1)
      this.paginated = this.users.slice(this.page * this.itemPerPage, this.pageItems);
      if (this.pageItems === 25) {
        this.state1 = true;
      }
      if (this.pageItems > this.itemPerPage) {
        this.state2 = false;
      }
      if (this.pageItems < 25) {
        this.state1 = false
      }
      if (this.pageItems === this.itemPerPage) {
        this.state2 = true;
      }
    }
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hello__List {
  width: 50%;
}
.hello__List li {
  width: 100%;
  border: 1px solid black;
  list-style: none;
  padding: 10px;
  background-color: lightgrey;
}

.hello__buttons {
  width: 50%;
  display: flex;
  position: relative;
  left: 30px;
}

button {
  width: 20%;
  padding: 10px;
  margin: 5px;
}
</style>
