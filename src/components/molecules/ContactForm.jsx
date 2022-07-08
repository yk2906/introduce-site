import styled from "styled-components"
import { InputForm } from "../atoms/InputForm"
import { createTheme, ThemeProvider } from "@mui/material"
import { FormButton } from "../atoms/Button"
import SendIcon from '@mui/icons-material/Send';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffffff'
    }
  },
})




export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  
  const disabledSend = name ==='' || email ==='' || content ===''; 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKEY = process.env.REACT_APP_PUBLIC_KEY;

    // 以下のsendFormの引数はEmailJsの公式ドキュメントと同じ順番にしなくてはならないらしい。
    emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
    .then((result) => {
      window.alert('送信が完了しました。')
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
      window.alert('送信に失敗しました。もう一度お試しください。')
    }
    );
    // e.target.reset();

    setName('');
    setEmail('');
    setContent('');
  }
  

  // const sendMail = () => {
  //   const public_KEY = process.env.REACT_APP_PUBLIC_KEY;
  //   const serviceID = process.env.REACT_APP_SERVICE_ID;
  //   const templateID = process.env.REACT_APP_TEMPLATE_ID;

  //   if (
  //     public_KEY !== undefined &&
  //     serviceID !== undefined &&
  //     templateID !== undefined
  //   ) {
  //     const template_param = {
  //       to_name: name,
  //       from_email: email,
  //       message: content,
  //     };
  //     send(public_KEY, serviceID, templateID, template_param).then(() => {
  //       window.alert('お問い合わせを送信しました。');

  //       setName('');
  //       setEmail('');
  //       setContent('');
  //     })
  //   }
  // }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   sendMail()
  // }

  // const onSubmit = async (e) => {
  //   e.preventDefault()

  //   const public_KEY = process.env.REACT_APP_PUBLIC_KEY;
  //   const serviceID = process.env.REACT_APP_SERVICE_ID;
  //   const templateID = process.env.REACT_APP_TEMPLATE_ID;
    
  //   if (public_KEY && serviceID && templateID) {
  //     init(public_KEY)
      
  //     const params = {
  //     from_name: name,
  //     email: email,
  //     content: content,
  //   }

  //   try {
  //     await send(serviceID, templateID, params)
  //     alert('送信成功')
  //   } catch (error) {
  //     alert(error)
  //     console.log(error)
  //   }
  // }
  // } 
  
  return (
    <>
    <SContainer >
      <ThemeProvider theme={theme} >
      <form ref={form} onSubmit={sendEmail}>
        <InputForm 
          label="お名前" 
          name="user_name" 
          color="neutral" 
          type="text" 
          fullWidth="true"

          onChange={(e) => setName(e.target.value)}
          value={name} 
          />
        {/* <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" /> */}
        <br />
        <br />
        <InputForm 
          label="メールアドレス" 
          name="user_email" 
          color="neutral" 
          type="email" 
          fullWidth="true"

          onChange={(e) => setEmail(e.target.value)}
          value={email} 
           />
        <br />
        <br />
        <InputForm 
          label="お問い合わせ内容" 
          multiline
          rows={10}
          color="neutral"
          type="text"
          name="message"
          fullWidth="true"

          onChange={(e) => setContent(e.target.value)}
          value={content} 
          />
          <br />
          <br />
        <FormButton endIcon={<SendIcon/ >} color="neutral" type="submit" value="Send" disabled={disabledSend}>
          送信する
        </FormButton>
      </form>
      </ThemeProvider>
    </SContainer>
    </>
  )
}

const SContainer = styled.div`
  background-color: #3d3c3c;
  display: flex;
  width: 700px;
  flex-direction: column;
  margin: auto;
  margin-bottom: 200px;
  padding: 20px;
  border-radius: 5px;
  color: #ffffff;
`;


