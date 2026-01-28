import { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const SocialProofCounter = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-8 border-t border-border/50">
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
          <Counter end={20} suffix="+" />
        </p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
          <Counter end={500} suffix="+" />
        </p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">Events Delivered</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
          <Counter end={100} suffix="+" />
        </p>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">Team Members</p>
      </div>
    </div>
  );
};
