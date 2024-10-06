import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section>
      <div className="container">
        <div className="flex">
          <div className="flex-1">
            <h2>Trusted by top innovate teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                quantumLogo,
                celestialLogo,
                apexLogo,
              ].map((logo, index) => (
                <img src={logo.src} key={index} className="h-6 w-auto " />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
