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

  try {
    await sendEmailVerification(userCredential.user);
  } catch (e) {
    console.error("Failed to send verification email:", e);
  }

  return userCredential;
};

export const login = async (user: TUserCredentials) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  return userCredential.user;
};
