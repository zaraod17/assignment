<template>
  <div>
    <base-card>
      <img :src="user.pictureUrl" alt="Avatar" />
      <div class="container">
        <h2>{{ fullName }}</h2>
        <h4>Email: {{ user.email }}</h4>
        <h4>Birth date: {{ user.birthDate }}</h4>
        <h4>Address: {{ fullAddress }}</h4>
        <h4>Registered at: {{ user.registered }}</h4>
        <div class="actions">
          <base-button link to="/users">Go back</base-button>
          <base-button v-if="!isVerified" @click="verifyUser"
            >Verify</base-button
          >
          <span v-else>User verified!</span>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script lang="ts">
import { computed, ref, onBeforeMount } from "vue";
import { useStore } from "@/store/index";

export default {
  setup() {
    const store = useStore();
    const isVerified = ref<String | null>();
    const user = store.getters.selectedUser;

    const fullName = computed(() => {
      return user.firstName + " " + user.lastName;
    });

    const fullAddress = computed(() => {
      return (
        user.address.street.number +
        " " +
        user.address.street.name +
        ", " +
        user.address.city +
        ", " +
        user.address.state
      );
    });

    const verifyUser = () => {
      localStorage.setItem(user.id, user.id);
      isVerified.value = localStorage.getItem(user.id);
    };

    onBeforeMount(() => {
      isVerified.value = localStorage.getItem(user.id);
    });

    return { user, fullName, verifyUser, isVerified, fullAddress };
  },
};
</script>

<style scoped>
.container {
  display: block;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img {
  clip-path: circle();
}
</style>
