import classNames from 'classnames';
import { Button } from 'components/Button';
import React from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClasses = 'p-2 border rounded-lg hover:outline hover:outline-1 hover:outline-slate-950';
  const labelClasses = 'font-semibold';

  return (
    <form className="flex flex-col max-w-xl mx-auto gap-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-2">
        <label className={labelClasses} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputClasses}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className={labelClasses} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputClasses}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className={labelClasses} htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className={classNames('resize-none h-24 border rounded-lg', inputClasses)}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export { ContactForm };
