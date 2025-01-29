"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const PartnerSignup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('businessName', formData.businessName);
      formPayload.append('email', formData.email);
      formPayload.append('contactNumber', formData.contactNumber);
      formPayload.append('selling', formData.selling);
      if (formData.storePhoto) {
        formPayload.append('storePhoto', formData.storePhoto);
      }

      const response = await fetch('/api/partner-signup', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Submission failed - please try again');
      }

      // Reset form on success
      setFormData({
        name: '',
        businessName: '',
        email: '',
        contactNumber: '',
        selling: '',
        storePhoto: null,
      });
      
      alert('Application submitted successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white/50 backdrop-blur-sm">
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
        Join Our Partner Network
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto border-b border-blue-200/50 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="businessName">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="selling">
            What products/services do you offer?
          </label>
          <textarea
            name="selling"
            value={formData.selling}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md h-32"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="storePhoto">
            Upload Store Photo
          </label>
          <input
            type="file"
            name="storePhoto"
            onChange={handleChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default PartnerSignup;
