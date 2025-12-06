const signupValidation = (signupData) => {
    const error = {};
    
    if (!signupData.fname?.trim()) {
        error.fname = "First name is required";
    }
    
    if (!signupData.lname?.trim()) {
        error.lname = "Last name is required";
    }
    
    if (!signupData.mail?.trim()) {
        error.mail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.mail)) {
        error.mail = "Please enter a valid email";
    }
    
    if (!signupData.pwd?.trim()) {
        error.pwd = "Password is required";
    } else if (signupData.pwd.length < 6) {
        error.pwd = "Password must be at least 6 characters";
    }
    
    if (!signupData.cpassword?.trim()) {
        error.cpassword = "Please confirm your password";
    } else if (signupData.password !== signupData.cpassword) {
        error.cpassword = "Passwords do not match";
    }
    
    return error;
};

export default signupValidation;