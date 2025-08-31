import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const form = useRef();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (value.trim() === '') {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

   
    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };


  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => setStatus(''), 5000);
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send message. Please try again later.');

          setTimeout(() => setStatus(''), 5000);
          setLoading(false);
        }
      );
  };

  return (
    <div className='contact-section' ref={contactRef}>
      <h1>Contact</h1>

      <div className="contact-info">
        <p>
          <span className='label'>
            <HiOutlineMail className="icon" />
            <span>Email:</span>{' '}
          </span>
          <a href="mailto:betsiosgeorge@gmail.com">betsiosgeorge@gmail.com</a>
        </p>
        <p>
          <span className='label'>
            <FaGithub className="icon" />
            <span>GitHub:</span>{' '}
          </span>
          <a href="https://github.com/georgebetsios" target="_blank" rel="noopener noreferrer">
            github.com/georgebetsios
          </a>
        </p>
        <p>
          <span className='label'>
            <FaLinkedin className="icon" />
            <span>LinkedIn:</span>{' '}
          </span>
          <a href="https://linkedin.com/in/george-betsios" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/george-betsios
          </a>
        </p>
      </div>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error-input' : ''}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" disabled={loading}>
          {loading ? <div className="loader"></div> : 'Send Message'}
        </button>


        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;