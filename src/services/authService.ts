import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

import type { TUserCredentials } from "@/types";

export const signup = async (user: TUserCredentials) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  console.log("User object:", userCredential.user);

  try {
    await sendEmailVerification(userCredential.user);
  } catch (e) {
    console.error("Failed to send verification email:", e);
  }

  return userCredential;
};
