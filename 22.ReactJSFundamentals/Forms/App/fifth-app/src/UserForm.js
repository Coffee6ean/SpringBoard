import React, {useState} from 'react';

const UserForm = () => {
    const initialState = {
        username: '',
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState);
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsTouched(true);
        if(value === '') {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email} = formData;
        if(isInvalid) {
            alert(`Added you to mailing list, ${email}`);
            setFormData(initialState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input 
                id='username' 
                type='text' 
                name='username'
                placeholder='username' 
                value={formData.username} 
                onChange={handleChange}
            />

            <label htmlFor='email'>E-mail</label>
            <input 
                id='email' 
                type='email' 
                name='email'
                placeholder='email' 
                value={formData.email} 
                onChange={handleChange}
            />

            <label htmlFor='password'>Password</label>
            <input 
                id='password' 
                type='password' 
                name='password'
                placeholder='password' 
                value={formData.password} 
                onChange={handleChange}
            />
            {isInvalid && isTouched && <span style={{color: 'red'}}>Email cannot be blank!</span>}
            <button>Add me to list!</button>
        </form>
    )
}

export default UserForm;
