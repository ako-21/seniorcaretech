import React from "react";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section bg-blue pt-115 rpt-95 pb-90 rpb-85">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-white mb-25 rmb-35 wow fadeInLeft delay-0-2s">
              <h2>Sign up for latest IT resources news from Restly</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              className="subscribe-form mb-15 wow fadeInRight delay-0-2s"
              action="#"
            >
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
