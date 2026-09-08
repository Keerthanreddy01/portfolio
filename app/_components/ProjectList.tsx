'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Project from './Project';
import Button from '@/components/Button';
import { Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const selectedProjectRef = useRef<string | null>(null);

    // Keep ref in sync with state without tearing down event listeners
    selectedProjectRef.current = selectedProject;

    // Smooth floating image position following cursor with GSAP
    useGSAP(
        () => {
            if (window.innerWidth < 768) return;

            const handleMouseMove = (e: globalThis.MouseEvent) => {
                if (!containerRef.current || !imageContainer.current) return;
                if (!selectedProjectRef.current) return;

                const containerRect =
                    containerRef.current.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();

                // if cursor is outside the container bounds, smoothly hide
                if (
                    e.clientY < containerRect.top ||
                    e.clientY > containerRect.bottom ||
                    e.clientX < containerRect.left ||
                    e.clientX > containerRect.right
                ) {
                    gsap.to(imageContainer.current, {
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.25,
                        ease: 'power2.out',
                        overwrite: 'auto',
                    });
                    return;
                }

                const offsetTop = e.clientY - containerRect.top;
                const targetY = offsetTop - imageRect.height / 2;

                gsap.to(imageContainer.current, {
                    y: targetY,
                    duration: 0.35,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        const project = PROJECTS.find((p) => p.slug === slug);
        if (!project?.thumbnail) {
            setSelectedProject(null);
            if (imageContainer.current) {
                gsap.to(imageContainer.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.2,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }
            return;
        }

        setSelectedProject(slug);
        if (imageContainer.current) {
            gsap.to(imageContainer.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        }
    };

    const handleMouseLeave = () => {
        setSelectedProject(null);
        if (imageContainer.current) {
            gsap.to(imageContainer.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.25,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        }
    };

    const activeProject = PROJECTS.find(
        (p) =>
            p.slug === selectedProject &&
            p.slug !== 'veyro' &&
            Boolean(p.thumbnail),
    );

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    {/* Floating Preview Card with Sleek Border Frame */}
                    <div
                        className={cn(
                            'max-md:hidden absolute right-0 top-0 z-20 pointer-events-none opacity-0 transition-[width,height] duration-300 w-[350px] xl:w-[620px] aspect-[16/10] rounded-2xl p-2.5 bg-background/90 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden',
                        )}
                        ref={imageContainer}
                        style={{
                            display: activeProject ? 'block' : 'none',
                        }}
                    >
                        {/* Top subtle highlight shimmer border */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

                        {/* Inner framed display */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
                            {activeProject && activeProject.thumbnail && (
                                <div className="absolute inset-0 flex items-center justify-center p-3 animate-in fade-in duration-200">
                                    <Image
                                        src={activeProject.thumbnail}
                                        alt={activeProject.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-contain rounded-lg drop-shadow-md"
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                        onMouseLeave={handleMouseLeave}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>

                {/* Explore More button */}
                <div className="mt-16 flex justify-center">
                    <Button
                        as="link"
                        href="https://github.com/Keerthanreddy01"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="explore-btn"
                    >
                        <Github size={18} />
                        Explore More on GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
