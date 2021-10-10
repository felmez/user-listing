module.exports.validateCreateInput = (
    name,
    email,
    role,
    password,
    confirmPassword
) => {
    const errors = {};

    const emailRegEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const eduRegEx = /^\.edu\.(?!\s)[a-zA-Z]|\.edu(?!\s)+/;
    const isValidEmail = email.match(emailRegEx);
    const isEduEmail = email.match(eduRegEx);
    const isAcademic = role.trim() === 'öğrenci' || role.trim() === 'görevli';
    const isNormal = role.trim() === 'normal';

    function checkEmpty(field) {
        if (field.trim() === '') {
            return true;
        }
    }

    if (checkEmpty(name)) {
        errors.name = 'İsim alanı boş olamaz';
    }


    if (checkEmpty(email)) {
        errors.email = 'Email alanı boş olamaz';
    } else {
        if (!isValidEmail) {
            errors.email = 'Geçerli bir email giriniz';
        }
    }


    if (checkEmpty(role)) {
        errors.role = 'Kayıt tipi boş olamaz';
    } else if (isValidEmail && isEduEmail && !isAcademic) {
        errors.role = 'Kayıt tipi "öğrenci" ya da "görevli" olarak girilmelidir';
    } else if (isValidEmail && !isEduEmail && !isNormal) {
        errors.role = 'Kayıt tipi "normal" olarak girilmelidir';
    }



    if (checkEmpty(password)) {
        errors.password = 'Şifre alanı boş olamaz';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Şifreler eşleşmiyor'
    } else {
        const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!():+{}%&*?])[A-Za-z\d#$():+{}@!%&*?]{8,30}$/;
        if (!password.match(passRegEx)) {
            errors.password = 'Şifre en az 8 karakter olmalı. Minimum 1 büyük, 1 küçük harf ve 1 özel karakter içermeli.';
        }
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}