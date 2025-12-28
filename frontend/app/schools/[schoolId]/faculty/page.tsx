'use client';

import React from 'react';
import Link from 'next/link';
import { UserCog, BookOpen, ChevronLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function FacultyLoginSelection() {
    const router = useRouter();
    const params = useParams();
    const schoolId = params.schoolId as string;
    const schoolName = schoolId ? schoolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'School';

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 flex flex-col items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl w-full border border-white/20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Faculty Access
                    </h1>
                    <p className="text-lg text-blue-100 font-medium max-w-2xl mx-auto">
                        Please select your role at {schoolName}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Admin Login Option */}
                    <Link
                        href="/school-admin-login"
                        className="group relative bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-indigo-100 p-5 rounded-full mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                <UserCog className="w-12 h-12 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Login</h2>
                            <p className="text-gray-500 text-sm">Manage school operations, staff, and overall administration</p>
                            <div className="mt-6 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                Continue as Admin →
                            </div>
                        </div>
                    </Link>

                    {/* Teacher Login Option */}
                    <Link
                        href="/teacher-login"
                        className="group relative bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-teal-100 p-5 rounded-full mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                                <BookOpen className="w-12 h-12 text-teal-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Teacher Login</h2>
                            <p className="text-gray-500 text-sm">Access coursework, grading, and student management tools</p>
                            <div className="mt-6 px-6 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                Continue as Teacher →
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => router.back()} className="inline-flex items-center text-blue-200 hover:text-white transition-colors font-medium">
                        <ChevronLeft size={20} className="mr-1" /> Back to Role Selection
                    </button>
                </div>
            </div>
        </div>
    );
}
