import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

const OurStory = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Our <span className="text-gradient">Story</span>
                        </h1>
                    </div>
                </section>
                <AboutSection />
                <section className="py-20 px-6 container mx-auto text-center max-w-2xl">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        It started with a simple belief: events shouldn't just be attended, they should be remembered.
                        Two decades later, that belief drives everything we do.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default OurStory;
