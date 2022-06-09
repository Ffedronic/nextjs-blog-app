import ContactForm from "../../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

/**
 * It returns a component called ContactForm.
 * @returns The ContactForm component.
 */
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send me your messages!" />
      </Head>{" "}
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
