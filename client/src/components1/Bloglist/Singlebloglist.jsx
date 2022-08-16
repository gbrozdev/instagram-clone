import React from 'react'
import { Link } from 'react-router-dom'

function Singlebloglist() {
    return (
        <article className="flex flex-col bg-gray-50">
            <Link to="/" rel="noopener noreferrer" href="#" aria-label="Te nul oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
            </Link>
            <div className="flex flex-col flex-1 p-6">
                <Link to="/" rel="noopener noreferrer" href="#" aria-label="Te nul oportere reprimique his dolorum"></Link>
                <Link to="/" rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-indigo-600">Convenire</Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nullLink to="/" oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                </div>
            </div>
        </article>
    )
}

export default Singlebloglist