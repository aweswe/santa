import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Build Your Career at <span className="text-gradient">Santa India</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8">
                            Work on the biggest stages. Learn from the best. Create experiences that matter.
                        </p>
                        <Button size="lg" variant="hero">View Openings</Button>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <h2 className="font-display text-3xl mb-8">Current Openings</h2>
                        <div className="grid gap-4">
                            {[
                                { title: "Senior Event Planner", dept: "Operations", loc: "Mumbai" },
                                { title: "3D Visualizer", dept: "Creative", loc: "Remote/Hybrid" },
                                { title: "Business Development Manager", dept: "Sales", loc: "Delhi NCR" }
                            ].map((job) => (
                                <div key={job.title} className="p-6 border border-border rounded-xl flex items-center justify-between hover:border-accent transition-colors cursor-pointer group">
                                    <div>
                                        <h3 className="font-bold text-xl group-hover:text-accent transition-colors">{job.title}</h3>
                                        <p className="text-sm text-muted-foreground">{job.dept} • {job.loc}</p>
                                    </div>
                                    <Button variant="outline">Apply</Button>
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

export default Careers;
