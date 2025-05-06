import React, { useState } from 'react';

const RegisterForm = ({ 
    buttonText = "Register Now", 
    modalTitle = "Registration Form", 
    onSubmitSuccess,
    initialData = {},
    className = "" 
}) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [formData, setFormData] = useState({
                name: initialData.name || '',
                email: initialData.email || '',
                organization: initialData.organization || '',
                phone: initialData.phone || ''
        });
        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData({
                        ...formData,
                        [name]: value
                });
        };

        const validateForm = () => {
                let tempErrors = {};
                let isValid = true;

                if (!formData.name.trim()) {
                        tempErrors.name = "Name is required";
                        isValid = false;
                }

                if (!formData.email.trim()) {
                        tempErrors.email = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                        tempErrors.email = "Please enter a valid email";
                        isValid = false;
                }

                if (!formData.organization.trim()) {
                        tempErrors.organization = "College/Organization is required";
                        isValid = false;
                }

                if (!formData.phone.trim()) {
                        tempErrors.phone = "Phone number is required";
                } else if (!/^\d{10}$/.test(formData.phone)) {
                        tempErrors.phone = "Please enter a valid 10-digit phone number";
                        isValid = false;
                }

                setErrors(tempErrors);
                return isValid;
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                
                if (validateForm()) {
                        console.log("Form submitted:", formData);
                        
                        // Call the onSubmitSuccess callback if provided
                        if (onSubmitSuccess) {
                                onSubmitSuccess(formData);
                        }
                        
                        setFormData({ name: '', email: '', organization: '', phone: '' });
                        closeModal();
                }
        };

        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

        return (
                <div className={`${className}`}>
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300" 
                            onClick={openModal}
                        >
                                {buttonText}
                        </button>

                        {isModalOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
                                                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                                                        <h2 className="text-xl font-semibold text-gray-800">{modalTitle}</h2>
                                                        <button 
                                                            className="text-gray-400 hover:text-gray-600 text-2xl font-bold" 
                                                            onClick={closeModal}
                                                        >
                                                            &times;
                                                        </button>
                                                </div>
                                                
                                                <form onSubmit={handleSubmit} className="p-6">
                                                        <div className="mb-4">
                                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Full Name
                                                                </label>
                                                                <input
                                                                        type="text"
                                                                        id="name"
                                                                        name="name"
                                                                        value={formData.name}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter your full name"
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                />
                                                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                                                        </div>
                                                        
                                                        <div className="mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Email
                                                                </label>
                                                                <input
                                                                        type="email"
                                                                        id="email"
                                                                        name="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter your email address"
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                />
                                                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                                                        </div>
                                                        
                                                        <div className="mb-4">
                                                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                                                                    College/Organization
                                                                </label>
                                                                <input
                                                                        type="text"
                                                                        id="organization"
                                                                        name="organization"
                                                                        value={formData.organization}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter your college or organization"
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                />
                                                                {errors.organization && <span className="text-red-500 text-xs mt-1">{errors.organization}</span>}
                                                        </div>
                                                        
                                                        <div className="mb-4">
                                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Phone Number
                                                                </label>
                                                                <input
                                                                        type="tel"
                                                                        id="phone"
                                                                        name="phone"
                                                                        value={formData.phone}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter your 10-digit phone number"
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                />
                                                                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                                                        </div>
                                                        
                                                        <div className="flex justify-end space-x-3 mt-6">
                                                                <button 
                                                                    type="button" 
                                                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300" 
                                                                    onClick={closeModal}
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button 
                                                                    type="submit" 
                                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                >
                                                                    Register
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                        )}
                </div>
        );
};

export default RegisterForm;