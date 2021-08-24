import './styles/index.scss';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Courses from './Courses';
import Contact from './Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const loading = useRef(false);

  useEffect(() => {
    loading.current = true;
  }, [])

  useEffect(() => {
    //only set animations if done mounting
    if (loading.current) {

      //activate the scrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      //animation for home section
      function Home() {

        //Anim for moving arms and scope
        function Arm() {
          const armAnim = gsap.timeline({ repeat: -1, defaults: { duration: 1 } });
          armAnim
            .to('#arm', { rotation: -2, transformOrigin: "left bottom" })
            .to('#arm', { rotation: 0, transformOrigin: "left bottom" })
        }

        function Scope() {
          const scopeAnim = gsap.timeline({ repeat: -1, defaults: { duration: 1 } })
          const origin = "10% 70%"
          scopeAnim
            .to('#scope', { rotation: -7, transformOrigin: origin, y: "5%" })
            .to('#scope', { rotation: 0, transformOrigin: origin, y: "0%" })
        }

        //for hovering robots / bulbs / laptops
        function FloatStuffs(stuff, delay) {
          const rotateAnim = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "sine" }, delay: delay })
          rotateAnim
            .to(stuff, { y: "5%", transformOrigin: "50% 50%" })
            .to(stuff, { y: 0, transformOrigin: "50% 50%" })
        }


        //only triggers when user start scrolling on the home section
        function scrollHome() {
          const scrollAnimation = gsap.timeline({
            defaults: { duration: 1 },
            paused: true,
            scrollTrigger: {
              trigger: "#Home",
              start: "top top",
              end: "bottom top",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            }
          })

          scrollAnimation
            .addLabel('begin')
            .to(["#laptop", "#robot", "#bulb"], { x: "-100vw" }, 'begin')

            .addLabel('middle')
            .to(".home-titles", { y: "200%" }, 'begin')
            .to("#hero", { y: "100%", scale: 0 }, 'begin')
            .fromTo(".home-button", { opacity: 1 }, { opacity: 0, duration: 0.6 }, 'begin');

          return scrollAnimation
        }


        //animation starts on Home section when page loads
        const startAnimation = gsap.timeline()

        startAnimation
          .addLabel('start')
          .from(['#hero', '.home-titles'], { opacity: 0 }, 'start')
          .fromTo(".explore-button", { opacity: 0 }, { opacity: 1 }, 'start')
          .from('#ring', { scale: 0, transformOrigin: "center center", ease: "Power2.easeOut" })
          .from('#ring-bg', { opacity: 0 })
          .add(Arm())
          .add(Scope())
          .fromTo('#background', { opacity: 0, scale: 0, transformOrigin: "left bottom" },
            { opacity: 1, scale: 1, transformOrigin: "left bottom" })

          .addLabel('sync1')
          .from(['#lines', '#laptop', "#robot", "#bulb"], { opacity: 0 }, 'sync1')
          .add(FloatStuffs('#laptop', 0))
          .add(FloatStuffs('#robot', 0.5))
          .add(FloatStuffs('#bulb', 1))
          .add(scrollHome())

        return startAnimation

      }

      //animation for the about section 
      function About() {
        const about = gsap.timeline({
          defaults: {
            duration: 1
          },
          scrollTrigger: {
            trigger: "#About",
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        })
        about
          .addLabel('begin')
          .from(".intro-one-about", { yPercent: 50, opacity: 0, ease: "slow" }, 'begin')
          .from(".intro-two-about", { yPercent: 50, opacity: 0, ease: "slow" }, 'begin+=0.2')
          .fromTo(".intro-one-about", { yPercent: 0, opacity: 1 }, { yPercent: -50, opacity: 0, ease: "slow" }, 'begin+=2')
          .fromTo(".intro-two-about", { yPercent: 0, opacity: 1 }, { yPercent: -50, opacity: 0, ease: "slow" }, 'begin+=2.2')
          .to(".about-right", { flexGrow: 0 })

          .addLabel('flash')
          .from(".about-titles", { opacity: 0, ease: "sine", delay: 0.1, duration: 5, y: "-5%" }, 'flash')
          .from(".kid-pic", { opacity: 0, delay: 0.1, duration: 5, y: "-15%" }, 'flash')
          .from(".kid2-pic", { opacity: 0, delay: 0.1, duration: 5, y: "-15%" }, 'flash')
          .from(".hero-pic", { opacity: 0, delay: 0.1, duration: 5, y: "-5%" }, 'flash')
        return about;
      }

      function Courses() {


        const courses = gsap.timeline({
          defaults: {
            duration: 0.6
          },
          scrollTrigger: {
            trigger: "#Courses",
            start: "top top",
            end: "+=200%",
            pin: true,
            anticipatePin: 1,
            scrub: 1,


          }
        })

        courses
          .fromTo(".courses-left", { flexGrow: 0 }, { flexGrow: 1 })
          .addLabel('begin')
          .from(".intro-one-courses", { yPercent: 50, opacity: 0, ease: "slow" }, 'begin')
          .from(".intro-two-courses", { yPercent: 50, opacity: 0, ease: "slow" }, 'begin+=0.2')
          .fromTo(".intro-one-courses", { yPercent: 0, opacity: 1 }, { yPercent: -50, opacity: 0, ease: "slow" }, 'begin+=2')
          .fromTo(".intro-two-courses", { yPercent: 0, opacity: 1 }, { yPercent: -50, opacity: 0, ease: "slow" }, 'begin+=2.2')
          .fromTo(".courses-right", { flexGrow: 1 }, { flexGrow: 0, ease: "power2.out" })
          .from(".course", { opacity: 0, y: "+=10%", stagger: 0.2, duration: 1 })

        return courses

      }

      function Contacts() {
        const contacts = gsap.timeline(
          {
            defaults: {
              duration: 0.6
            },
            scrollTrigger: {
              trigger: "#Contacts",
              start: "top top",
              end: "+=100%",
              pin: true,
              anticipatePin: 1,
              scrub: 0.5,
            }
          }
        )

        contacts
          .addLabel("begin")
          .from(".intro-contact", { yPercent: 50, opacity: 0, ease: "slow" }, "begin")
          .fromTo(".intro-contact", { yPercent: 0, opacity: 1 }, { yPercent: -50, opacity: 0, ease: "slow" }, "begin+=2")

          .addLabel("shrink")
          .fromTo(".contact-right", { flexGrow: 0 }, { flexGrow: 1 })
          .from(".contact-titles", { opacity: 0 })



        return contacts;
      }

      //BIG animation timeline
      const launchAnimation = gsap.timeline();
      launchAnimation
        .add(Home())
        .add(About())
        .add(Courses())
        .add(Contacts())
    }


  }, []);


  //setting states
  const [abt, setAbt] = useState(0);
  const [crs, setCrs] = useState(0);
  const [ctc, setCtc] = useState(0);
  const [currentSel, setCurrentSel] = useState("Home");


  useEffect(() => {
    function setSecHeight(height, section) {
      if (section === "About") {
        setAbt(height);
      } else if (section === "Courses") {
        setCrs(height)
      } else {
        setCtc(height)
      }
    }

    //if done loading, set heights for different scrolling
    if (loading.current) {
      const sections = ["About", "Courses", "Contacts"];
      sections.map((section, index) => {
        setSecHeight(window.innerHeight * (4 + index * 3), section);
      })

      //add a listener for scrolling to each section => change styles accordingly
      window.addEventListener("scroll", () => {
        if (document.getElementById("Contacts").getBoundingClientRect().top <= 0) {
          setCurrentSel("Contact");
        }
        else if (document.getElementById("Courses").getBoundingClientRect().top <= 0) {
          setCurrentSel("Courses");
        }
        else if (document.getElementById("About").getBoundingClientRect().top <= 0) {
          setCurrentSel("About");
        } else {
          setCurrentSel("Home");
        }
      })
    }
  }, [loading]);

  return (
    <div className="App">
      <Nav
        section={currentSel}
        setSection={() => setCurrentSel()}
        abt={abt}
        crs={crs}
        ctc={ctc}
      />
      <Home
        scrollTo={abt}
      />
      <About
        scrollTo={crs}
      />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
