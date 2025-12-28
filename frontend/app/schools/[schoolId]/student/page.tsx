'use client';

import React from 'react';
import Link from 'next/link';
import { Baby, GraduationCap, ChevronLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function StudentLoginSelection() {
    const router = useRouter();
    const params = useParams();
    const schoolId = params.schoolId as string;
    const schoolName = schoolId ? schoolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'School';

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 flex flex-col items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl w-full border border-white/20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Student & Parent Access
                    </h1>
                    <p className="text-lg text-pink-100 font-medium max-w-2xl mx-auto">
                        Welcome to the {schoolName} family portal
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {/* Parent Login Option */}
                    <Link
                        href="/parent-login"
                        className="group relative bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-rose-100 p-5 rounded-full mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                                <Baby className="w-12 h-12 text-rose-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Parent Login</h2>
                            <p className="text-gray-500 text-sm">Monitor child progress, attendance, and communicate with teachers</p>
                            <div className="mt-6 px-6 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-semibold group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                Continue as Parent →
                            </div>
                        </div>
                    </Link>

                    {/* Student Login Option */}
                    <Link
                        href="/student-login"
                        className="group relative bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-100 p-5 rounded-full mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                                <GraduationCap className="w-12 h-12 text-purple-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Login</h2>
                            <p className="text-gray-500 text-sm">Access learning materials, submit assignments, and view grades</p>
                            <div className="mt-6 px-6 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                Continue as Student →
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => router.back()} className="inline-flex items-center text-pink-200 hover:text-white transition-colors font-medium">
                        <ChevronLeft size={20} className="mr-1" /> Back to Role Selection
                    </button>
                </div>
            </div>
        </div>
    );
}
