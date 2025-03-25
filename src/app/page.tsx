"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/Components/Modal";

const WelcomePage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const researchAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Quantum Computing",
    "Climate Science",
    "Biotechnology",
    "Renewable Energy",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-purple-100">
      {/* Header Navigation */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-600 transform transition duration-500 hover:scale-105">
          IRISMS
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 text-yellow-600 hover:text-indigo-800 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Register
          </button>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative bg-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover Your Research Journey
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              Connect with leading professors, find research internships, and
              explore scholarship opportunities.
            </p>

            {/* Search Bar (inspired by Naukri) */}
            <div className="bg-white rounded-lg shadow-xl p-2 flex items-center transition-all duration-500 hover:shadow-2xl">
              <svg
                className="ml-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by research area, professor, or keyword..."
                className="w-full py-3 px-4 outline-none text-gray-700 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105">
                Search
              </button>
            </div>

            {/* Popular Search Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-yellow-200 mr-2">
                Popular Areas:
              </span>
              {researchAreas.map((area, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-yellow-800 bg-opacity-50 rounded-full text-sm hover:bg-indigo-700 transition-colors duration-300"
                  onClick={() => setSearchQuery(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How We Help Your Academic Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature Cards with Hover Animations */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Connect with Professors
              </h3>
              <p className="text-gray-600 text-center">
                Explore profiles of leading professors and researchers across
                various disciplines and universities worldwide.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto bg-purple-500 text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Research Internships
              </h3>
              <p className="text-gray-600 text-center">
                Find and apply for research internships that match your academic
                interests and career goals with our advanced matching system.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto bg-green-500 text-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Scholarship Opportunities
              </h3>
              <p className="text-gray-600 text-center">
                Discover scholarships and grants to fund your education and
                research endeavors from national and international
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Professors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Featured Professors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with leading researchers and academics who are at the
            forefront of innovation and discovery.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Professor Cards with Hover Effects */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <img
                    src={`https://picsum.photos/200/200?random=${item}`}
                    alt="Professor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1">
                  Prof. Sarah Johnson
                </h3>
                <p className="text-sm text-gray-500 mb-2">Quantum Computing</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  3 Open Positions
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white border border-yellow-600 text-yellow-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors duration-300">
              View All Professors
            </button>
          </div>
        </div>
      </section>

      {/* Recent Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Latest Research Opportunities
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Stay updated with the newest research internships and projects
                available across various universities and research institutions.
              </p>

              <div className="space-y-4">
                {/* Opportunity Items with Hover Effect */}
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-50 rounded-lg p-5 flex items-start border-l-4 border-yellow-500 transform transition-all duration-300 hover:-translate-x-1 hover:shadow-md"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">
                        Research Assistant in Data Science
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        Department of Computer Science
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="mr-3">Duration: 6 months</span>
                        <span>Stipend: $1000/month</span>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Browse All Opportunities
              </button>
            </div>

            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-200 rounded-lg transform rotate-3 transition-transform duration-700 group-hover:rotate-6"></div>
                <img
                  src="https://picsum.photos/500/600"
                  alt="Research"
                  className="relative rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Research Journey?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-yellow-100">
            Join thousands of students and professors already using our platform
            to connect and collaborate.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 bg-white text-yellow-600 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">For Students</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Find Internships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Research Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">For Professors</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Post Opportunities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Find Research Assistants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Grants
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Academic Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Research Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p>
              © 2025 Integrated Research Internship and Scholarship Management
              System
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {showModal && (
        <Modal
          title="Register As:"
          options={[
            {
              label: "Student",
              onClick: () => {
                setShowModal(false);
                router.push("/register-students");
              },
            },
            {
              label: "Professor",
              onClick: () => {
                setShowModal(false);
                router.push("/register-faculty");
              },
            },
          ]}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Add custom animations for delay effects */}
      <style jsx>{`
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;
