const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberCheck = /^\d{10}$/;
const passwordCheck = /^(?=.*\d).{8,}$/;
const registerCheck = {
    emailCheck: emailCheck,
    phoneNumberCheck: phoneNumberCheck,
    passwordCheck: passwordCheck,
};
export default registerCheck;
