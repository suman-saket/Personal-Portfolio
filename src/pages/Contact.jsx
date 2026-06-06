import { inputClassName, mutedText, pageContainer, submitButtonClassName } from '../utils/styles';

function Contact() {

  return (
    <div className={`mt-8 pb-12 ${pageContainer.home}`}>
      <h1 className="text-lg mb-4">Get In Touch</h1>
      <p className="text-lg mb-8 leading-relaxed">
        Have a project in mind or want to collaborate? I'd love to hear from you!
      </p>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-5">Contact Information</h2>
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Email</h3>
            <p className={mutedText}>sumansaket7@gmail.com</p>
          </div>
          {/* <div className="mb-5">
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className={mutedText}>+919534901879</p>
          </div> */}
          {/* <div className="mb-5">
            <h3 className="font-semibold mb-1">Location</h3>
            <p className={mutedText}>Bengaluru, India</p>
          </div> */}
        </div>

        {/* <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-1.5 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClassName}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-1.5 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClassName}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-1.5 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`${inputClassName} min-h-[120px] resize-y`}
              required
            ></textarea>
          </div>
          <button type="submit" className={submitButtonClassName}>
            Send Message
          </button>
        </form> */}
      </section>
    </div>
  );
}

export default Contact;
