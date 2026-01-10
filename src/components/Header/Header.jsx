import React, { useRef, useState, useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Header = ({ subtext, headline, highlight, desc }) => {

    const headlineRef = useRef(null);
    const highlightRef = useRef(null);
    const subTextRef = useRef(null);
    const paraRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 200); // Debounce by 200ms
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    useGSAP(() => {

        // --- SplitText animation ONLY for the headline ---
        const split = new SplitText(headlineRef.current, { type: "words, chars, lines" });


        gsap.from(split.lines, {
            y: 40,
            opacity: 0,
            stagger: 0.03,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: headlineRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // --- Simple fade-up animation for gradient text ---
        gsap.from(highlightRef.current, {
            y: 40,
            opacity: 0,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: highlightRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(subTextRef.current, {
            y: 40,
            opacity: 0,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: subTextRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(paraRef.current, {
            yPercent: 100,
            stagger: 0.10,
            ease: 'power2.out',
            opacity: 0,
            scrollTrigger: {
                trigger: paraRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        return () => split.revert();
    }, { dependencies: [windowWidth], revertOnUpdate: true });

    return (
        <div className="header container text-center pt-5 pb-2">
            <h5 ref={subTextRef}>{subtext}</h5>



            <h2 ref={highlightRef} className="main-head-highlight">
                {highlight}
            </h2>

            <h3 ref={headlineRef} className="main-sub-head">
                {headline}
            </h3>

            <p ref={paraRef}>{desc}</p>
        </div>
    )
}

export default Header;
