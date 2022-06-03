<template>
  <div class="container">
    <ul>
      <user-item v-for="user in users" :key="user.id" :user="user"></user-item>
      <base-button @click="loadMore" class="button" mode="flat"
        >Load more</base-button
      >
    </ul>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, defineComponent } from "vue";
import { useStore } from "@/store/index";

import UserItem from "../components/users/UserItem.vue";

export default defineComponent({
  components: { UserItem },

  setup() {
    const store = useStore();
    const users = store.getters.users;

    const loadMore = () : void => {
      store.dispatch("loadUsers");
    };

    onBeforeMount(() => {
      if (users.length <= 0) {
        loadMore();
      } else {
        return;
      }
    });

    return { users, loadMore };
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container {
  border: 1px solid #c2bfbf;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem;
}

.button {
  margin-left: 46%;
}
</style>
