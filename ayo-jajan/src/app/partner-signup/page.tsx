import { useState, type ChangeEvent, type FormEvent } from "react";

const PartnerSignup: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    businessName: string;
    email: string;
    contactNumber: string;
    selling: string;
    storePhoto: File | null;
  }>({
    name: "",
    businessName: "",
    email: "",
    contactNumber: "",
    selling: "",
    storePhoto: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Partner Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="selling">What are you selling:</label>
          <textarea
            name="selling"
            value={formData.selling}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="storePhoto">Store Photo:</label>
          <input
            type="file"
            name="storePhoto"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PartnerSignup;
