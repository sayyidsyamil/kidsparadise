import { useState } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=60187895960&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    const mailtoUrl = `mailto:kidsparadisecc@gmail.com?subject=Contact from Website&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="flex flex-col ">
      <main className="flex-1" />
      

      <section className="p-6 md:p-24 w-full">
        <div className="container max-w-7xl grid gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Contact Kids Paradise</h2>
            <p>
              Have a question or want to learn more about our programs? Fill out the form below and we'll get back to
              you as soon as possible.
            </p>
          </div>
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppClick(); // Or handleEmailClick() based on your needs
            }}
          >
            <Textarea
              placeholder="Your message..."
              className="min-h-[120px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                onClick={handleWhatsAppClick}
                variant="outline"
                className="flex-1"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                type="button"
                onClick={handleEmailClick}
                className="flex-1 bg-[#E6B57B]"
              >
                <MailIcon className="h-5 w-5 mr-2" />
                Email
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
