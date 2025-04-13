import { defineStore } from "pinia";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(auth.currentUser);
  const isLoggedIn = ref(!!user.value);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser;
      console.log(user.value);
      isLoggedIn.value = !!firebaseUser;
    } else {
      user.value = null;
    }
  });

  return { user, isLoggedIn };
});
