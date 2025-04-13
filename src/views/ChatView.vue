<template>
  <div>Chat View</div>
  <div>
    <h1>Welcome to Dashboard</h1>
    <p v-if="store.user">Logged in as: {{ store.user.email }}</p>
  </div>
  <div>
    <button @click="handleLogout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { logout } from "@/services/authService";

import { useAuthStore } from "@/stores/auth";

import { useRouter } from "vue-router";

import { useToast } from "@/composables/useToast";

const store = useAuthStore();

const { showToast } = useToast();

const router = useRouter();

const handleLogout = () => {
  try {
    logout();

    console.log(store.user);

    showToast("Logout successful!", "success");
    router.push("/login");
  } catch (error) {
    showToast("Logout failed. Please try again.", "error");
  }
};
</script>

<style scoped></style>
