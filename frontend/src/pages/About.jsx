import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At our core, we believe fashion is more than just clothing—it’s
            self-expression. We design pieces that blend comfort with timeless
            style, so you look and feel confident. Every outfit we create tells
            a story of elegance, passion, and individuality.
          </p>
          <p> From everyday wear
            to statement looks, we make fashion accessible for everyone. Our
            mission is simple: help you wear confidence, because true style
            never fades.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Our mission is to empower individuals to express themselves through fashion that is stylish, comfortable, and accessible. We strive to create collections that inspire confidence, celebrate diversity, and bring elegance into everyday life.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">We believe that true style begins with uncompromised quality. Every product is carefully crafted from premium materials and undergoes strict quality checks to ensure durability, comfort, and elegance.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">Shopping with us is designed to be simple, seamless, and stress-free. From easy navigation and secure checkout to fast delivery and hassle-free returns, we put your comfort first. Our goal is to make fashion accessible at your fingertips—anytime, anywhere.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our customers are at the heart of everything we do. We are committed to providing friendly, responsive, and reliable support at every step of your shopping journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
