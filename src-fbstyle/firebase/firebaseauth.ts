// import { app } from '@/firebase/firbaseconfig';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth(app);

// export function signupWithEmailPassword(email: string, password: string) {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             console.log(user, 'user created successfully.');
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorMessage);
//             // ..
//         });
// }


// export function loginWithEmailPassword(email: string, password: string) {
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user, 'user')
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorMessage);

//         });
// }







import { app } from '@/firebase/firbaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const auth = getAuth(app);

// Signup with Email and Password + Email Verification
export function signupWithEmailPassword(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user, 'user created successfully.');

            // Send Email Verification
            sendEmailVerification(user)
                .then(() => {
                    console.log("Verification email sent!");
                })
                .catch((error) => {
                    console.error("Error sending email verification:", error.message);
                });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
}

// Login with Email and Password
export function loginWithEmailPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user, 'user logged in successfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
}

