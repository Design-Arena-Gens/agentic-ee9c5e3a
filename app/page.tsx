'use client';

import Link from 'next/link';
import { Shield, BookOpen, Briefcase, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Virpio Security</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#training" className="text-gray-700 hover:text-primary-600 transition">Training</a>
              <a href="#jobs" className="text-gray-700 hover:text-primary-600 transition">Jobs</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-primary-600 transition">
                Sign In
              </Link>
              <Link href="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Security Training & Career Placement
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SIA-accredited courses, expert instruction, and direct pathways to security industry careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/jobs" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15,000+</div>
            <div className="text-primary-100">Trained Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-primary-100">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2,500+</div>
            <div className="text-primary-100">Job Placements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-primary-100">Employer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4" id="training">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Virpio Security</h2>
            <p className="text-xl text-gray-600">Comprehensive training and placement in one platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SIA-Accredited Training</h3>
              <p className="text-gray-600">All courses meet Security Industry Authority standards with industry-recognized certifications</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Job Placement</h3>
              <p className="text-gray-600">Connect with top employers and get matched to roles that fit your qualifications</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry veterans with decades of security experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Online, in-person, and hybrid options to fit your schedule</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Continuous development pathways from entry-level to senior positions</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR Compliant</h3>
              <p className="text-gray-600">Full data protection and privacy compliance for UK and EU regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600">Start your security career with industry-recognized qualifications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700"></div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">SIA LICENCE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Door Supervision</h3>
                <p className="text-gray-600 mb-4">Essential training for working as a licensed door supervisor in the UK</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">4 days</span>
                  <span className="text-sm text-gray-500">£140</span>
                </div>
                <Link href="/courses/door-supervision" className="block text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-security-500 to-security-700"></div>
              <div className="p-6">
                <div className="text-sm text-security-600 font-semibold mb-2">SIA LICENCE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security Guarding</h3>
                <p className="text-gray-600 mb-4">Comprehensive training for security guard positions across all sectors</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">3 days</span>
                  <span className="text-sm text-gray-500">£120</span>
                </div>
                <Link href="/courses/security-guarding" className="block text-center bg-security-600 text-white py-2 rounded-lg hover:bg-security-700 transition">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800"></div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">SIA LICENCE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CCTV Operations</h3>
                <p className="text-gray-600 mb-4">Professional surveillance and monitoring certification</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">3 days</span>
                  <span className="text-sm text-gray-500">£130</span>
                </div>
                <Link href="/courses/cctv-operations" className="block text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Security Career?</h2>
          <p className="text-xl mb-8 text-primary-100">Join thousands of professionals who've launched their careers with Virpio Security</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
              Create Free Account
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
              <span className="text-lg font-bold text-white">Virpio Security</span>
            </div>
            <p className="text-sm text-gray-400">Professional security training and recruitment platform</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Training</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-white transition">All Courses</a></li>
              <li><a href="/courses/sia" className="hover:text-white transition">SIA Licences</a></li>
              <li><a href="/courses/advanced" className="hover:text-white transition">Advanced Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Jobs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/jobs" className="hover:text-white transition">Browse Jobs</a></li>
              <li><a href="/employers" className="hover:text-white transition">For Employers</a></li>
              <li><a href="/application-tracking" className="hover:text-white transition">Track Applications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
          <p>&copy; 2024 Virpio Security. All rights reserved. SIA Approved Contractor Scheme Member.</p>
        </div>
      </footer>
    </div>
  );
}
