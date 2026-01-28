import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";

const TeamPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Meet The <span className="text-gradient">Team</span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            The creative minds and logistical wizards behind the magic.
                        </p>
                    </div>
                </section>
                <TeamSection />
            </main>
            <Footer />
        </div>
    );
};

export default TeamPage;
