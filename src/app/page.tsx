"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { BookOpen, Heart, Lightbulb, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Academics",          id: "#features"},
        {
          name: "Admissions",          id: "#admissions"},
        {
          name: "Student Life",          id: "#campus-life"},
        {
          name: "Tuition",          id: "#tuition"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780205265077-fg2qg94f.jpg"
      logoAlt="Orlando Private School Logo"
      brandName="Orlando Private School"
      button={{
        text: "Schedule a Tour",          href: "#contact"}}
      buttonTextClassName="font-bold"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Leading with courage , learning with purpose."
      title="Nurturing Minds, Building Futures: Experience Excellence at Orlando Private School"
      description="At Orlando Private School, we’re dedicated to cultivating inquisitive minds and strong character. We provide a rigorous academic foundation combined with essential life skills, ensuring your child thrives and realizes their full potential in a supportive, enriching environment."
      testimonials={[
        {
          name: "Jessica Lee",          handle: "@jessicalee",          testimonial: "Orlando Private School provides an outstanding learning environment. My child is flourishing!",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210081395-9s9c8u8y.jpeg",          imageAlt: "Professional woman avatar"},
        {
          name: "Mark Evans",          handle: "@markevans",          testimonial: "The teachers are truly dedicated and communication with families is exceptional. Highly recommend!",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210091307-e6w7r2t1.jpeg",          imageAlt: "Professional man avatar"},
        {
          name: "Sarah Chen",          handle: "@sarahchen",          testimonial: "My child loves coming to school every day. The focus on character development is truly valuable.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210107297-b2n1m8j4.jpeg",          imageAlt: "Professional woman avatar"},
        {
          name: "Emily Rodriguez",          handle: "@emilyr",          testimonial: "The academic rigor combined with a caring staff has been transformative for our family. So grateful!",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210116892-d5h4g3f2.jpeg",          imageAlt: "Professional man avatar"},
        {
          name: "Daniel Kim",          handle: "@danielk",          testimonial: "From arts to athletics, the opportunities here are incredible. My son has found his passions.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210134442-x9z8c7v6.jpeg",          imageAlt: "Professional man avatar"},
      ]}
      buttons={[
        {
          text: "Schedule a Tour",          href: "#contact"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      buttonTextClassName="font-bold"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210143878-a1s2d3f4.jpeg",          alt: "Professional man avatar"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210153316-q5w4e3r2.jpeg",          alt: "Professional woman avatar"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210162590-z6x5c4v3.jpeg",          alt: "Professional man avatar"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210171887-p7o6i5u4.jpeg",          alt: "Student avatar"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210181512-k8j7h6g5.jpeg",          alt: "Professional teacher avatar"},
      ]}
      avatarText="Join our thriving community!"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210190807-m1n2b3v4.jpeg"
      imageAlt="Teacher with students in a bright classroom at Orlando Private School"
      mediaAnimation="opacity"
      marqueeItems={[
        {
          type: "image",          src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          alt: "Books on a desk"
        },
        {
          type: "image",          src: "https://images.unsplash.com/photo-1522204523234-8729aa67e203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          alt: "Students collaborating"
        },
        {
          type: "text-icon",          text: "Nurturing Environment",          icon: Heart,
        },
        {
          type: "text-icon",          text: "Future-Ready Skills",          icon: Lightbulb,
        },
        {
          type: "text-icon",          text: "Dedicated Educators",          icon: Sparkles,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "personalized-attention",          title: "Personalized Attention",          author: "Small Class Sizes",          description: "We believe in the power of individualized support. Our small class sizes allow teachers to truly understand each student's needs, fostering a deep connection and tailored learning experience.",          tags: [
            "Individualized Learning",            "Dedicated Support"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210200844-l2k1j0h9.jpeg",          imageAlt: "Teacher helping a student one-on-one in a classroom"},
        {
          id: "strong-academics",          title: "Strong Academics",          author: "Rigorous, Future-Ready Curriculum",          description: "Our curriculum is designed to challenge and inspire, preparing students not just for higher education, but for success in an ever-evolving world. We integrate modern teaching methods to build critical thinking and problem-solving skills.",          tags: [
            "Advanced Curriculum",            "Critical Thinking"],
          imageSrc: "http://img.b2bpic.net/free-photo/students-paying-attention-class_23-2148844727.jpg",          imageAlt: "Students engaged in a classroom activity"},
        {
          id: "integrity-character",          title: "Integrity & Character",          author: "Values-Based Education",          description: "Beyond academics, we instill core values of integrity, respect, and responsibility. Our programs focus on leadership development and community engagement, empowering students to become compassionate and principled individuals.",          tags: [
            "Leadership Development",            "Community Engagement"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210210283-f3d2s1a0.jpeg",          imageAlt: "Students collaborating on a project showing teamwork"},
      ]}
      title="The Orlando Private School Difference"
      description="Here's what sets our education apart and ensures your child's success from Pre-K to 8th grade."
      textBoxButtonTextClassName="font-bold"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="auto"
      testimonials={[
        {
          id: "1",          name: "Dr. Elena Petrova",          role: "Parent",          testimonial: "The caring teachers and strong communication at Orlando Private School have made an incredible difference in my daughter's academic progress. We feel truly supported.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210220268-g4h3j2k1.jpeg",          imageAlt: "Professional woman smiling"},
        {
          id: "2",          name: "Mr. David Chang",          role: "Guardian",          testimonial: "This school offers more than just education; it's a community that fosters growth and confidence. My son's self-esteem has soared since enrolling.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-business-man-outdoor_23-2148479594.jpg",          imageAlt: "Mr. David Chang"},
        {
          id: "3",          name: "Sophia Rodriguez",          role: "Alumna",          testimonial: "Orlando Private School prepared me exceptionally well for high school and beyond. The strong academic foundation and leadership opportunities were invaluable.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-brunette-with-notebook-hands-sitting-park-bench_231208-8091.jpg",          imageAlt: "Sophia Rodriguez"},
        {
          id: "4",          name: "Mrs. Aisha Khan",          role: "Parent",          testimonial: "The individualized attention my child receives here is unmatched. They genuinely care about each student's success and well-being.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210229875-e5w4q3a2.jpeg",          imageAlt: "Professional woman smiling"},
        {
          id: "5",          name: "Mr. & Mrs. Thompson",          role: "Parents",          testimonial: "We appreciate the balance of rigorous academics and a nurturing environment. Our children are thriving both academically and personally.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210240391-y6t5r4e3.jpeg",          imageAlt: "Professional couple smiling"},
        {
          id: "6",          name: "Liam Carter",          role: "Student",          testimonial: "I love my teachers and all the fun activities. Learning is exciting here, and I've made so many great friends!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-male-student-wearing-back-bag-isolated-olive-green_141793-73465.jpg",          imageAlt: "Liam Carter"},
      ]}
      title="Voices of Our Community"
      description="Hear directly from parents, guardians, and former students about their enriching experiences at Orlando Private School."
      textBoxButtonTextClassName="font-bold"
    />
  </div>

  <div id="campus-life" data-section="campus-life">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "campus-1",          name: "Engaged Classrooms",          price: "Daily Discovery",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210250007-i7o8p9z0.jpeg",          imageAlt: "Students interacting in a bright classroom"},
        {
          id: "campus-2",          name: "Dynamic Athletics",          price: "Team Spirit",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210259876-c1v2b3n4.jpeg",          imageAlt: "Students playing soccer on a school field"},
        {
          id: "campus-3",          name: "Creative Arts",          price: "Expressive Learning",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210269305-x5z6c7v8.jpeg",          imageAlt: "Children doing art in a classroom"},
        {
          id: "campus-4",          name: "Community & Friendship",          price: "Joyful Connections",          imageSrc: "http://img.b2bpic.net/free-photo/students-having-lunch-canteen_23-2149402888.jpg",          imageAlt: "Students enjoying lunch in a school cafeteria"},
        {
          id: "campus-5",          name: "Innovative Learning",          price: "Future-Ready Skills",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1780210278786-j9h8g7f6.jpeg",          imageAlt: "Student using a tablet in class"},
        {
          id: "campus-6",          name: "Outdoor Adventures",          price: "Active Play",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-children-playing-playground_23-2148308757.jpg",          imageAlt: "Children playing on a school playground"},
      ]}
      title="Campus & Student Life Gallery"
      description="Immerse yourself in the vibrant life at Orlando Private School with a collage of moments from our classrooms, sports fields, art studios, and community events."
      textBoxButtonTextClassName="font-bold"
    />
  </div>

  <div id="admissions" data-section="admissions">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "step-1",          value: "1.",          description: "Schedule a personalized campus tour. Experience our unique environment firsthand and see our students thriving in person."},
        {
          id: "step-2",          value: "2.",          description: "Complete our comprehensive application, including academic screening and a family interview. Our admissions team will guide you through each step."},
        {
          id: "step-3",          value: "3.",          description: "Once accepted, finalize enrollment and get ready for an enriching and exciting new school year at Orlando Private School!"},
      ]}
      title="Admissions Made Simple: Your 3-Step Enrollment Process"
      description="Joining our school family is a clear and supportive process designed for your convenience. Follow these straightforward steps to secure your child's place in their educational journey."
      buttons={[
        {
          text: "Start with a Tour",          href: "#contact"},
      ]}
      textBoxButtonTextClassName="font-bold"
    />
  </div>

  <div id="about" data-section="about">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "grades-offered",          title: "What grades does Orlando Private School offer?",          content: "We proudly offer programs for Pre-K3 and Pre-K4, as well as Kindergarten through 8th grade. Our comprehensive approach supports students through every crucial developmental stage."},
        {
          id: "before-after-care",          title: "Is before/after care available?",          content: "Yes, we offer extended care programs designed to provide a safe, supervised, and engaging environment for students before and after regular school hours, accommodating busy family schedules."},
        {
          id: "curriculum",          title: "What curriculum do you use?",          content: "Our rigorous, future-focused curriculum is carefully selected and aligned with the highest educational standards. We emphasize a broad range of subjects, including advanced technology integration, arts, languages, and physical education."},
        {
          id: "how-to-apply",          title: "How do I apply?",          content: "The application process begins with scheduling a personalized campus tour. Following your tour, you can complete our online application, which includes academic screening and an interview."},
        {
          id: "extracurriculars",          title: "Do you offer extracurricular activities?",          content: "Absolutely! We offer a diverse array of sports, clubs, and arts programs designed to enrich student life, foster talents, and encourage exploration beyond the classroom. From robotics to choir, there’s something for every interest."},
        {
          id: "schedule-tour",          title: "How can I schedule a tour?",          content: "You can easily schedule a tour through the 'Schedule a Tour' button found throughout our website, or by contacting our admissions office directly at (407) 295-8901 or admissions@orlandoprivateschool.com."},
      ]}
      sideTitle="About Orlando Private School: A Holistic Overview"
      sideDescription="At Orlando Private School, we believe in nurturing the whole child from Pre-K3 to 8th grade. Our mission is to foster academic excellence and strong character within a safe, supportive community. We instill core values like integrity, respect, and responsibility through a rigorous, future-focused educational philosophy that prepares students not just for academic success, but for life. Dr. Master Jackson & Tashira Glover serve as President, and Sabrina Dibernardo is our esteemed Principal. We are committed to providing a secure and enriching environment where every child feels valued and can truly thrive."
      buttons={[
        {
          text: "Contact Admissions",          href: "#contact"},
      ]}
      buttonTextClassName="font-bold"
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="tuition" data-section="tuition">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "elementary-tuition",          title: "Elementary Tuition (K-5)",          price: "$9,500",          period: "per year",          features: [
            "Comprehensive Academic Program",            "Small Class Sizes",            "Extracurricular Access",            "Character Development Focus"],
          button: {
            text: "View Details",            href: "#"},
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1707203672803-a4b3c2d1.jpeg",          imageAlt: "Elementary school student reading a book"},
        {
          id: "middle-school-tuition",          title: "Middle School Tuition (6-8)",          price: "$10,800",          period: "per year",          features: [
            "Advanced Core Subjects",            "Leadership Opportunities",            "STEM & Arts Integration",            "College Preparatory Guidance"],
          button: {
            text: "View Details",            href: "#"},
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1707203714280-e5f4g3h2.jpeg",          imageAlt: "Middle school students collaborating on a project"},
        {
          id: "enrollment-fees",          title: "Enrollment & Fees",          price: "$750",          period: "one-time",          features: [
            "Application & Registration",            "Technology & Materials Fee",            "Athletic Activity Fee (optional)",            "Extended Care (optional)"],
          button: {
            text: "Contact Admissions",            href: "#contact"},
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1707203728955-i6j5k4l3.jpeg",          imageAlt: "Family talking to school admissions officer"},
      ]}
      title="Investing in Your Child's Future"
      description="Orlando Private School provides an affordable private education, representing a significant investment in your child's future with exceptional returns in academic achievement, personal growth, and lifelong success."
      textBoxButtonTextClassName="font-bold"
      planButtonTextClassName="font-bold"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Ready to Shape Your Child's Future?"
      buttons={[
        {
          text: "Schedule a Tour",          href: "#"},
        {
          text: "Apply Today",          href: "#"},
      ]}
      buttonTextClassName="font-bold"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ETSYg6nElnC2XrpoMEFXkGgJGI/uploaded-1707203740261-m7n6o5p4.jpeg"
      logoAlt="Orlando Private School Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Academics",              href: "#features"},
            {
              label: "Student Life",              href: "#campus-life"},
          ],
        },
        {
          items: [
            {              label: "Admissions",              href: "#admissions"},
            {
              label: "Tuition",              href: "#tuition"},
            {
              label: "Apply Now",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Campus Location",              href: "https://maps.google.com/?q=4607%20Pinehills%20Orlando%20Fl%2032808"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="Orlando Private School"
      buttonClassName="font-bold"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}