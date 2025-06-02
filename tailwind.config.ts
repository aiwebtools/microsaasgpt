
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Enhanced cyberpunk theme colors with more divine variations
        cyber: {
          background: "#0A0E17",
          foreground: "#E0E0F0",
          primary: "#08F7FE",
          secondary: "#FE53BB",
          accent: "#F5D300",
          muted: "#161B25",
          "muted-foreground": "#A3A3C2",
          divine: "#FFD700",
          ethereal: "#E6E6FA",
          celestial: "#87CEEB",
          luminous: "#F0F8FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "divine-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 15px 0 rgba(8, 247, 254, 0.4)"
          },
          "50%": { 
            boxShadow: "0 0 30px 5px rgba(8, 247, 254, 0.7)"
          },
        },
        "divine-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px 2px rgba(255, 215, 0, 0.6), 0 0 40px 5px rgba(255, 215, 0, 0.3), inset 0 0 15px rgba(255, 215, 0, 0.2)"
          },
          "50%": { 
            boxShadow: "0 0 40px 8px rgba(255, 215, 0, 0.8), 0 0 80px 15px rgba(255, 215, 0, 0.5), inset 0 0 25px rgba(255, 215, 0, 0.4)"
          },
        },
        "green-pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 15px 0 rgba(74, 222, 128, 0.5)"
          },
          "50%": { 
            boxShadow: "0 0 30px 5px rgba(74, 222, 128, 0.8)"
          },
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "200% 0"
          },
          "100%": {
            backgroundPosition: "-200% 0"
          }
        },
        "divine-shimmer": {
          "0%": {
            backgroundPosition: "200% 0",
            filter: "hue-rotate(0deg)"
          },
          "50%": {
            backgroundPosition: "0% 0",
            filter: "hue-rotate(45deg)"
          },
          "100%": {
            backgroundPosition: "-200% 0",
            filter: "hue-rotate(0deg)"
          }
        },
        "border-flow": {
          "0%": {
            borderColor: "rgba(245, 211, 0, 0.8)",
            boxShadow: "0 0 15px 0 rgba(245, 211, 0, 0.5)"
          },
          "33%": {
            borderColor: "rgba(255, 215, 0, 0.8)",
            boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.6)"
          },
          "66%": {
            borderColor: "rgba(184, 134, 11, 0.8)",
            boxShadow: "0 0 20px 2px rgba(184, 134, 11, 0.5)"
          },
          "100%": {
            borderColor: "rgba(245, 211, 0, 0.8)",
            boxShadow: "0 0 15px 0 rgba(245, 211, 0, 0.5)"
          }
        },
        "divine-border-flow": {
          "0%": {
            borderColor: "rgba(255, 215, 0, 0.9)",
            boxShadow: "0 0 25px 3px rgba(255, 215, 0, 0.7), 0 0 50px 8px rgba(255, 215, 0, 0.4)"
          },
          "25%": {
            borderColor: "rgba(255, 223, 0, 0.9)",
            boxShadow: "0 0 35px 5px rgba(255, 223, 0, 0.8), 0 0 70px 12px rgba(255, 223, 0, 0.5)"
          },
          "50%": {
            borderColor: "rgba(255, 235, 59, 0.9)",
            boxShadow: "0 0 45px 8px rgba(255, 235, 59, 0.9), 0 0 90px 15px rgba(255, 235, 59, 0.6)"
          },
          "75%": {
            borderColor: "rgba(255, 193, 7, 0.9)",
            boxShadow: "0 0 35px 5px rgba(255, 193, 7, 0.8), 0 0 70px 12px rgba(255, 193, 7, 0.5)"
          },
          "100%": {
            borderColor: "rgba(255, 215, 0, 0.9)",
            boxShadow: "0 0 25px 3px rgba(255, 215, 0, 0.7), 0 0 50px 8px rgba(255, 215, 0, 0.4)"
          }
        },
        "green-border-flow": {
          "0%": {
            borderColor: "rgba(74, 222, 128, 0.8)",
            boxShadow: "0 0 15px 0 rgba(74, 222, 128, 0.5)"
          },
          "50%": {
            borderColor: "rgba(34, 197, 94, 0.8)",
            boxShadow: "0 0 25px 5px rgba(34, 197, 94, 0.7)"
          },
          "100%": {
            borderColor: "rgba(74, 222, 128, 0.8)",
            boxShadow: "0 0 15px 0 rgba(74, 222, 128, 0.5)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        "divine-ascend": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(30px) scale(0.9)",
            filter: "brightness(0.5)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) scale(1)",
            filter: "brightness(1.1)"
          }
        },
        "ethereal-drift": {
          "0%, 100%": { 
            transform: "translateX(0) translateY(0)",
            opacity: "0.8"
          },
          "25%": { 
            transform: "translateX(10px) translateY(-5px)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateX(-5px) translateY(-10px)",
            opacity: "0.9"
          },
          "75%": { 
            transform: "translateX(-10px) translateY(5px)",
            opacity: "1"
          },
        },
        "celestial-rotation": {
          "0%": { 
            transform: "rotate(0deg) scale(1)",
            filter: "hue-rotate(0deg)"
          },
          "100%": { 
            transform: "rotate(360deg) scale(1.05)",
            filter: "hue-rotate(360deg)"
          }
        },
        "luminous-wave": {
          "0%, 100%": {
            background: "linear-gradient(45deg, rgba(255,215,0,0.1), rgba(8,247,254,0.1), rgba(254,83,187,0.1))",
            transform: "translateX(-100%)"
          },
          "50%": {
            background: "linear-gradient(45deg, rgba(255,215,0,0.3), rgba(8,247,254,0.3), rgba(254,83,187,0.3))",
            transform: "translateX(100%)"
          }
        },
        "particle-drift": {
          "0%": {
            transform: "translateY(100vh) translateX(0) rotate(0deg)",
            opacity: "0"
          },
          "10%": {
            opacity: "1"
          },
          "90%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateY(-10vh) translateX(100px) rotate(360deg)",
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "divine-float": "divine-float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "divine-pulse": "divine-pulse 4s ease-in-out infinite",
        "green-pulse-glow": "green-pulse-glow 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 4s linear infinite",
        "divine-shimmer": "divine-shimmer 6s linear infinite",
        "border-flow": "border-flow 4s ease-in-out infinite",
        "divine-border-flow": "divine-border-flow 5s ease-in-out infinite",
        "green-border-flow": "green-border-flow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-in",
        "divine-ascend": "divine-ascend 1s ease-out",
        "ethereal-drift": "ethereal-drift 8s ease-in-out infinite",
        "celestial-rotation": "celestial-rotation 20s linear infinite",
        "luminous-wave": "luminous-wave 10s ease-in-out infinite",
        "particle-drift": "particle-drift 15s linear infinite"
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(8, 247, 254, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 247, 254, 0.1) 1px, transparent 1px)",
        "divine-grid": "linear-gradient(to right, rgba(255, 215, 0, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 215, 0, 0.15) 1px, transparent 1px)",
        "neon-glow": "radial-gradient(circle, rgba(8, 247, 254, 0.2) 0%, transparent 70%)",
        "divine-glow": "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.3) 0%, rgba(255, 223, 0, 0.2) 35%, rgba(255, 235, 59, 0.1) 70%, transparent 100%)",
        "celestial-gradient": "linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(8, 247, 254, 0.1), rgba(254, 83, 187, 0.1), rgba(255, 215, 0, 0.1))",
        "ethereal-mist": "radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(8, 247, 254, 0.1) 0%, transparent 50%)"
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
