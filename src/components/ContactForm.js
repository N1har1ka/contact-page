import React from 'react'
import './ContactForm.css'
import Button from './Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function ContactForm() {
  return (
    <>
    <div className='contactform'>
        <div className='contactcontent'>
            <div className='contactbtn'>
                <Button text="VIA SUPPORT CHAT " primary={true} icon={<MdMessage fontSize="24px"/>} />
                 &nbsp;
                <Button text="VIA CALL" primary={true} icon={<FaPhoneAlt fontSize="24px" />} />
            </div>
            <div className='contactbtn'>
              <Button text="VIA EMAIL FORM" primary={false} icon={<HiMail fontSize="24px"/>} />

            </div>
        </div>
        <div className='contactimg'></div>
    </div> 
    </>
  )
}
