import React from 'react'

function Footer() {
  return (
    <>


    <footer className="py-5 bg-light mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Column 1 */}
          <div className="col-12 col-md-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">About</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Careers</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-3">
            <h5>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Help Center</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">FAQs</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-3">
            <h5>Legal</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Privacy</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-secondary">Terms</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-3">
            <h5>Subscribe</h5>
            <p className="text-secondary">
              Get product updates and offers.
            </p>

            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <button className="btn btn-primary">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 mt-4 border-top">
          <p className="mb-2 mb-md-0 text-secondary">
            ©2026 Designed and Developed By Muhammad Naveel. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="text-secondary fs-4">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-secondary fs-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-naveel-004942380/" className="text-secondary fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>


    </>
  )
}

export default Footer
