import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Our <span className="text-gradient">Work</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Explore a curated selection of our most impactful events and exhibitions.
                        </p>
                    </div>
                </section>

                <CaseStudiesSection />
            </main>
            <Footer />
        </div>
    );
};

export default CaseStudies;
