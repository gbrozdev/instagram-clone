import React from 'react'
import Bigcard from './Bigcard'
import Smallcard from './Smallcard'

function Blogcards() {
    return (
            <section className="bg-white text-gray-800 my-12">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <Bigcard />
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Smallcard />
                        <Smallcard />
                        <Smallcard />
                        <Smallcard />
                        <Smallcard />
                        <Smallcard />
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">Load more posts...</button>
                    </div>
                </div>
            </section>
    )
}

export default Blogcards