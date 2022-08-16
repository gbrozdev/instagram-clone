import React from 'react'
import Singlebloglist from './Singlebloglist'

function Bloglist() {
    return (
            <section className="sm:py-12 bg-white text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <Singlebloglist />
                        <Singlebloglist />
                        <Singlebloglist />
                        <Singlebloglist />
                    </div>
                </div>
            </section>
    )
}

export default Bloglist