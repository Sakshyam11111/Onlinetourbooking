import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Lock, CheckCircle, XCircle, AlertCircle, Mountain, Shield, Star, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUpPage = ({ setUser, setCurrentPage }) => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    country: '',
    agreeTerms: false,
    newsletter: true
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const countries = [
    'Nepal', 'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 
    'Germany', 'France', 'Japan', 'South Korea', 'Singapore', 'Thailand', 'Other'
  ];

  const benefits = [
    { icon: Star, text: 'Exclusive member discounts up to 20%' },
    { icon: Shield, text: 'Priority customer support 24/7' },
    { icon: Users, text: 'Access to exclusive group tours' },
    { icon: Mountain, text: 'Personalized travel recommendations' }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const validatePassword = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setSignUpData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (name === 'password') {
      setPasswordStrength(validatePassword(value));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!signUpData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (signUpData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!signUpData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!signUpData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(signUpData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!signUpData.country) {
      newErrors.country = 'Please select your country';
    }

    if (!signUpData.password) {
      newErrors.password = 'Password is required';
    } else if (signUpData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak. Include uppercase, lowercase, numbers, and special characters.';
    }

    if (!signUpData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (signUpData.password !== signUpData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!signUpData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms and Conditions';
    }

    return newErrors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setUser({ 
      name: signUpData.name, 
      email: signUpData.email,
      country: signUpData.country,
      phone: signUpData.phoneNumber
    });
    
    setIsSubmitting(false);
    setCurrentPage('home');
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    if (passwordStrength === 4) return 'bg-green-500';
    return 'bg-green-600';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return 'Very Weak';
    if (passwordStrength === 2) return 'Weak';
    if (passwordStrength === 3) return 'Medium';
    if (passwordStrength === 4) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Benefits & Branding */}
          <div className="hidden lg:block" data-aos="fade-right">
            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
              <Mountain className="h-16 w-16 text-blue-600 mx-auto mb-4" data-aos="zoom-in" data-aos-delay="200" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Join TourExplorer
              </h1>
              <p className="text-xl text-gray-600">
                Start your adventure with Nepal's most trusted travel companion
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center group" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "TourExplorer made my Nepal adventure absolutely unforgettable. Professional service and amazing experiences!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-2xl mr-3">👩‍💼</div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Sarah Shah</div>
                    <div className="text-sm text-gray-500">Bhaktapur, Nepal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0" data-aos="fade-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8 lg:hidden" data-aos="fade-up" data-aos-delay="100">
                <Mountain className="h-12 w-12 text-blue-600 mx-auto mb-4" data-aos="zoom-in" data-aos-delay="200" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-600">Join thousands of happy travelers</p>
              </div>

              <div className="hidden lg:block text-center mb-8" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
                <p className="text-gray-600">Fill in your details to get started</p>
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="name"
                      value={signUpData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      value={signUpData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={signUpData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                      errors.phoneNumber 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                    }`}
                    placeholder="+977 98XXXXXXXX"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div data-aos="fade-up" data-aos-delay="500">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={signUpData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                      errors.country 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                    }`}
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div data-aos="fade-up" data-aos-delay="600">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={signUpData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.password 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  {signUpData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Password Strength:</span>
                        <span className={`text-xs font-medium ${passwordStrength >= 4 ? 'text-green-600' : passwordStrength >= 3 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div data-aos="fade-up" data-aos-delay="700">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={signUpData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                        errors.confirmPassword 
                          ? 'border-red-300 focus:border-red-500 bg-red-50' 
                          : signUpData.confirmPassword && signUpData.password === signUpData.confirmPassword
                          ? 'border-green-300 focus:border-green-500 bg-green-50'
                          : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    {signUpData.confirmPassword && signUpData.password === signUpData.confirmPassword && (
                      <CheckCircle className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />
                    )}
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Newsletter */}
                <div data-aos="fade-up" data-aos-delay="800">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={signUpData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-3 text-sm text-gray-600">
                        I agree to the{' '}
                        <button type="button" className="text-blue-600 hover:underline font-medium">
                          Terms and Conditions
                        </button>{' '}
                        and{' '}
                        <button type="button" className="text-blue-600 hover:underline font-medium">
                          Privacy Policy
                        </button>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                    </div>
                    {errors.agreeTerms && (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.agreeTerms}
                      </p>
                    )}
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={signUpData.newsletter}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-3 text-sm text-gray-600">
                        Subscribe to our newsletter for exclusive offers and travel tips
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div data-aos="fade-up" data-aos-delay="900">
                  <button
                    type="button"
                    onClick={handleSignUp}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setCurrentPage('login')}
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;