import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Comprehensive event solutions tailored to your unique needs.
                            From conception to execution, we handle it all.
                        </p>
                    </div>
                </section>

                {/* Reuse the existing ServicesSection component which likely has the grid */}
                <ServicesSection />

                {/* Process Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-display text-3xl md:text-4xl mb-4">Our Event <span className="text-gradient">Process</span></h2>
                            <p className="text-muted-foreground">From the first coffee to the final applause, we ensure a seamless journey.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border/50 -z-10" />

                            {[
                                { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and vision." },
                                { step: "02", title: "Design", desc: "Crafting immersive concepts and spatial layouts." },
                                { step: "03", title: "Execution", desc: "Flawless on-site management and production." },
                                { step: "04", title: "Analysis", desc: "Post-event reporting and ROI measurement." }
                            ].map((item) => (
                                <div key={item.step} className="bg-background pt-8 relative">
                                    <div className="w-12 h-12 bg-accent text-white font-bold rounded-full flex items-center justify-center text-lg mb-6 mx-auto md:mx-0 shadow-lg shadow-accent/20">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
