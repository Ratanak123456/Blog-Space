'use client';
import React, { useState, type JSX } from "react";
import membersData from "@/data/members.json"; // Correct relative path
import type { teamMembers } from "@/types/teamMembers";
import Members from "@/components/card/MemberCard";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact(): JSX.Element {
  const [showAll] = useState("All");
  const members: teamMembers[] = membersData;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // simulate submit
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="px-6 bg-(--bg-primary) transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-(--accent) mb-6">
            Get In Touch
          </h1>
          <p className="text-2xl text-(--text-secondary) max-w-4xl mx-auto">
            Connect with our writing community. We're here to help you share your stories and grow as a writer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form & Info */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-(--bg-secondary) rounded-3xl shadow-2xl p-10 border border-(--border)"
            >
              <h2 className="text-3xl font-bold mb-8 text-(--text-primary)">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-(--text-primary) mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-(--border) rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) bg-(--bg-primary) text-(--text-primary)"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-(--text-primary) mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-(--border) rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) bg-(--bg-primary) text-(--text-primary)"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-(--text-primary) mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-(--border) rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) bg-(--bg-primary) text-(--text-primary)"
                    placeholder="Tell us about your writing journey or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-(--accent) text-white py-4 px-6 rounded-xl hover:bg-(--accent-hover) disabled:bg-opacity-60 transition duration-300 font-bold text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <FaLocationDot className="text-lg" />,
                  title: "Visit Us",
                  desc: "123 Storyteller Lane, Creative City, CC 12345",
                },
                {
                  icon: <FaPhone className="text-lg" />,
                  title: "Call Us",
                  desc: "+1 (555) 123-4567",
                },
                {
                  icon: <IoMdMail className="text-lg" />,
                  title: "Email Us",
                  desc: "hello@blogplatform.com",
                },
              ].map((info, index) => (
                <div
                  key={index}
                  className="bg-(--bg-secondary) rounded-2xl shadow-lg p-6 text-center border border-(--border)"
                >
                  <div className="w-14 h-14 bg-(--accent) text-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-(--text-primary) mb-2 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-(--text-secondary) text-base">
                    {info.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-(--bg-secondary) rounded-3xl shadow-2xl p-10 border border-(--border) h-[800px] overflow-y-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-(--text-primary)">
              Meet Our Team
            </h2>
            <p className="text-(--text-secondary) mb-8 text-lg">
              Our dedicated team of {members.length} writers, editors, and community builders work together to create the best platform for storytellers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(showAll === "All" || showAll === "Members") && (
                <>
                  {members.map((member, idx) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-full"
                    >
                      <Members {...member} />
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}