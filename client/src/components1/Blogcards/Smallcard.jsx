import React from 'react'
import { Link } from 'react-router-dom'

function Smallcard() {
    return (
        
            <Link to="/" rel="noopener noreferrer" className="bg-gray-50 max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-50" src="https://source.unsplash.com/random/480x360?1" alt=""/>
                <div className="p-6 space-y-2">
                    <h3 className="mb-2 text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs text-gray-600">January 21, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dictLink to="/" apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicatLink to="/" indoctum pri.</p>
                </div>
            </Link>
        
    )
}

export default Smallcard