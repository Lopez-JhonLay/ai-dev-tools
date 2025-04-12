<template>
  <div>
    <div class="p-5">
      <h1 class="text-xl font-bold">CodeXAI</h1>
    </div>
    <div class="flex flex-col items-center gap-5">
      <h1 class="text-3xl font-bold">Create an account</h1>
      <form class="w-sm flex flex-col gap-6">
        <div>
          <label class="input validator w-full">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              v-model="email"
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div class="validator-hint hidden">Enter valid email address</div>
        </div>
        <div>
          <label class="input validator w-full">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              v-model="password"
              type="password"
              required
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p class="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter
            <br />At least one uppercase letter
          </p>
        </div>
        <button
          @click="handleSignup"
          class="btn btn-soft btn-primary w-full"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <span class="loading loading-spinner"></span>
            Signing up...
          </template>
          <template v-else> Sign up </template>
        </button>
      </form>
    </div>
    <div class="flex flex-col items-center justify-center m-3">
      <p class="text-sm">
        Already have an account?
        <router-link to="/login" class="text-primary">Login</router-link>
      </p>
    </div>
    <div>
      <p class="divider w-sm mx-auto my-5">or</p>
    </div>
    <div class="flex flex-col items-center gap-5">
      <button class="btn bg-white text-black border-[#e5e5e5] w-sm">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { signup } from "@/services/authService";

import type { TUserCredentials } from "@/types";

import { useToast } from "@/composables/useToast";

const { showToast } = useToast();

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const isLoading = ref(false);

const handleSignup = async (e: Event) => {
  e.preventDefault();
  error.value = "";
  success.value = "";
  isLoading.value = true;

  const user: TUserCredentials = {
    email: email.value,
    password: password.value,
  };

  try {
    await signup(user);
    success.value =
      "Signup successful! Please check your email for verification.";

    showToast(success.value, "success");

    email.value = "";
    password.value = "";

    router.push("/login");
  } catch (err) {
    error.value = (err as Error).message || "Signup failed. Please try again.";
    showToast(error.value, "error");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
