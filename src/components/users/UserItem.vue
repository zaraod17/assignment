<template>
  <base-card>
    <h4 v-show="isVerified">Verified!</h4>
    <img :src="user.pictureUrl" />
    <div class="data">
      <h2>{{ fullName }}</h2>
      <p>{{ user.email }}</p>
      <base-button @click="setUserData" link :to="'/users/' + user.id"
        >View Details</base-button
      >
    </div>
  </base-card>
</template>

<script lang="ts">
import { computed, ref, onBeforeMount, defineComponent, PropType } from "vue";
import { useStore } from "@/store/index";

import { User } from "@/store/types";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const isVerified = ref<String | null>();
    const fullName = computed(() => {
      return props.user.firstName + " " + props.user.lastName;
    });

    const setUserData = () => {
      store.dispatch("setSelectedUser", props.user);
    };

    onBeforeMount(() => {
      isVerified.value = localStorage.getItem(props.user.id);
    });

    return { fullName, setUserData, isVerified };
  },
});
</script>

<style scoped>
img {
  clip-path: circle();
}
.data {
  display: block;
}
</style>
