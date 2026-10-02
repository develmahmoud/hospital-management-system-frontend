import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <div className="relative mb-6">
                    <h1 className="text-[120px] sm:text-[160px] font-extrabold tracking-tight text-indigo-600/10 leading-none">
                        404
                    </h1>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl sm:text-8xl font-extrabold text-indigo-600">
                            404
                        </span>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Page Not Found
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                    Sorry, we couldn't find the page you're looking for.
                    It may have been moved, deleted, or the URL might be incorrect.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Back to Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
                    >
                        Go Back
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-400">
                    Error 404 • The requested page doesn't exist
                </p>

            </div>
        </div>
    );
};

export default NotFound;
