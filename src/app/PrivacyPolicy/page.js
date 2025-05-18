import React from "react";
import styles from "./PrivacyPolicy.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import Images from "../Utils/Images";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader
        image={Images.uniqueImg}
        title={"Privacy Policy"}
        description={
          "Your trust is our priority. Learn how we protect your personal information."
        }
      />

      <div className={styles.privacyContainer}>
        <section className={styles.policySection}>
          <h2>Effective Date</h2>
          <p>
            <strong>[Insert Date]</strong>
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>Full name</li>
            <li>Contact details (phone, email, address)</li>
            <li>Identification details for bookings</li>
            <li>Payment information (securely processed)</li>
            <li>Location data for service delivery</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Manage bookings and reservations</li>
            <li>Communicate service details</li>
            <li>Provide customer support</li>
            <li>Improve our offerings and site</li>
            <li>Comply with legal requirements</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal data. We may share it with
            trusted partners and authorities if legally required.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement robust technical measures to protect your data. Still,
            no internet transmission is 100% secure.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your data. Email us
            at <strong>[insert email]</strong> for such requests.
          </p>

          <h2>6. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance user experience. You may adjust settings
            in your browser at any time.
          </p>

          <h2>7. Changes to Policy</h2>
          <p>
            We may update this policy. Changes will be posted with the latest
            effective date at the top of the page.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            📧 Email: needhelp@dreamdiscover.pk <br />
            📞 Phone: +92 331 8809581
            <br />
            📍 Address: [insert address]
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
