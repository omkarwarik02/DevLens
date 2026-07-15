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

export interface SignupFormErrors {
    name?:string;
    email?:string;
    password?:string;
    confirmPassword?:string;
    form?:string;
}

export const validateName = (name:string):string => {
    if(!name.trim()) return 'Name is required';
    return '';
};

export const validateConfirmPassword = (password:string, confirmPassword:string):string => {
    if(!confirmPassword) return 'Please confirm your password';
    if(password !== confirmPassword) return 'Passwords do not match';
    return '';
};

export const validateSignupForm = (name:string, email:string, password:string, confirmPassword:string): SignupFormErrors => {
    const errors: SignupFormErrors = {};
    const nameError = validateName(name);
    if(nameError) errors.name = nameError;

    const emailError = validateEmail(email);
    if(emailError) errors.email = emailError;

    const passwordError = validatePassword(password);
    if(passwordError) errors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if(confirmPasswordError) errors.confirmPassword = confirmPasswordError;

    return errors;
}