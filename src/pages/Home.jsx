import { Link } from "react-router-dom";
import styles from "../css/LandingPage.module.css";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Users,
  Laptop,
  Clock,
} from "lucide-react";

function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <MessageSquare style={{ height: "45px", width: "45px" }} />
          <h1>InterviewPro</h1>
        </div>
        <div className={styles.navLinks}>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Your AI-Powered Interview Partner</h1>
        <p>Practice, Improve, and Succeed in Your Next Job Interview</p>
        <Link to="/signup" className={styles.text_r}>
          <button className={styles.ctaButton}>
            Get Started <ArrowRight />
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why Choose InterviewPro?</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <CheckCircle />
            <h3>Real-time AI Feedback</h3>
            <p>
              Get instant feedback on your answers and improve your responses.
            </p>
          </div>
          <div className={styles.feature}>
            <Users />
            <h3>Mock Interviews</h3>
            <p>Simulate real interview scenarios tailored to your job role.</p>
          </div>
          <div className={styles.feature}>
            <Laptop />
            <h3>Interview Analytics</h3>
            <p>Track your performance with detailed analytics and insights.</p>
          </div>
          <div className={styles.feature}>
            <Clock />
            <h3>24/7 Accessibility</h3>
            <p>Practice anytime, anywhere with our AI-powered platform.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} InterviewPro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
