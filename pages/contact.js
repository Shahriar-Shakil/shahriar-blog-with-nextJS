import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
