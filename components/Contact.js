import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Membership query');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, subject, query })
      })

      const data = await response.json();

      if (response.status === 200) {
        setMessage('Email sent successfully');
        setEmail('');
        setName('');
        setSubject('Membership query');
        setQuery('');
      }
      else {
        setMessage('Error sending email');
      }
    }
    catch (error) {
      setMessage('An error occurred while sending the email');
    }
  }

  return (
    <section id="contact">
      <div className="container-lg">
        <div className="text-center">
          <h2>Get in Touch</h2>
          <p className="lead">Questions to ask? Fill out the form to contact me directly...</p>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="form-label">Email address:</label>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill text-secondary"></i>
                </span>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="e.g. william@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text">
                  <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                    <i className="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <label htmlFor="name" className="form-label">Name:</label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill text-secondary"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="e.g. William"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input-group-text">
                  <span className="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                    <i className="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>

              <label htmlFor="subject" className="form-label">What is your question about?</label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-chat-right-dots-fill text-secondary"></i>
                </span>
                <select
                  className="form-select"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="pricing">Membership query</option>
                  <option value="content">Content query</option>
                  <option value="other">Other query</option>
                </select>
              </div>
              <div className="mb-4 mt-5 form-floating">
                <textarea
                  className="form-control"
                  id="query"
                  style={{ height: 140 + 'px' }}
                  placeholder="query"
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></textarea>
                <label htmlFor="query">Your query...</label>
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
