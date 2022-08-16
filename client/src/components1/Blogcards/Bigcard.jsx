import React from 'react'
import { Link } from 'react-router-dom'

function Bigcard() {
    return (
            <Link to="/article" rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
                <img src="https://source.unsplash.com/random" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-100" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h4 className="mb-2 text-xl font-semibold sm:text-3xl group-hover:underline group-focus:underline">ഈ നാട്ടിലെ രാഷ്ട്രീയക്കാർ എല്ലാം കള്ളന്മാർ ആണ്</h4>
                    <span className="mb-2 text-xs text-gray-600">February 19, 2021</span>
                    <p>ഈ നാട്ടിൽ നിന്നും തുടച്ചു നീക്കുകയാണ് വേണ്ടത് എന്നു കണ്ണുനീർ പൊഴിച്ചു കൊണ്ടു അവസാനം i hate politics എന്ന വാചകം പറഞ്ഞു നെടുവീർപ്പേടുന്ന ഭൂരിപക്ഷ സമൂഹത്തെയാണ് അരാഷ്ട്രീയ വാദികൾ എന്നു വിളിക്കുന്നതു</p>
                </div>
            </Link>
    )
}

export default Bigcard