import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Signup.module.css";
import {
  MessageSquare,
  ArrowLeft,
  Eye,
  EyeOff,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form - would connect to Firebase in a real implementation
      console.log("Form submitted:", formData);
      // Redirect or show success message
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <div className={styles.signupForm}>
          <div className={styles.formHeader}>
            <Link to="/" className={styles.backLink}>
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div className={styles.logo}>
              <MessageSquare className={styles.logoIcon} />
              <h1>InterviewPro</h1>
            </div>
          </div>

          <h2>Login to your account</h2>
          <p className={styles.subtitle}>
            Start practicing for your dream job interviews
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordInput}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? styles.inputError : ""}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <span className={styles.errorMessage}>{errors.password}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <p className={styles.loginLink}>
            Don't have an account yet? <Link to="/signup">Signup</Link>
          </p>
        </div>

        <div className={styles.signupImage}>
          <div className={styles.imageContent}>
            <h2>Prepare with confidence</h2>
            <p>
              Join thousands of job seekers who have improved their interview
              skills and landed their dream jobs
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>AI-powered interview questions</span>
              </div>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Real-time feedback on your answers</span>
              </div>
              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Track your progress over time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
