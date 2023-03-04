import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const passowrd = signupForm["signup-password"].value;
  console.log(email, passowrd);
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      passowrd
    );
    console.log(userCredentials);
    // close the signup modal
    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  } catch (error) {
    console.log(error);
  }
});
