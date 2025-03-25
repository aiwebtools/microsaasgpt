
import React, { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("microsaas-consent");
    
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("microsaas-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-md w-full mx-4 glass rounded-xl border border-cyber-primary/30 shadow-xl p-6 animate-scale-in">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-cyber-muted flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-cyber-accent" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Terms of Use & Consent</h3>
            <p className="text-cyber-muted-foreground text-sm mb-4">
              By using MicroSaaS GPT, you agree to our Terms of Service and Privacy Policy. This tool is provided "as is" without warranties of any kind. You are responsible for ensuring any applications developed using our tool comply with applicable laws and regulations.
            </p>
            
            <p className="text-cyber-muted-foreground text-sm mb-6">
              AI Web Tools LLC is not liable for any damages arising from the use of MicroSaaS GPT or applications developed with it. For the complete legal terms, please refer to our Disclaimer section.
            </p>
            
            <button
              onClick={handleConsent}
              className="w-full cyber-button flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Agree</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
