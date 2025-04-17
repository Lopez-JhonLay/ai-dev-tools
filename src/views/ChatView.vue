<template>
  <!-- <div>Chat View</div>
  <div>
    <h1>Welcome to Dashboard</h1>
    <p v-if="store.user">Logged in as: {{ store.user.email }}</p>
  </div>
  <div>
    <button @click="handleLogout" class="btn btn-danger">Logout</button>
  </div> -->
  <div className="drawer sm:drawer-open">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <div class="p-4 mb-2 flex items-center justify-between sm:justify-end">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button sm:hidden"
          >Open drawer</label
        >
        <div class="">Image here</div>
      </div>
      <div
        class="sm:w-5xl mx-auto my-0 p-2 h-dvh sm:h-4/5 flex flex-col justify-between"
      >
        <div>
          <h1 class="font-bold text-2xl">Chat with CodeXAI</h1>
        </div>
        <div class="divider"></div>
        <div class="h-[600px] p-4 overflow-auto">
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div>
          <!-- <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div class="chat-bubble">Not leave it in Darkness</div>
          </div> -->
        </div>
        <div class="divider"></div>
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Enter your prompt"
            class="input sm:input-lg w-full mb-20 sm:mb-0"
          />
          <button class="btn btn-primary sm:btn-lg">Submit</button>
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button sm:hidden"
          >Open drawer</label
        >
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
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
