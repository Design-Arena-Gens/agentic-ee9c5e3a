'use client';

import { BookOpen, Briefcase, Award, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Learner Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Courses Enrolled</div>
              <BookOpen className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-sm text-green-600 mt-1">+1 this month</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Completed</div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-500 mt-1">33% completion rate</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Certificates</div>
              <Award className="h-5 w-5 text-security-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-500 mt-1">SIA Door Supervision</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Learning Hours</div>
              <Clock className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">24</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Continue Learning</h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Security Guarding License</h3>
                      <p className="text-sm text-gray-600">SIA License Course</p>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">In Progress</span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Module 4 of 6</div>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm font-medium">
                      Continue
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">CCTV Operations</h3>
                      <p className="text-sm text-gray-600">SIA License Course</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Not Started</span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Module 0 of 5</div>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm font-medium">
                      Start Course
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Jobs</h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">Security Officer - Retail</h3>
                      <p className="text-sm text-gray-600">SecureCorp Ltd</p>
                    </div>
                    <span className="text-sm font-semibold text-green-600">95% Match</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">London</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Full-time</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">£24,000 - £28,000</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Posted 2 days ago</div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      View Details →
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">Door Supervisor - Nightclub</h3>
                      <p className="text-sm text-gray-600">Elite Security Services</p>
                    </div>
                    <span className="text-sm font-semibold text-green-600">88% Match</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Manchester</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Part-time</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">£12.50/hour</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Posted 5 days ago</div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse Courses
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition font-medium flex items-center justify-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Find Jobs
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition font-medium flex items-center justify-center">
                  <Award className="h-5 w-5 mr-2" />
                  My Certificates
                </button>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Course Completed</div>
                    <div className="text-xs text-gray-600">Door Supervision License</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">First Course Started</div>
                    <div className="text-xs text-gray-600">Welcome to learning!</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">10 Hours Learning</div>
                    <div className="text-xs text-gray-600">Keep up the momentum!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg p-6 text-white">
              <h2 className="text-lg font-semibold mb-2">Learning Streak</h2>
              <div className="text-4xl font-bold mb-2">7 Days</div>
              <p className="text-primary-100 text-sm">You're on fire! Keep it up to unlock rewards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
