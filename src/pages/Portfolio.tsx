import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import exhibitionImg from "@/assets/exhibition.jpg";
import eventHeroImg from "@/assets/event-hero.jpg";

const categories = ["All", "Corporate", "Exhibitions", "Launches", "Experiences"];

const projects = [
    {
        title: "Tech Summit 2025: Innovation Unlocked",
        image: eventHeroImg,
        category: "Corporate",
        stats: [
            { value: "320%", label: "ROI Achieved" },
            { value: "1,200+", label: "Attendees" },
        ],
        description: "Complete end-to-end management of India's premier technology summit, featuring 3 stages and 50+ speakers."
    },
    {
        title: "Global Auto Expo: Launch Excellence",
        image: exhibitionImg,
        category: "Exhibitions",
        stats: [
            { value: "450%", label: "Brand Reach" },
            { value: "50k+", label: "Footfall" },
        ],
        description: "Orchestrating a massive product launch with immersive zones, media management, and high-impact reveals."
    },
    {
        title: "Pharma Leadership Meet: Precision executed",
        image: eventHeroImg,
        category: "Corporate",
        stats: [
            { value: "100%", label: "Compliance" },
            { value: "Zero", label: "Glitches" },
        ],
        description: "A high-stakes leadership gathering requiring absolute precision, security, and white-glove service."
    },
    {
        title: "Moments of Magic: Luxury Launch",
        image: exhibitionImg,
        category: "Launches",
        stats: [
            { value: "VIP", label: "Focus" },
            { value: "Global", label: "Media" },
        ],
        description: "A high-end luxury brand launch event that combined immersive technology with traditional Indian hospitality."
    },
    {
        title: "Future of Retail 2024",
        image: eventHeroImg,
        category: "Exhibitions",
        stats: [
            { value: "200+", label: "Exhibitors" },
            { value: "15k+", label: "Leads" },
        ],
        description: "Creating a futuristic exhibition space for the retail industry, focusing on AI-driven customer journeys."
    },
    {
        title: "Sustainable Earth Summit",
        image: exhibitionImg,
        category: "Experiences",
        stats: [
            { value: "Net Zero", label: "Event" },
            { value: "40+", label: "Countries" },
        ],
        description: "A masterclass in sustainable event production, from sourcing eco-friendly materials to managing carbon offsets."
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                {/* Hero Section */}
                <section className="bg-primary/5 py-12 md:py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <span className="text-accent font-medium tracking-widest uppercase mb-4 block animate-fade-in text-sm">Portfolio</span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
                            Our <span className="text-gradient">Work</span> Speaks Volumes
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            A showcase of our most ambitious and impactful events, exhibitions, and launches across India and beyond.
                        </p>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    variant={activeCategory === cat ? "hero" : "heroOutline"}
                                    size="pill"
                                    onClick={() => setActiveCategory(cat)}
                                    className="transition-all duration-300"
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16 lg:py-24 px-6 bg-background">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((study, index) => (
                                <div
                                    key={`${study.title}-${index}`}
                                    className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Image Area */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                                                {study.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                                            {study.title}
                                        </h3>
                                        <p className="text-muted-foreground text-base mb-8 line-clamp-3">
                                            {study.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                                            {study.stats.map((stat, i) => (
                                                <div key={i}>
                                                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-xl text-muted-foreground italic">No projects found in this category. We're always working on new things!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-primary text-primary-foreground py-20 px-6">
                    <div className="container mx-auto text-center max-w-3xl">
                        <h2 className="font-display text-4xl mb-6">Ready to create your next success story?</h2>
                        <p className="text-primary-foreground/70 text-lg mb-10">
                            Join the ranks of leading brands that trust us with their most critical moments.
                        </p>
                        <Button variant="accent" size="lg" className="h-14 px-10 text-lg shadow-xl hover:scale-105 transition-transform" onClick={() => window.location.href = '/contact'}>
                            Let's Talk Strategy
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
