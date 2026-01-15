'use client';

import { Users, BookOpen, Briefcase, TrendingUp, DollarSign, Award } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const enrollmentData = [
  { month: 'Jan', enrollments: 120 },
  { month: 'Feb', enrollments: 180 },
  { month: 'Mar', enrollments: 240 },
  { month: 'Apr', enrollments: 310 },
  { month: 'May', enrollments: 380 },
  { month: 'Jun', enrollments: 450 },
];

const revenueData = [
  { month: 'Jan', revenue: 16800 },
  { month: 'Feb', revenue: 25200 },
  { month: 'Mar', revenue: 33600 },
  { month: 'Apr', revenue: 43400 },
  { month: 'May', revenue: 53200 },
  { month: 'Jun', revenue: 63000 },
];

const courseDistribution = [
  { name: 'Door Supervision', value: 450, color: '#0ea5e9' },
  { name: 'Security Guarding', value: 380, color: '#d946ef' },
  { name: 'CCTV Operations', value: 280, color: '#0369a1' },
  { name: 'Close Protection', value: 120, color: '#701a75' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 12 months</option>
                <option>All time</option>
              </select>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm font-medium">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Users</div>
              <Users className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">5,247</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">12.5%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Active Enrollments</div>
              <BookOpen className="h-5 w-5 text-security-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">1,230</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">8.3%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Monthly Revenue</div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">£63,000</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">18.4%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Job Placements</div>
              <Briefcase className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">412</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">15.2%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Enrollment Trend */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="enrollments" stroke="#0ea5e9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#d946ef" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course Distribution & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Course Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Course Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {courseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Certifications */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Certifications</h2>
            <div className="space-y-4">
              {[
                { name: 'John Smith', course: 'Door Supervision', time: '2 hours ago' },
                { name: 'Sarah Johnson', course: 'Security Guarding', time: '4 hours ago' },
                { name: 'Michael Brown', course: 'CCTV Operations', time: '6 hours ago' },
                { name: 'Emma Davis', course: 'Door Supervision', time: '8 hours ago' },
                { name: 'James Wilson', course: 'Security Guarding', time: '10 hours ago' },
              ].map((cert, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Award className="h-4 w-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{cert.name}</div>
                      <div className="text-xs text-gray-600">{cert.course}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{cert.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Management Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">User Management</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">View All Users</div>
                <div className="text-xs text-gray-600">5,247 total users</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Pending Verifications</div>
                <div className="text-xs text-gray-600">23 awaiting approval</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Instructor Applications</div>
                <div className="text-xs text-gray-600">8 new applications</div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Course Management</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">View All Courses</div>
                <div className="text-xs text-gray-600">42 active courses</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Create New Course</div>
                <div className="text-xs text-gray-600">Add course content</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Review Feedback</div>
                <div className="text-xs text-gray-600">156 reviews pending</div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Management</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Active Job Postings</div>
                <div className="text-xs text-gray-600">187 open positions</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Pending Approvals</div>
                <div className="text-xs text-gray-600">12 jobs awaiting review</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                <div className="font-medium text-gray-900 text-sm">Employer Accounts</div>
                <div className="text-xs text-gray-600">234 registered employers</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
