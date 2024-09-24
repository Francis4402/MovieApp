import React from 'react'

const Footer = () => {
  return (


<footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Brand</a>
      <p className="mt-3 text-xs sm:text-sm text-gray-600">
        © 2024 Preline Labs.
      </p>
    </div>


    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase">Product</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Pricing</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Changelog</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Docs</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Download</a></p>
      </div>
    </div>


    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase">Company</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">About us</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Blog</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Careers</a> <span className="inline text-blue-600">— We&apos;re hiring</span></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Customers</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Newsroom</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Sitemap</a></p>
      </div>
    </div>


    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase">Resources</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Community</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Help & Support</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">eBook</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">What&apos;s New</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Status</a></p>
      </div>
    </div>


    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase">Developers</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Api</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Status</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">GitHub</a> <span className="inline text-blue-600">— New</span></p>
      </div>

      <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase">Industries</h4>

      <div className="mt-3 grid space-y-3 text-sm">
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Financial Services</a></p>
        <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Education</a></p>
      </div>
    </div>

  </div>


  <div className="pt-5 mt-5 border-t border-gray-200">
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="flex flex-wrap items-center gap-3">

        <div className="hs-dropdown [--placement:top-left] relative inline-flex">

          <button id="hs-footer-language-dropdown" type="button" className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            
            English (US)
            
          </button>

          <div className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-footer-language-dropdown">
            <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
              
              English (US)
            </a>
            <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
              
              Deutsch
            </a>
            <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
              
              Dansk
            </a>
            <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
              
              Italiano
            </a>
            <a className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
              
            </a>
          </div>
        </div>


        <div className="space-x-4 text-sm">
          <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Terms</a>
          <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Privacy</a>
          <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">Status</a>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="mt-3 sm:hidden">
          <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Brand</a>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            © 2024 Preline Labs.
          </p>
        </div>


        <div className="space-x-4">
          <a className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
            
          </a>
          <a className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
            
          </a>
          <a className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
            
          </a>
        </div>

      </div>

    </div>
  </div>
</footer>


  )
}

export default Footer