import { Link } from "react-router-dom"
import styles from "../css/LandingPage.module.css"
import { MessageSquare, ArrowRight, Users, Mic, BarChart, Award } from "lucide-react"
import VapiConversation from "./VapiConversation"

function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <MessageSquare className={styles.logoIcon} />
          <h1>InterviewPro</h1>
        </div>
        <div className={styles.navLinks}>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup" className={styles.signupBtn}>
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ace Your Next Interview with AI</h1>
          <p>
            Practice with personalized mock interviews, receive real-time feedback, and track your progress to land your
            dream job.
          </p>
          <div className={styles.heroCta}>
            <Link to="/signup">
              <button className={styles.ctaButton}>
                Get Started <ArrowRight className={styles.ctaIcon} />
              </button>
            </Link>
            <Link to="/about" className={styles.secondaryLink}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/placeholder.svg?height=400&width=400" alt="Interview simulation" className={styles.mainImage} />
        </div>
      </header>

      {/* Demo Section */}
      <section className={styles.demoSection}>
        <h2>Try Our Interview Assistant</h2>
        <p className={styles.demoDescription}>
          Experience how our AI-powered interview assistant works. Start an interview and practice your skills!
        </p>
        <VapiConversation />
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create Your Profile</h3>
            <p>Tell us about your target role, experience level, and tech stack</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Start Your Interview</h3>
            <p>Answer AI-generated questions tailored to your specific job</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Get Feedback</h3>
            <p>Receive detailed analysis and suggestions for improvement</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Track Progress</h3>
            <p>Monitor your improvement over time with detailed analytics</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why Choose InterviewPro?</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <div className={styles.featureIconWrapper}>
              <Mic className={styles.featureIcon} />
            </div>
            <h3>Voice-Based Interviews</h3>
            <p>Practice speaking your answers out loud for a realistic interview experience</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIconWrapper}>
              <Users className={styles.featureIcon} />
            </div>
            <h3>Role-Specific Questions</h3>
            <p>Get questions tailored to your exact job role and experience level</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIconWrapper}>
              <BarChart className={styles.featureIcon} />
            </div>
            <h3>Detailed Analytics</h3>
            <p>Track your performance with comprehensive reports and insights</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIconWrapper}>
              <Award className={styles.featureIcon} />
            </div>
            <h3>AI-Powered Feedback</h3>
            <p>Get personalized suggestions to improve your interview skills</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>Success Stories</h2>
        <div className={styles.testimonialList}>
          <div className={styles.testimonial}>
            <p>
              "InterviewPro helped me prepare for my software engineering interview at Google. The AI feedback was spot
              on!"
            </p>
            <div className={styles.testimonialAuthor}>
              <img src="/placeholder.svg?height=50&width=50" alt="User avatar" className={styles.testimonialAvatar} />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Software Engineer at Google</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <p>
              "After practicing with InterviewPro for two weeks, I felt so much more confident. I got the job on my
              first try!"
            </p>
            <div className={styles.testimonialAuthor}>
              <img src="/placeholder.svg?height=50&width=50" alt="User avatar" className={styles.testimonialAvatar} />
              <div>
                <h4>Michael Chen</h4>
                <p>Data Scientist at Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to ace your next interview?</h2>
        <p>Join thousands of job seekers who have improved their interview skills with InterviewPro</p>
        <Link to="/signup">
          <button className={styles.ctaButton}>
            Start Practicing Now <ArrowRight className={styles.ctaIcon} />
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <MessageSquare className={styles.footerLogoIcon} />
            <h2>InterviewPro</h2>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <h3>Product</h3>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
            <div className={styles.footerLinkGroup}>
              <h3>Company</h3>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.footerLinkGroup}>
              <h3>Resources</h3>
              <Link to="/blog">Blog</Link>
              <Link to="/guides">Interview Guides</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} InterviewPro. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

