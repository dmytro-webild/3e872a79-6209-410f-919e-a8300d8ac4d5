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
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Academics",
          id: "#features",
        },
        {
          name: "Admissions",
          id: "#admissions",
        },
        {
          name: "Student Life",
          id: "#campus-life",
        },
        {
          name: "Tuition",
          id: "#tuition",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/delaware-flag-with-banner_187299-35477.jpg"
      logoAlt="Orlando Private School Logo"
      brandName="Orlando Private School"
      button={{
        text: "Schedule a Tour",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      title="Nurturing Minds, Building Futures: Experience Excellence at Orlando Private School"
      description="At Orlando Private School, we’re dedicated to cultivating inquisitive minds and strong character. We provide a rigorous academic foundation combined with essential life skills, ensuring your child thrives and realizes their full potential in a supportive, enriching environment."
      testimonials={[
        {
          name: "Jessica Lee",
          handle: "@jessicalee",
          testimonial: "Orlando Private School provides an outstanding learning environment. My child is flourishing!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-business-woman-posing_23-2149457736.jpg",
          imageAlt: "Jessica Lee avatar",
        },
        {
          name: "Mark Evans",
          handle: "@markevans",
          testimonial: "The teachers are truly dedicated and communication with families is exceptional. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-professor-education-day_23-2150980089.jpg",
          imageAlt: "Mark Evans avatar",
        },
        {
          name: "Sarah Chen",
          handle: "@sarahchen",
          testimonial: "My child loves coming to school every day. The focus on character development is truly valuable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-with-arms-crossed-office_23-2148180659.jpg",
          imageAlt: "Sarah Chen avatar",
        },
        {
          name: "Emily Rodriguez",
          handle: "@emilyr",
          testimonial: "The academic rigor combined with a caring staff has been transformative for our family. So grateful!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-outdoors_23-2149915911.jpg",
          imageAlt: "Emily Rodriguez avatar",
        },
        {
          name: "Daniel Kim",
          handle: "@danielk",
          testimonial: "From arts to athletics, the opportunities here are incredible. My son has found his passions.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-style-character_23-2151034005.jpg",
          imageAlt: "Daniel Kim avatar",
        },
      ]}
      buttons={[
        {
          text: "Schedule a Tour",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-man-outdoors_23-2149915911.jpg",
          alt: "Parent avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-cartoon-style-character_23-2151034005.jpg",
          alt: "Parent avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-1524.jpg",
          alt: "Parent avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-sitting-library-couch_273609-12733.jpg",
          alt: "Student avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/with-tilting-middle-aged-man-wearing-white-t-shirt-with-tie-isolated-pink-wall_141793-86890.jpg",
          alt: "Teacher avatar",
        },
      ]}
      avatarText="Join our thriving community!"
      imageSrc="http://img.b2bpic.net/free-photo/front-view-woman-giving-presentation-people-office_23-2148502203.jpg"
      imageAlt="Happy students on campus at Orlando Private School"
      mediaAnimation="opacity"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Academic Excellence",
          icon: BookOpen,
        },
        {
          type: "text-icon",
          text: "Character Development",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Nurturing Environment",
          icon: Heart,
        },
        {
          type: "text-icon",
          text: "Future-Ready Skills",
          icon: Lightbulb,
        },
        {
          type: "text-icon",
          text: "Dedicated Educators",
          icon: Sparkles,
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
          id: "personalized-attention",
          title: "Personalized Attention",
          author: "Small Class Sizes",
          description: "We believe in the power of individualized support. Our small class sizes allow teachers to truly understand each student's needs, fostering a deep connection and tailored learning experience.",
          tags: [
            "Individualized Learning",
            "Dedicated Support",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-african-american-mother-teaching-her-son-assisting-him-with-homework-covid-19-epidemic_637285-12484.jpg",
          imageAlt: "Teacher helping a student one-on-one",
        },
        {
          id: "strong-academics",
          title: "Strong Academics",
          author: "Rigorous, Future-Ready Curriculum",
          description: "Our curriculum is designed to challenge and inspire, preparing students not just for higher education, but for success in an ever-evolving world. We integrate modern teaching methods to build critical thinking and problem-solving skills.",
          tags: [
            "Advanced Curriculum",
            "Critical Thinking",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/students-paying-attention-class_23-2148844727.jpg",
          imageAlt: "Students engaged in a classroom activity",
        },
        {
          id: "integrity-character",
          title: "Integrity & Character",
          author: "Values-Based Education",
          description: "Beyond academics, we instill core values of integrity, respect, and responsibility. Our programs focus on leadership development and community engagement, empowering students to become compassionate and principled individuals.",
          tags: [
            "Leadership Development",
            "Community Engagement",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-working-together-while-sitting-cafe_273609-13274.jpg",
          imageAlt: "Students collaborating on a project showing teamwork",
        },
      ]}
      title="The Orlando Private School Difference"
      description="Here's what sets our education apart and ensures your child's success from Pre-K to 8th grade."
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
          id: "1",
          name: "Dr. Elena Petrova",
          role: "Parent",
          testimonial: "The caring teachers and strong communication at Orlando Private School have made an incredible difference in my daughter's academic progress. We feel truly supported.",
          imageSrc: "http://img.b2bpic.net/free-photo/child-drawing-with-crayons-with-her-mom-home_1301-6418.jpg",
          imageAlt: "Dr. Elena Petrova",
        },
        {
          id: "2",
          name: "Mr. David Chang",
          role: "Guardian",
          testimonial: "This school offers more than just education; it's a community that fosters growth and confidence. My son's self-esteem has soared since enrolling.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-business-man-outdoor_23-2148479594.jpg",
          imageAlt: "Mr. David Chang",
        },
        {
          id: "3",
          name: "Sophia Rodriguez",
          role: "Alumna",
          testimonial: "Orlando Private School prepared me exceptionally well for high school and beyond. The strong academic foundation and leadership opportunities were invaluable.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-brunette-with-notebook-hands-sitting-park-bench_231208-8091.jpg",
          imageAlt: "Sophia Rodriguez",
        },
        {
          id: "4",
          name: "Mrs. Aisha Khan",
          role: "Parent",
          testimonial: "The individualized attention my child receives here is unmatched. They genuinely care about each student's success and well-being.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-parents-working-remotely_23-2150171980.jpg",
          imageAlt: "Mrs. Aisha Khan",
        },
        {
          id: "5",
          name: "Mr. & Mrs. Thompson",
          role: "Parents",
          testimonial: "We appreciate the balance of rigorous academics and a nurturing environment. Our children are thriving both academically and personally.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",
          imageAlt: "Mr. & Mrs. Thompson",
        },
        {
          id: "6",
          name: "Liam Carter",
          role: "Student",
          testimonial: "I love my teachers and all the fun activities. Learning is exciting here, and I've made so many great friends!",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-male-student-wearing-back-bag-isolated-olive-green_141793-73465.jpg",
          imageAlt: "Liam Carter",
        },
      ]}
      title="Voices of Our Community"
      description="Hear directly from parents, guardians, and former students about their enriching experiences at Orlando Private School."
    />
  </div>

  <div id="campus-life" data-section="campus-life">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "campus-1",
          name: "Engaged Classrooms",
          price: "Daily Discovery",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-professionals-sitting-together-table-with-blueprints-working-project_74855-9768.jpg",
          imageAlt: "Students interacting in a bright classroom",
        },
        {
          id: "campus-2",
          name: "Dynamic Athletics",
          price: "Team Spirit",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-happy-kids-laying-floor_23-2149351839.jpg",
          imageAlt: "Students playing soccer on a school field",
        },
        {
          id: "campus-3",
          name: "Creative Arts",
          price: "Expressive Learning",
          imageSrc: "http://img.b2bpic.net/free-photo/gymnast-getting-ready-competition_23-2150867699.jpg",
          imageAlt: "Children playing musical instruments in a school band",
        },
        {
          id: "campus-4",
          name: "Community & Friendship",
          price: "Joyful Connections",
          imageSrc: "http://img.b2bpic.net/free-photo/students-having-lunch-canteen_23-2149402888.jpg",
          imageAlt: "Students enjoying lunch in a school cafeteria",
        },
        {
          id: "campus-5",
          name: "Innovative Learning",
          price: "Future-Ready Skills",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-kids-laying-floor_23-2149351765.jpg",
          imageAlt: "Teacher demonstrating on an interactive whiteboard",
        },
        {
          id: "campus-6",
          name: "Outdoor Adventures",
          price: "Active Play",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-children-playing-playground_23-2148308757.jpg",
          imageAlt: "Children playing on a school playground",
        },
      ]}
      title="Discover Life at Orlando Private School"
      description="Explore the vibrant campus, engaging activities, and inspiring classrooms that define the enriching student experience at our school."
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
          id: "step-1",
          value: "1.",
          description: "Schedule a personalized visit to our campus. Experience our unique environment firsthand and see our students thriving.",
        },
        {
          id: "step-2",
          value: "2.",
          description: "Complete our application forms, academic screening, and family interview. Our admissions team will guide you through each step.",
        },
        {
          id: "step-3",
          value: "3.",
          description: "Once accepted, finalize enrollment and prepare for an enriching and exciting school year ahead at Orlando Private School!",
        },
      ]}
      title="Your Path to Orlando Private School"
      description="Joining our school family is a simple and supportive process. Follow these straightforward steps to get started on your child's educational journey."
      buttons={[
        {
          text: "Start with a Tour",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "grades-offered",
          title: "What grades does Orlando Private School offer?",
          content: "We proudly offer programs for Pre-K3 and Pre-K4, as well as Kindergarten through 8th grade. Our comprehensive approach supports students through every crucial developmental stage.",
        },
        {
          id: "before-after-care",
          title: "Is before/after care available?",
          content: "Yes, we offer extended care programs designed to provide a safe, supervised, and engaging environment for students before and after regular school hours, accommodating busy family schedules.",
        },
        {
          id: "curriculum",
          title: "What curriculum do you use?",
          content: "Our rigorous, future-focused curriculum is carefully selected and aligned with the highest educational standards. We emphasize a broad range of subjects, including advanced technology integration, arts, languages, and physical education.",
        },
        {
          id: "how-to-apply",
          title: "How do I apply?",
          content: "The application process begins with scheduling a personalized campus tour. Following your tour, you can complete our online application, which includes academic screening and an interview.",
        },
        {
          id: "extracurriculars",
          title: "Do you offer extracurricular activities?",
          content: "Absolutely! We offer a diverse array of sports, clubs, and arts programs designed to enrich student life, foster talents, and encourage exploration beyond the classroom. From robotics to choir, there’s something for every interest.",
        },
        {
          id: "schedule-tour",
          title: "How can I schedule a tour?",
          content: "You can easily schedule a tour through the 'Schedule a Tour' button found throughout our website, or by contacting our admissions office directly at (407) 295-8901 or admissions@orlandoprivateschool.com.",
        },
      ]}
      sideTitle="About Orlando Private School"
      sideDescription="Orlando Private School provides an exceptional Pre-K3 to 8th grade education. Our mission is to foster academic excellence, strong character, and a nurturing environment where every student can thrive. We prioritize a rigorous, future-focused curriculum, dedicated teachers, and a safe, supportive community committed to holistic development. Dr. Master Jackson & Tashira Glover serve as President, and Sabrina Dibernardo is our esteemed Principal."
      buttons={[
        {
          text: "Contact Admissions",
          href: "#contact",
        },
      ]}
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
          id: "elementary-tuition",
          title: "Elementary Tuition (K-5)",
          price: "$9,500",
          period: "per year",
          features: [
            "Comprehensive Academic Program",
            "Small Class Sizes",
            "Extracurricular Access",
            "Character Development Focus",
          ],
          button: {
            text: "View Details",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/enjoying-school_1098-13010.jpg",
          imageAlt: "Elementary school student learning",
        },
        {
          id: "middle-school-tuition",
          title: "Middle School Tuition (6-8)",
          price: "$10,800",
          period: "per year",
          features: [
            "Advanced Core Subjects",
            "Leadership Opportunities",
            "STEM & Arts Integration",
            "College Preparatory Guidance",
          ],
          button: {
            text: "View Details",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-relaxing-outdoors_23-2150466082.jpg",
          imageAlt: "Middle school students in a classroom",
        },
        {
          id: "enrollment-fees",
          title: "Enrollment & Fees",
          price: "$750",
          period: "one-time",
          features: [
            "Application & Registration",
            "Technology & Materials Fee",
            "Athletic Activity Fee (optional)",
            "Extended Care (optional)",
          ],
          button: {
            text: "Contact Admissions",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-work_1098-22102.jpg",
          imageAlt: "Enrollment papers and pen",
        },
      ]}
      title="Investing in Your Child's Future"
      description="Orlando Private School provides an affordable private education, representing a significant investment in your child's future with exceptional returns in academic achievement, personal growth, and lifelong success."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to Shape Your Child's Future?"
      buttons={[
        {
          text: "Schedule a Tour",
          href: "#",
        },
        {
          text: "Apply Today",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/delaware-flag-with-banner_187299-35477.jpg"
      logoAlt="Orlando Private School Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Academics",
              href: "#features",
            },
            {
              label: "Student Life",
              href: "#campus-life",
            },
          ],
        },
        {
          items: [
            {
              label: "Admissions",
              href: "#admissions",
            },
            {
              label: "Tuition",
              href: "#tuition",
            },
            {
              label: "Apply Now",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Campus Location",
              href: "https://maps.google.com/?q=4607%20Pinehills%20Orlando%20Fl%2032808",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Orlando Private School"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
