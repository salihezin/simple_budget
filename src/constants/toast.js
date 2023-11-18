export const loginFailed = {
    severity: 'error',
    summary: 'Başarısız',
    detail: 'Formu doğru doldurduğunuzdan emin olunuz.',
    life: 3000
}

export const emailIsNotValid = {
    severity: 'error',
    summary: 'Email geçersiz',
    detail: 'Email adresi geçerli değil.',
    life: 3000
}

export const passwordIsNotValid = {
    severity: 'error',
    summary: 'Şifre geçersiz',
    detail: 'Şifre en az 6 karakterden oluşmalıdır.',
    life: 3000
}

export const passwordAgainIsNotSame = {
    severity: 'error',
    summary: 'Şifreler aynı değil',
    detail: 'Şifreler aynı değil.',
    life: 3000
}

export const loginSuccess = {
    severity: 'success',
    summary: 'Başarılı',
    detail: 'Giriş başarılı.',
    life: 3000
}

export const loginFailedToast = (message) => ({
    severity: 'error',
    summary: 'Başarısız',
    detail: message,
    life: 3000
})

export const loginSuccessToast = (message) => ({
    severity: 'success',
    summary: 'Başarılı',
    detail: message,
    life: 3000
})
