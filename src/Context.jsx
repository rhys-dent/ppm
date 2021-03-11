import { createContext, useState, useEffect } from "react";
//Mains
import Home from "./main/home/Home";
import OurServices from "./main/our-services/OurServices";
import SafetyAndSecurity from "./main/safety-and-security/SafetyAndSecurity";
import FAQ from "./main/faq/FAQs";
import Pricing from "./main/pricing/Pricing";
import ContactUs from "./main/contact-us/ContactUs";
//Home Sections
import WelcomeSection from "./main/home/sections/WelcomeSection";
import OurServicesSection from "./main/home/sections/OurServicesSection";
import ContactUsSection from "./main/home/sections/ContactUsSection";
import SafetySecuritySection from "./main/home/sections/SafetySecuritySection";
//DATA
//constants
const IMAGE_EXTENSION = ".jpg";
const SIZE = "-4096";
const IMAGE_DIRECTORY = "backgrounds/desktop";
//Lists and Keys
const mainTitlesAndComponents = [
  { title: "Home", Component: Home },
  { title: "Our Services", Component: OurServices },
  { title: "Safety and Security", Component: SafetyAndSecurity },
  { title: "FAQ", Component: FAQ },
  { title: "Pricing", Component: Pricing },
  { title: "Contact Us", Component: ContactUs },
];
const serviceTitles = [
  {
    title: "Guest Management",
    text:
      "Prometheus will handle all guest communication, from beginning to end. Utilizing automated messaging templates, as well as personal communication with our management team, we will manage the entire guest experience.",
    icon: "test-icons/guest-management-logo-basic.png",
  },
  {
    title: "Professional Photography",
    text:
      "The quality of your photos makes or breaks your Airbnb. We will arrange for our professional photographer to stage the unit and create beautiful high quality listing photos of your unit.",
    icon: "test-icons/guest-management-logo-outline.png",
  },
  {
    title: "Professional Cleaning",
    text:
      "Your unit will be kept in 'for sale' condition at all times. Prometheus utilizes automated scheduling software to ensure that the unit is professionally cleaned after each stay.",
    icon: "test-icons/guest-management-logo-outlined-white-shadow.png",
  },
  {
    title: "Listing Creation and Optimization",
    text:
      "Our team will list your unit across multiple booking platforms and the coordinate the calendar through a central channel manager to maximize booking revenue and minimize vacancy for your Airbnb.",
    icon: "test-icons/guest-management-logo-outlined-light-shadow.png",
  },
  {
    title: "Staging and Design",
    text:
      "Prometheus will design and stage your unit to the highest standard, procuring all necessary furnishings and decor to make your Airbnb a success. All of the necessary set up is handled by our management team, freeing you from this major time-consuming task.",
    icon: "test-icons/guest-management-logo-outlined-dark-shadow.png",
  },
  {
    title: "Price Optimization",
    text:
      "Our management team actively manages the price per night at your Airbnb, utilizing dynamic pricing optimization to get the most out of your unit and maximize profits across all seasons.",
    icon: "icons/price-icon.png",
  },
  {
    title: "Logistic Support",
    text:
      "Our management team will handle procurement and stocking of all necessary items that guest may need and arrange for any services or repairs that may be needed at your unit, as well as being available to handle any specific requests that guests may have during their stay.",
    icon: "icons/logistic-icon.png",
  },
];
const homeSectionTitlesAndComponents = [
  { title: "Welcome", Component: WelcomeSection },
  { title: "Our Services", Component: OurServicesSection },
  { title: "Safety and Security", Component: SafetySecuritySection },
  { title: "Contact Us", Component: ContactUsSection },
];
const faqs = [
  {
    q: "What is the STR model?",
    a:
      "The short-term rental model is a method of maximizing the profit potential of a rental property by catering to short-term guests instead of traditional long-term renters.",
  },
  {
    q: "How does STR compare to standard rentals?",
    a:
      "A solidly booked Airbnb is almost always more profitable than a standard rental, as you can charge more for night to night stays than you can month to month tenants.",
  },
  {
    q: "What are the benefits of hiring a professional management company?",
    a:
      "The benefits are numerous but the two main benefits are in the areas of profit maximization and time commitment. With proper management, your time spent dealing with your Airbnb will be minimized, if not negated all together, while your profits increase.",
  },
  {
    q: "Will my property be secure?",
    a:
      "Yes. With the addition of technological solutions such as smart-locks and home monitoring systems, as well as the oversight of a team of professional managers, your property will be more secure than ever.",
  },
  {
    q: "Will my bookings increase?",
    a:
      "With the addition of professional management, listings across multiple platforms, enhanced guest communications and dynamic pricing, we will ensure that your Airbnb achieves maximum occupancy while preserving profitability.",
  },
  {
    q: "How are the cost of cleaning and laundry handled?",
    a:
      "There is no cost to you as an owner. The costs of cleaning and laundry are paid for by the guests at the time of booking.",
  },
  {
    q: "What is my time commitment as an owner?",
    a:
      "Little to none. We handle all aspects of Airbnb operations, providing you and your family the type of hands of, high profit investment that you’ve always wanted.",
  },
  {
    q: "How are licensing and government regulations handled?",
    a:
      "All of our units are operated in accordance with any relevant government regulations and all licensing and regulatory compliance is handled by our management team.",
  },
  {
    q: "How will my short-term rental affect my taxes?",
    a:
      "Prometheus strongly recommends that you consult a tax specialist when it comes to reporting your revenue to local tax authorities.",
  },
  {
    q: "Are there any cancellation fees?",
    a:
      "If for any reason you aren’t completely satisfied with our services and would like to cancel, you can do so at any time with no hassles or fees",
  },
];
const team = [
  {
    firstName: "Jason",
    lastName: "Connolly",
    title: "President",
    email: "jasonmconnolly@hotmail.com",
  },
  {
    firstName: "Reda",
    lastName: "---",
    title: "CEO",
    email: "jasonmconnolly@hotmail.com",
  },
];
const safetyAndSecurity = [
  {
    title: "Smart Home Monitoring",
    text:
      "Utilizing smart home monitoring systems allows our management team to have real time awareness of activities inside our units. We can monitor motion and decibel levels, as well as heat and humidity inside your Airbnb at all times, providing numerous layers of security for your short-term rental ",
  },
  {
    title: "Smart locks",
    text:
      "Prometheus utilizes smart-locks in all units. All comings and goings can be monitored by our management team. One time, time sensitive codes are generated for guests to use during their stay, ensuring security of the unit.",
  },
  {
    title: "Active Management",
    text:
      "Any event that requires an immediate on-site presence, will be swiftly handled by a professional manager who will be dispatched to your unit to ensure the safety of our guests and your property",
  },
];
const pricingModules = [
  {
    title: "Flat Rate Model",
    text: [
      "We will provide a fully hands off experience and deal with all aspects of the day to day running of your Airbnb",
      " All revenues will be deposited directly into your account",
      "Prometheus will invoice you 20% at the beginning of each month",
      "Seasonality will apply but your property can expect to generate greater returns than a traditional rental",
    ],
  },
  {
    title: "Guaranteed Income Model",
    text: [
      "Prometheus charges a flat management fee of 25% and guarantees a minimum amount of profit to you each month",
      "We will provide a fully hands off experience and deal with all aspects of the day to day running of your Airbnb",
      "All revenues will be deposited directly into your account, Prometheus will invoice you 25% at the beginning of each month, adjusted as needed to cover the agreed upon minimum",
      "Seasonality will still apply but you can feel more secure, with the inclusion of a buffer in the form of a guaranteed minimum payout",
    ],
  },
  {
    title: "Rental Only Model",
    text: [
      "Prometheus will lease your property like any other tenant, at a fixed, reliable rent",
      "100% hands off experience in all respects, we will simply be the most reliable tenant that you’ve ever had",
      "Rent is guaranteed and will be paid on time at the beginning of each month",
      "No effect of seasonality or vacancy, just a guaranteed payment each month",
    ],
  },
];
const mains = mainTitlesAndComponents.map((main) => {
  const key = main.title.toLowerCase().replaceAll(" ", "-");
  const path = "/" + key;
  const backgroundUrl = IMAGE_DIRECTORY + path + SIZE + IMAGE_EXTENSION;

  return {
    key,
    title: main.title,
    path,
    Component: main.Component,
    backgroundUrl,
  };
});
const services = serviceTitles.map((service) => {
  const id = service.title.toLowerCase().replaceAll(" ", "-");
  const href = "#" + id;
  return {
    id,
    title: service.title,
    text: service.text,
    icon: service.icon,
    href,
  };
});
const homeSections = homeSectionTitlesAndComponents.map((homeSection) => {
  const title = homeSection.title;
  const key = title.toLowerCase().replaceAll(" ", "-");
  return {
    key,
    title,
    id: "#" + key,
    Component: homeSection.Component,
    backgroundUrl: IMAGE_DIRECTORY + "/" + key + SIZE + IMAGE_EXTENSION,
  };
});
function toKey(list) {
  const key = {};
  list.forEach((item) => {
    key[item.key] = item;
  });
  return key;
}
//STYLES
//constants
const PX = {
  mobileMaxWidth: 1024,
  header: { height: 64, heightMobile: 48 },
};
const MOBILE_MAX_WIDTH = 1024;
//theme
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match

  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    scrollBarWidth: 0,
  });

  useEffect(() => {
    // Handler to call on window resize

    function handleResize() {
      // Set window width/height to state

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
const Context = createContext();
export default Context;
export function Provider({ children }) {
  const [state, setState] = useState(false);
  const windowSize = useWindowSize();
  const mobile = windowSize.width < PX.mobileMaxWidth;
  const headerHeight = mobile ? PX.header.heightMobile : PX.header.height;
  const px = {
    window: { width: windowSize.width, height: windowSize.height },
    header: { height: headerHeight },
    main: {
      height: windowSize.height - headerHeight,
      width: windowSize.width - windowSize.scrollBarWidth,
    },
  };
  const theme = {
    common: {
      fixedBackground: { backgroundSize: mobile ? "auto 100%" : "100% auto" },
    },
    header: {
      height: px.header.height + "px",
      zIndex: 8,
      nav: {
        menu: {
          marginLeft: mobile ? "auto" : "0",
          position: mobile ? "absolute" : "relative",
          menuButton: { display: mobile ? "block" : "none" },
          navLinks: {
            height: mobile ? px.main.height + "px" : "100%",
            display: mobile ? "none" : "flex",
            flexDirection: mobile ? "column" : "row",
          },
        },
      },
    },
    main: {
      height: px.main.height + "px",
      home: {
        safetyAndSecurity: {
          flexDirection: mobile ? "column" : "row",
        },
        ourServices: {
          padding: mobile ? "5%" : "20%",
          service: { padding: mobile ? "2.5%" : "10%" },
        },
        contactUs: {
          padding: mobile ? "2.5%" : "10% 20%",
        },
      },
      ourServices: {
        paddingBottom: mobile ? "5%" : "0",
        nav: {
          width: mobile ? "100px" : "250px",
          navLink: { fontSize: mobile ? ".75em" : "1em" },
          fontSize: mobile ? ".5rem" : "1rem",
        },
        service: {
          display: mobile ? "block" : "grid",
          icon: { order: mobile ? -1 : 1 },
          info: { order: mobile ? 1 : 0 },
          height: mobile ? "100%" : px.main.height / 2 + "px",
          width: mobile ? "90%" : "80%",
        },
      },
      faqs: {
        display: mobile ? "block" : "grid",
        faq: { padding: mobile ? "0 .5rem 0 .5rem" : "0 1rem 0 1rem" },
      },
      safetyAndSecurity: {
        flexDirection: mobile ? "column" : "row",
        securitySystem: {
          width: mobile ? "100%" : "25%",
          margin: mobile ? "1rem" : "0 auto",
        },
      },
      pricing: {
        display: mobile ? "block" : "grid",
        pricingModule: {
          width: mobile ? "100%" : "30%",
          margin: mobile ? "1rem" : "1rem",
        },
      },
      contactUs: {
        padding: mobile ? "2.5%" : " 0% 20% 0 20%;",
        emailForm: { width: mobile ? "100%" : "50%" },
      },
    },
  };
  return (
    <Context.Provider
      value={{
        state,
        refresh: () => setState(!state),
        windowSize,
        mains,
        homeSections,
        services,
        faqs,
        team,
        safetyAndSecurity,
        pricingModules,
        key: {
          mains: toKey(mains),
          homeSections: toKey(homeSections),
          services: toKey(services),
        },
        theme: theme,
        px,
      }}
    >
      {children}
    </Context.Provider>
  );
}
