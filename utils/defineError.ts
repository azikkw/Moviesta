export default function (error: any) {
    if(error === 'auth/email-already-in-use') {
        return 'This email is already in use.';
    } else if(error === 'auth/weak-password') {
        return 'The password is short.';
    } else if(error === 'auth/invalid-credential') {
        return 'Wrong email or password.'
    } else if(error === 'not image') {
        return 'Image not uploaded.'
    }
    return 'Something went wrong! Try again.';
}