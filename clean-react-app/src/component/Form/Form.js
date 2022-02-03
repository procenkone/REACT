import React, {useEffect, useState} from 'react';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не может бить пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может бить пустым');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else setFormValid(true)
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('некоректный емаил')
        } else setEmailError('')
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('пароль не может быть менше 3 символа и больше 8 символов')
            if (!e.target.value) {
                setPasswordError('пароль не может быть менше 3 символа и больше 8 символов')
            }
        } else setPasswordError('')
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <form>
                <h1>Регистрация</h1>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type='text'
                       name='email' placeholder='enter your email...'/>
                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password'
                       name='password' placeholder='enter your password...'/>
                <button disabled={!formValid} type={'submit'}>Registration</button>
            </form>

        </div>
    );
};

export default Form;