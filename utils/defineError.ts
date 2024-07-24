export default function (error: any) {
    if(error === 'auth/email-already-in-use') {
        return 'This email is already in use.';
    } else if(error === 'auth/weak-password') {
        return 'Password should be at least 6 characters.';
    } else if(error === 'auth/invalid-credential') {
        return 'Wrong email or password.'
    } else if(error === 'not image') {
        return 'Image not uploaded.'
    } else if(error === 'invalid type') {
        return 'Upload image jpg/png/webp.'
    }
    return 'Something went wrong! Try again.';
}
