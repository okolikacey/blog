import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function Contact(props) {
  return (
    <>
      <Head>
        <title>Contact Me!</title>
        <meta name="description" content="Send in your messages" />
      </Head>
      <ContactForm />
    </>
  );
}

export default Contact;
