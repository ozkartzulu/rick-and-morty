

export const validate = (userData) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    const regexOneNumber = /[0-9]/
    const regexLength = /^.{6,10}$/
    const errors = { email: '', password: '' }

    if (!userData.email) errors.email = 'Email is required'
    else if (!regexEmail.test(userData.email)) errors.email = 'Email invalid'
    else if (errors.email.length > 35) errors.email = 'Enter email less than 35 characters'

    if (!userData.password) errors.password = 'Password is required'
    else if (!regexOneNumber.test(userData.password)) errors.password = 'Password must have at least one number'
    else if (!regexLength.test(userData.password)) errors.password = 'Password must have between 6 to 10 characters'

    return errors
}