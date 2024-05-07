import React, { useEffect, useRef, useState } from 'react' 
import Arrow from '../assets/icons/arrow.png' 
import { db } from '../config/firebase'
import { collection, doc, setDoc } from "firebase/firestore";

interface FormErrors {
    comment: string | null
    phone: string | null
    email: string | null
}

const ContactForm = () => {
    const [comment, setComment] = useState('') 
    const [phone, setPhone] = useState('') 
    const [email, setEmail] = useState('') 
    const [errors, setErrors] = useState<FormErrors>({
        comment: null,
        phone: null,
        email: null
    }) 
    const [isFormValid, setIsFormValid] = useState(false)
    const commRef = useRef<HTMLTextAreaElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const validateComment = () => {
        if (comment === '') {
            setErrors((prevState) => ({...prevState, comment: 'გთხოვთ დატოვოთ კომენტარი' })) 
        } else {
            setErrors((prevState) => ({...prevState, comment: ''})) 
        }
    } 

    const validatePhone = () => {
        if (phone.trim() === '') {
            setErrors((prevState) => ({...prevState, phone: 'გთხოვთ დატოვოთ ნომერი' })) 
        } else if (!/^\d{9}$/.test(phone.trim())) {
            setErrors((prevState) => ({...prevState, phone: 'ნომერი უნდა იყოს 9 ციფრიანი' })) 
        } else {
            setErrors((prevState) => ({...prevState, phone: ''})) 
        }
    } 

    const validateEmail = () => {
        if (email.trim() === '') {
            setErrors((prevState) => ({...prevState, email: 'გთხოვთ დატოვოთ მეილი' })) 
        } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
            setErrors((prevState) => ({...prevState, email: 'გთხოვთ შეიყვანოთ სწორი ფორმატი' })) 
        } else {
            setErrors((prevState) => ({...prevState, email: ''})) 
        }
    } 

    useEffect(() => {
        const isValid = Object.values(errors).every((error) => error === '') 
        setIsFormValid(isValid) 
    }, [errors]) 

    useEffect(() => {
        validateComment()
    }, [comment]) 

    useEffect(() => {
        if (phone.trim()!== '') {
            validatePhone() 
        }
    }, [phone]) 

    useEffect(() => {
        if (email.trim()!== '') {
            validateEmail() 
        }
    }, [email]) 
    

    useEffect(() => {
        if((commRef.current && commRef.current.value === "") || (phoneRef.current && phoneRef.current.value === "") || (emailRef.current && emailRef.current.value === "") ){
            setIsFormValid(false)
        }
    }, [])

    const leadRef = doc(collection(db, "leads"))

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString().slice(2)
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
        const day = currentDate.getDate().toString().padStart(2, '0')
        
        const formattedDate = `${year}/${month}/${day}`
        try {
            await setDoc(leadRef, {
                comment,
                email,
                phone,
                date: formattedDate
            })

            setComment('')
            setEmail('')
            setPhone('')
    
            setErrors({
                comment: null,
                phone: null,
                email: null
            })
    
            setIsFormValid(false)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form id='contact-form' onSubmit={handleSubmit}>
            <div className="result-message"></div>
            <div className="input-container">
                <div className="input-field-container comment-container">
                    <textarea
                        id='comment'
                        placeholder='Enter your comment here...'
                        ref={commRef}
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value) 
                        }}
                    />
                    {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}
                </div>
                <div className="numeric-info">
                    <div className="input-field-container">
                        <input
                            type="text"
                            id='phone'
                            placeholder='Phone: '
                            ref={phoneRef}
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value) 
                            }}
                        />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                    </div>
                    <div className="input-field-container">
                        <input
                            type="email"
                            id='email'
                            placeholder='Email: '
                            ref={emailRef}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value) 
                            }}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                </div>
            </div>
            <div className="submit-btn">
                <button type="submit" className={isFormValid? 'active' : ''} disabled={!isFormValid}>
                    Submit
                    <img src={Arrow} alt="" />
                </button>
            </div>
        </form>
    ) 
} 

export default ContactForm 

