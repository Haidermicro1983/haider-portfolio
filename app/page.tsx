"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, easeOut } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const dashboardImages = [
    { src: "/dashboards/Clustering_of_Employees_who_left.png", title: "Clustering of Employees who left" },
    { src: "/dashboards/Employee_Project_Count.png", title: "Employee Project Count" },
    { src: "/dashboards/Distribution_of_employee_Average_Monthly.png", title: "Distribution of Employee Average Monthly" },
    { src: "/dashboards/Monthly_revenue_by_state.png", title: "Monthly Revenue by State" },
    { src: "/dashboards/Group-wise_Sales_Analysis_across_States.png", title: "Group-wise Sales Analysis across States" },
    { src: "/dashboards/Revenue_distribution.png", title: "Revenue Distribution" }
  ];

  const sectionMotionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: easeOut }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">

      {/* Hero Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-24 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Haider Tememi
        </motion.h1>
        <p className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
          Business Analyst / Data Analyst
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
          I bridge business needs and data-driven solutions by transforming complex datasets into actionable insights, scalable dashboards, and efficient processes.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button asChild className="px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
            <a href="https://linkedin.com/in/haider-tememi-ht" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild variant="outline" className="px-6 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300">
            <a href="/Haider_Tememi_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-3xl shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
            <h3 className="text-4xl font-bold mb-2">15%</h3>
            <p className="text-slate-600">Inventory Loss Reduction</p>
          </div>
          <div className="p-6 rounded-3xl shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
            <h3 className="text-4xl font-bold mb-2">4+ Years</h3>
            <p className="text-slate-600">Analytics Experience</p>
          </div>
          <div className="p-6 rounded-3xl shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
            <h3 className="text-4xl font-bold mb-2">Real-Time</h3>
            <p className="text-slate-600">Executive Dashboards</p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Data & Analytics", items: ["SQL (Oracle, PostgreSQL)", "Python", "R", "Statistical Analysis", "ETL Pipelines"] },
              { title: "BI & Reporting", items: ["Power BI", "Tableau", "DAX", "Crystal Reports", "KPI Dashboards"] },
              { title: "Business & Tools", items: ["Requirements Gathering", "Process Documentation", "Jira", "Advanced Excel", "Stakeholder Communication"] },
            ].map((skill) => (
              <Card key={skill.title} className="rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
                <CardContent className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{skill.title}</h3>
                  <ul className="space-y-2 text-slate-600 text-lg">
                    {skill.items.map((item) => (<li key={item}>• {item}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Experience</h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          <Card className="rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
            <CardContent className="p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Data Analyst – Pure-Ion Consultant LLC</h3>
              <p className="text-sm text-slate-500 mb-4">Detroit, MI | May 2021 – Present</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-lg">
                <li>Designed SQL & Python ETL pipelines reducing inventory loss by 15%.</li>
                <li>Built automated Power BI dashboards for real-time KPI tracking.</li>
                <li>Integrated SQL databases and REST APIs into reporting workflows.</li>
                <li>Led user testing, training, and documentation for analytics tools.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
            <CardContent className="p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Phlebotomist – Quest Diagnostics</h3>
              <p className="text-sm text-slate-500 mb-4">Detroit, MI | Oct 2020 – May 2021</p>
              <p className="text-slate-600 text-lg">Maintained accurate laboratory records within LIMS systems and supported data quality and compliance initiatives.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Dashboards Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Analytics Dashboards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dashboardImages.map((img, i) => (
              <Card key={i} className="rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out cursor-pointer" onClick={() => { setIndex(i); setOpen(true); }}>
                <CardContent className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{img.title}</h3>
                  <div className="relative group">
                    <img src={img.src} alt={img.title} className="rounded-xl w-full shadow-sm transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={dashboardImages.map(img => ({ src: img.src, title: img.title }))}
          index={index}
        />
      </motion.section>

      {/* Contact Form Section */}
      <motion.section {...sectionMotionProps} className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Contact Me</h2>
          <form 
            className="grid gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Your message has been sent.');
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium text-slate-700">Name</label>
              <input type="text" id="name" name="name" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium text-slate-700">Email</label>
              <input type="email" id="email" name="email" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows={5} required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" className="px-8 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Send Message</Button>
            </div>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-slate-500 bg-gray-50">
        <p>© {new Date().getFullYear()} Haider Tememi</p>
        <p>Dearborn, MI | hmhassan@umich.edu | 313-580-8571</p>
      </footer>
    </div>
  );
}





