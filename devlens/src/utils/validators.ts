export interface LoginFormData {
    email:string;
    password:string;
}

export interface LoginFormErrors {
    email?:string;
    password?:string;
    form?:string;
}

export const validateEmail = (email:string):string => {
    if(!email.trim()) return 'Email is required';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email';
    return '';
};
export const validatePassword = (password:string): string =>{
    if(!password) return 'Password is required';
    if(password.length < 6) return 'Password must be at least 6 characters';
    return '';
};
export const validateLoginForm = (email: string, password: string): LoginFormErrors => {
    const errors: LoginFormErrors = {};
    const emailError = validateEmail(email);
    if(emailError) errors.email = emailError;

    const passwordError = validatePassword(password);
    if(passwordError) errors.password = passwordError;

    return errors;
}