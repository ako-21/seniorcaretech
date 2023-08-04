import { Route, Routes } from "react-router-dom";
import ComingSoon from "./components/ComingSoon/index";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<ComingSoon />} />
      {/* <Route exact path="/home-two" element={<HomeTwo />} />
      <Route exact path="/home-three" element={<HomeThree />} />
      <Route exact path="/home-four" element={<HomeFour />} />
      <Route exact path="/home-five" element={<HomeFive />} />
      <Route exact path="/home-six" element={<HomeSix />} />
      <Route exact path="/home-seven" element={<HomeSeven />} />
      <Route exact path="/home-eight" element={<HomeEight />} />
      <Route exact path="/home-nine" element={<HomeNine />} />
      <Route exact path="/about-one" element={<AboutOne />} />
      <Route exact path="/about-two" element={<AboutTwo />} />
      <Route exact path="/about-Three" element={<AboutThree />} />
      <Route exact path="/about-four" element={<AboutFour />} />
      <Route exact path="/about-five" element={<AboutFive />} />
      <Route exact path="/about-six" element={<AboutSix />} />
      <Route exact path="/about-seven" element={<AboutSeven />} />
      <Route exact path="/service-one" element={<ServiceOne />} />
      <Route exact path="/service-two" element={<ServiceTwo />} />
      <Route exact path="/service-three" element={<ServiceThree />} />
      <Route exact path="/service-four" element={<ServiceFour />} />
      <Route exact path="/service-five" element={<ServiceFive />} />
      <Route exact path="/service-six" element={<ServiceSix />} />
      <Route exact path="/service-seven" element={<ServiceSeven />} />
      <Route exact path="/service-details" element={<ServiceDetails />} />
      <Route exact path="/portfolio-one" element={<PortfolioOne />} />
      <Route exact path="/portfolio-two" element={<PortfolioTwo />} />
      <Route exact path="/portfolio-three" element={<PortfolioThree />} />
      <Route exact path="/portfolio-four" element={<PortfolioFour />} />
      <Route exact path="/portfolio-details" element={<ProtfolioDetails />} />
      <Route exact path="/team-one" element={<TeamOne />} />
      <Route exact path="/team-two" element={<TeamTwo />} />
      <Route exact path="/team-three" element={<TeamThree />} />
      <Route exact path="/team-four" element={<TeamFour />} />
      <Route exact path="/team-single" element={<TeamSingle />} />
      <Route exact path="/testimonial-one" element={<TestimonialOne />} />
      <Route exact path="/testimonial-two" element={<TestimonialTwo />} />
      <Route exact path="/testimonial-three" element={<TestimonialThree />} />
      <Route exact path="/testimonial-four" element={<TestimonialFour />} />
      <Route exact path="/pricing" element={<PricingOne />} />
      <Route exact path="/pricing-two" element={<PricingTwo />} />
      <Route exact path="/pricing-three" element={<PricingThree />} />
      <Route exact path="/pricing-four" element={<PricingFour />} />
      <Route exact path="/pricing-five" element={<PricingFive />} />
      <Route exact path="/pricing-six" element={<PricingSix />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop-details" element={<ShopDetails />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/blog-details" element={<BlogDetails />} />
      <Route exact path="/404" element={<FourZeroFour />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/counters" element={<CounterPage />} /> */}
    </Routes>
  );
}
