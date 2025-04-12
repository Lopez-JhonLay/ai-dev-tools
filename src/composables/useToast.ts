import { ref } from "vue";

import type { TToastType, TToast } from "@/types";

const toasts = ref<TToast[]>([]);

const showToast = (message: string, type: TToastType = "success") => {
  const id = Date.now();
  toasts.value.push({ id, message, type });

  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, 3000);
};

export function useToast() {
  return {
    toasts,
    showToast,
  };
}
