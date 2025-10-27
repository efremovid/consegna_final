import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_1c9a5nh",
        "template_gi49ubk",
        formData,
        "1kda-ZhvUJ74El36S"
      )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        setSubmissionSuccess(true);
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        setTimeout(() => setSubmissionSuccess(null), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSubmissionSuccess(false);
        setTimeout(() => setSubmissionSuccess(null), 3000);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={sendEmail} className={styles.form}>
        <h2 className={styles.title}>Нужна констультация?</h2>
        <p>Оставьте заявку и наш менеджер свяжется с вами в ближайшее время!</p>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="ФИО"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Телефон"
          required
        />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Текст вашего сообщения"
          rows="5"
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправляем..." : "Получить консультацию"}
        </button>
        {submissionSuccess === true && (
          <p className={styles.success}>
            ✅ Ваше сообщение успешно отправлено!
          </p>
        )}
        {submissionSuccess === false && (
          <p className={styles.error}>
            ❌ Ошибка отправки сообщения. Попробуйте позже.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
