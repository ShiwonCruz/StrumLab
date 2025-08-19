import { ListChecks, CalendarCheck, UserCheck, MessageCircleMore, Users , Gauge} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import user11 from "../assets/profile-pictures/user11.avif";
import user12 from "../assets/profile-pictures/user12.jpg";
import user13 from "../assets/profile-pictures/user13.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Nishu Fernando",
    company: "Independent Musician",
    image: user12,
    text: "These lessons have changed the way I play guitar. The teaching method is intuitive and engaging, and I've improved so much in just a few weeks!",
  },
  {
    user: "Sanduni Maheshika",
    company: "Music Enthusiast",
    image: user2,
    text: "I never thought I'd enjoy learning guitar so much. The sessions are fun, and the teacher is incredibly knowledgeable and patient. Highly recommend!",
  },
  {
    user: "George Philips",
    company: "Freelance Artist",
    image: user3,
    text: "The personalized attention during each class really helped me overcome my struggles. I've learned more in these classes than any other program!",
  },
  {
    user: "Nimesh Madhushanka",
    company: "Hobbyist Guitarist",
    image: user4,
    text: "The lesson structure is perfect for beginners and advanced learners alike. I've rediscovered my love for guitar thanks to this amazing course.",
  },
  {
    user: "Alex Wasabi",
    company: "Aspiring Guitarist",
    image: user5,
    text: "These classes go above and beyond what I expected. The instructor is passionate and creates a welcoming environment for everyone!",
  },
  {
    user: "Hashini Nimnadi",
    company: "Music Student",
    image: user6,
    text: "The lessons are perfectly paced, and I've gained so much confidence in my playing. A great experience all around! Highly Recommended for beginners.",
  },
];

export const features = [
  {
    icon: <UserCheck />,
    text: "Beginner-Friendly",
    description:
      "Our lessons are structured for all levels, from complete beginners to advanced players looking to hone their skills.",
  },
  {
    icon: <CalendarCheck />,
    text: "Flexible Schedules",
    description:
      "Enjoy flexible scheduling options, with both in-person and online sessions available to suit your lifestyle.",
  },
  {
    icon: <ListChecks />,
    text: "Customized Lesson Plans",
    description:
      "Get a personalized learning experience tailored to your music goals and preferred genres.",
  },
  {
    icon: <MessageCircleMore />,
    text: "Real-Time Feedback",
    description:
      "Receive immediate feedback and guidance during lessons to help you correct mistakes and improve faster.",
  },
  {
    icon: <Users />,
    text: "Group & Solo Options",
    description:
      "Choose from group sessions to learn with peers or one-on-one lessons for personalized attention.",
  },
  {
    icon: <Gauge />,
    text: "Progress Tracking",
    description:
      "Track your progress with a customized dashboard and set achievable goals along your guitar journey.",
  },
];

export const checklistItems = [
  {
    title: "Interactive Exercises",
    description:
      "Engage in hands-on practice to build your skills and confidence through fun, interactive exercises.",
  },
  {
    title: "Weekly Challenges",
    description:
      "Push yourself with weekly playing challenges to boost your skills and track your improvement.",
  },
  {
    title: "Personalized Feedback",
    description:
      "Receive individualized feedback after each lesson to help you master techniques.",
  },
  {
    title: "Access Anytime",
    description:
      "Get access to recordings of each session to review and practice on your own time.",
  },
];

export const pricingOptions = [
  {
    title: "Introductory",
    price: "$30",
    features: [
      "Access to beginner tutorials",
      "Weekly challenges",
      "Progress tracking",
      "1 free group session",
    ],
  },
  {
    title: "Intermediate",
    price: "$50",
    features: [
      "Access to all lesson plans",
      "10 one-on-one sessions",
      "Video feedback and analysis",
      "Progress tracking",
    ],
  },
  {
    title: "Master",
    price: "$100",
    features: [
      "Personalized mentorship",
      "Unlimited sessions",
      "Advanced playing techniques",
      "Weekly progress review",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Beginner Guitar Guide" },
  { href: "#", text: "Chords & Scales" },
  { href: "#", text: "Practice Tips" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Community Forum" },
];

export const platformLinks = [
  { href: "#", text: "Guitar Techniques" },
  { href: "#", text: "Lesson Plans" },
  { href: "#", text: "Equipment Recommendations" },
  { href: "#", text: "Practice Apps" },
  { href: "#", text: "Updates & New Lessons" },
];

export const communityLinks = [
  { href: "#", text: "Upcoming Jams" },
  { href: "#", text: "Workshops" },
  { href: "#", text: "Competitions" },
  { href: "#", text: "Community Events" },
  { href: "#", text: "Guitar Enthusiast Jobs" },
];
