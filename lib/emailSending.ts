import emailjs from "@emailjs/browser";
import config from "./config";

// Initialize EmailJS with the userID from the config
emailjs.init({
  publicKey: config.env.emailjs.userId,
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const sendSignInEmail = (userName: string, userEmail: string) => {
  const serviceID = config.env.emailjs.signInServiceId;
  const templateID = config.env.emailjs.signInTemplateId;

  // Set the recipients dynamically, could be the user's email or another recipient
  const recipients = userEmail; // For simplicity, sending to the user

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    recipients: recipients, // Pass the recipient email dynamically here
  };

  // Send email via EmailJS
  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log(
        "Sign-in email sent successfully:",
        response.status,
        response.text
      );
    })
    .catch((error) => {
      console.error("Error sending sign-in email:", error);
    });
};

const sendSignUpEmail = (userName: string, userEmail: string) => {
  const serviceID = config.env.emailjs.signUpServiceId;
  const templateID = config.env.emailjs.signUpTemplateId;

  // Set the recipients dynamically, could be the user's email or another recipient
  const recipients = userEmail; // For simplicity, sending to the user

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    recipients: recipients, // Pass the recipient email dynamically here
  };

  // Send email via EmailJS
  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log(
        "Sign-up email sent successfully:",
        response.status,
        response.text
      );
    })
    .catch((error) => {
      console.error("Error sending sign-up email:", error);
    });
};

export { sendSignInEmail, sendSignUpEmail };
