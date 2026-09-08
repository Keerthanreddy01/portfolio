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

    selectedProjectRef.current = selectedProject;

    useGSAP(
        () => {
            if (window.innerWidth < 768) return;

            // Ensure container starts hidden
            gsap.set(imageContainer.current, {
                opacity: 0,
                y: 0,
            });

            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current || !imageContainer.current) return;

                const activeSlug = selectedProjectRef.current;
                const activeProject = PROJECTS.find(
                    (p) =>
                        p.slug === activeSlug &&
                        p.slug !== 'veyro' &&
                        Boolean(p.thumbnail),
                );

                const containerRect =
                    containerRef.current.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();

                // If cursor is outside the projects container, or active project has no thumbnail
                if (
                    !activeProject ||
                    e.clientY < containerRect.top ||
                    e.clientY > containerRect.bottom ||
                    e.clientX < containerRect.left ||
                    e.clientX > containerRect.right
                ) {
                    gsap.to(imageContainer.current, {
                        opacity: 0,
                        duration: 0.2,
                        ease: 'power2.out',
                        overwrite: 'auto',
                    });
                    return;
                }

                // Calculate vertical position clamped within the container
                const offsetTop = e.clientY - containerRect.top;
                const rawY = offsetTop - imageRect.height / 2;
                const maxY = Math.max(
                    0,
                    containerRect.height - imageRect.height,
                );
                const clampedY = Math.max(0, Math.min(rawY, maxY));

                gsap.to(imageContainer.current, {
                    y: clampedY,
                    opacity: 1,
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
        if (!project || !project.thumbnail || slug === 'veyro') {
            setSelectedProject(null);
            if (imageContainer.current) {
                gsap.to(imageContainer.current, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }
            return;
        }

        setSelectedProject(slug);
    };

    const handleMouseLeave = () => {
        setSelectedProject(null);
        if (imageContainer.current) {
            gsap.to(imageContainer.current, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out',
                overwrite: 'auto',
            });
        }
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div
                    className="group/projects relative"
                    ref={containerRef}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Floating Preview Card with Frame Border */}
                    <div
                        className={cn(
                            'max-md:hidden absolute right-0 top-0 z-20 pointer-events-none opacity-0 w-[350px] xl:w-[580px] aspect-[16/10] rounded-2xl p-3 bg-neutral-900/90 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden',
                        )}
                        ref={imageContainer}
                    >
                        {/* Frame top bar with subtle window dots */}
                        <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                                <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                                <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
                            </div>
                            <span className="text-[11px] text-muted-foreground font-mono tracking-wider uppercase">
                                Preview
                            </span>
                        </div>

                        {/* Inner framed display */}
                        <div className="relative w-full h-[calc(100%-24px)] rounded-xl overflow-hidden bg-neutral-950/70 border border-white/5 flex items-center justify-center">
                            {PROJECTS.filter(
                                (p) =>
                                    Boolean(p.thumbnail) && p.slug !== 'veyro',
                            ).map((project) => (
                                <Image
                                    key={project.slug}
                                    src={project.thumbnail!}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className={cn(
                                        'absolute inset-0 transition-opacity duration-300 w-full h-full object-contain p-2',
                                        {
                                            'opacity-100':
                                                project.slug ===
                                                selectedProject,
                                            'opacity-0 pointer-events-none':
                                                project.slug !==
                                                selectedProject,
                                        },
                                    )}
                                    priority={project.slug === 'squibl'}
                                />
                            ))}
                        </div>
                    </div>

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
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
