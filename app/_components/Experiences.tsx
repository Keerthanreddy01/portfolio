'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EDUCATION, MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ── Single expandable card (shared by Experience & Education) ── */
const ExperienceItem = ({
    item,
    animClass,
}: {
    item: { title: string; company: string; duration: string; description?: string };
    animClass: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const descRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (!item.description || !descRef.current) return;

        if (!isOpen) {
            const h = descRef.current.scrollHeight;
            gsap.fromTo(
                descRef.current,
                { height: 0, opacity: 0, overflow: 'hidden' },
                {
                    height: h,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.set(descRef.current!, {
                            height: 'auto',
                            overflow: 'visible',
                        });
                    },
                },
            );
        } else {
            gsap.set(descRef.current, { overflow: 'hidden' });
            gsap.to(descRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: 'power2.in',
            });
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className={animClass}>
            <p className="text-xl text-muted-foreground">{item.company}</p>

            <div
                className={`flex items-center gap-4 mt-3.5 mb-2.5 ${item.description ? 'cursor-pointer' : ''}`}
                onClick={handleToggle}
            >
                <p className="text-5xl font-anton leading-none">{item.title}</p>

                {item.description && (
                    <ChevronRight
                        size={30}
                        className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                    />
                )}
            </div>

            <p className="text-lg text-muted-foreground">{item.duration}</p>

            {item.description && (
                <div
                    ref={descRef}
                    style={{ height: 0, overflow: 'hidden', opacity: 0 }}
                >
                    <p className="mt-5 pb-3 text-lg text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-primary/50 pl-4">
                        {item.description}
                    </p>
                </div>
            )}
        </div>
    );
};

/* ── Section wrapper ── */
const Experiences = () => {
    const expRef = useRef<HTMLDivElement>(null);
    const eduRef = useRef<HTMLDivElement>(null);

    /* Experience scroll-in */
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: expRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });
            tl.from('.experience-item', { y: 50, opacity: 0, stagger: 0.3 });
        },
        { scope: expRef },
    );

    /* Experience scroll-out */
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: expRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });
            tl.to(expRef.current, { y: -150, opacity: 0 });
        },
        { scope: expRef },
    );

    /* Education scroll-in */
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: eduRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });
            tl.from('.education-item', { y: 50, opacity: 0, stagger: 0.3 });
        },
        { scope: eduRef },
    );

    /* Education scroll-out */
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: eduRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });
            tl.to(eduRef.current, { y: -150, opacity: 0 });
        },
        { scope: eduRef },
    );

    return (
        <>
            {/* ── Experience ── */}
            <section className="py-section" id="my-experience">
                <div className="container" ref={expRef}>
                    <SectionTitle title="My Experience" />
                    <div className="grid gap-14">
                        {MY_EXPERIENCE.map((item) => (
                            <ExperienceItem
                                key={item.title}
                                item={item}
                                animClass="experience-item"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Education ── */}
            <section className="py-section" id="my-education">
                <div className="container" ref={eduRef}>
                    <SectionTitle title="My Education" />
                    <div className="grid gap-14">
                        {MY_EDUCATION.map((item) => (
                            <ExperienceItem
                                key={item.title}
                                item={item}
                                animClass="education-item"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experiences;
