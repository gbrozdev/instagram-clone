import React from 'react'
import { Link } from 'react-router-dom'

function Calltoaction() {
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">Write your first blog today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link to="/register"  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link to="/login"  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Login </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calltoaction