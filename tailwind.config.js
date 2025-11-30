/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
      },
      colors: {
        user: {
          primary: "#00A3A3",
          secondary: "#10B981",
          background: "#F0FDFD",
          text: "#0F172A",
        },
        admin: {
          primary: "#4F46E5",
          secondary: "#7C3AED",
          background: "#F8F9FF",
          text: "#0F172A",
          muted: "#475569",
        },
        support: {
          primary: "#FF8A65",
          secondary: "#FFB74D",
          background: "#FFF3E0",
          text: "#3E2723",
        },
      },
      boxShadow: {
        soft: "0 10px 35px rgba(15, 23, 42, 0.08)",
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "user-gradient": "linear-gradient(135deg, #00A3A3 0%, #10B981 40%, #F0FDFD 100%)",
        "admin-gradient": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #F8F9FF 100%)",
        "support-gradient": "linear-gradient(135deg, #FF8A65 0%, #FFB74D 40%, #FFF3E0 100%)",
      },
    },
  },
  plugins: [],
}
