import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null); // true | false

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        e.target,
        'YOUR_USER_ID'
      ).then((res) => {
        if(res.status === 200){
          setSubmissionSuccess(true);
        } else {
          throw new Error("Something went wrong");
        }
      }).catch((err) => {
        console.error(err);
        setSubmissionSuccess(false);
      }).finally(() => {
        setIsSubmitting(false);
      });
    } catch (err) {
      console.error(err);
      setSubmissionSuccess(false);
    }
  };

  return (
    <>
      {submissionSuccess === null && (
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Имя:</label><br />
          <input type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
          
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
          
          <label htmlFor="message">Сообщение:</label><br />
          <textarea id="message" name="message_html" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br />
          
          <button disabled={isSubmitting}>{isSubmitting ? 'Отправляем...' : 'Отправить'}</button>
        </form>
      )}
      {submissionSuccess !== null && submissionSuccess && <p style={{ color: 'green' }}>Ваше сообщение успешно отправлено!</p>}
      {submissionSuccess !== null && !submissionSuccess && <p style={{ color: 'red' }}>Ошибка отправки сообщения.</p>}
    </>
  );
};

export default Form;