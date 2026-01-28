import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <AboutSection />

                {/* Values Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-6">
                        <h2 className="font-display text-3xl mb-12 text-center">Our Core Values</h2>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-bold mb-2">Innovation</h3>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="font-bold mb-2">Integrity</h3>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="font-bold mb-2">Excellence</h3>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
                                    <span className="text-2xl">🌍</span>
                                </div>
                                <h3 className="font-bold mb-2">Sustainability</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <TeamSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
