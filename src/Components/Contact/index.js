import React, { useState } from 'react';
import { ContactDiv } from './style'
import { NAME, PHONE, CITY, PEOPLE_NUM, TITLE, DESCRIPTION, SEND } from './text'
import { Content, Title, Description, Form, Send, InputCell } from './style'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [num, setNum] = useState(0)

    const checkValidation = () => {
        return name.length > 0 && phone.length > 0 && city.length > 0 && num > 0
    }

    const handleSend = () => {
        if (!checkValidation()) {
            alert("לא ניתן להשאיר שדה ריק")
            return;
        }
        const msg = `היי ניסן, זה ${name}. אני מ${city} והמספר שלי הוא ${phone} זה בקשר לאירוע שאני מתעניין לכ- ${num} אנשים.  אשמח להצעת מחיר ופרטים נוספים!`
        document.location.href=`whatsapp://send?text=${msg}&phone=+972503384138`
    }

    return (
        <ContactDiv id="jump_point">
            <Content>
                <Title>
                    {TITLE}
                </Title>
                <Description>
                    {DESCRIPTION}
                </Description>
            </Content>
            <Form>
                <InputCell placeholder={NAME} type="text" onChange={e => setName(e.target.value)}></InputCell>
                <InputCell placeholder={PHONE} type="tel" onChange={e => setPhone(e.target.value)}></InputCell>
                <InputCell placeholder={CITY} type="text" onChange={e => setCity(e.target.value)}></InputCell>
                <InputCell placeholder={PEOPLE_NUM} type="number" onChange={e => setNum(e.target.value)}></InputCell>
                <Send onClick={() => handleSend()}>{SEND}</Send>
            </Form>
        </ContactDiv>
    );
};

export default Contact;