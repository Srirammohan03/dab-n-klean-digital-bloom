"use client";

import React from "react";
import { Cloud, ICloud } from "react-icon-cloud";

type ClientLogo = {
  name: string;
  logo: string;
  url: string;
};

const clients: ClientLogo[] = [
  {
    name: "Ratnadeep",
    logo: "/logos/ratnadeep.png",
    url: "https://ratnadeepsupermarket.com/",
  },
  {
    name: "DMart",
    logo: "/logos/dmart.png",
    url: "https://www.dmart.in/",
  },
  {
    name: "Reliance Retail",
    logo: "/logos/reliance-retail.png",
    url: "https://www.relianceretail.com/",
  },
  {
    name: "Vijay Diagnostic",
    logo: "/logos/vijay-diagnostic.png",
    url: "https://www.vijaydiagnostic.com/",
  },
  {
    name: "Bansal Hospitals",
    logo: "/logos/bansal-hospitals.png",
    url: "https://bansalhospital.com/",
  },
  {
    name: "Red Rose Supermarket",
    logo: "/logos/red-rose.png",
    url: "#",
  },
  {
    name: "TX Hospital",
    logo: "/logos/tx-hospital.png",
    url: "https://txhospitals.in/",
  },
  {
    name: "Park Hotel",
    logo: "/logos/park-hotel.png",
    url: "https://www.theparkhotels.com/",
  },
  {
    name: "Value Zone",
    logo: "/logos/value-zone.png",
    url: "#",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    url: "https://www.amazon.in/",
  },
  {
    name: "Flipkart",
    logo: "/logos/flipkart.png",
    url: "https://www.flipkart.com/",
  },
];

const cloudOptions: ICloud["options"] = {
  // 3D behaviour
  shape: "sphere",
  depth: 0.5,             // smaller depth = less crazy perspective
  zoom: 0.9,

  // Motion (auto-rotate + mouse influence)
  maxSpeed: 0.025,
  minSpeed: 0.01,
  initial: [0.08, 0.04],
  reverse: false,

  // Interaction
  dragControl: true,
  wheelZoom: false,
  clickToFront: 600,
  activeCursor: "pointer",

  // Visuals
  tooltip: "native",
  tooltipDelay: 0,
  outlineColour: "#0000",
  imageScale: 1.1,         // adjust if you still want slightly bigger/smaller
};

const ClientsGlobeSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="
        relative overflow-hidden
        py-12 sm:py-16 lg:py-20
        bg-gradient-to-b from-[#f5fcff] via-[#d4f0ff] to-[#aee1fb]
      "
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-[#1b9ce4]/45 blur-3xl" />
        <div className="absolute bottom-[-90px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase bg-white/70 text-[#11153f] mb-3">
            Trusted Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11153f] mb-3">
            Our{" "}
            <span className="text-[#f3b432]">
              DAB&apos;N&apos;KLEAN
            </span>{" "}
            Hygiene Universe
          </h2>
          <p className="text-sm sm:text-base text-[#27405a]/80">
            From modern supermarkets and e-commerce giants to hospitals and
            hotels, leading brands trust DAB&apos;N&apos;KLEAN for everyday
            hygiene and bulk tissue needs.
          </p>
        </div>

        {/* Globe + legend */}
        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Rotating logo cloud */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="
                relative
                h-[220px] w-[220px]
                sm:h-[260px] sm:w-[260px]
                md:h-[300px] md:w-[300px]
                lg:h-[340px] lg:w-[340px]
                rounded-full overflow-hidden
                bg-gradient-to-br from-[#ffffff] via-[#e9f6ff] to-[#ffffff]
                shadow-[0_20px_55px_rgba(9,38,76,0.35)]
              "
            >
              <Cloud
                options={cloudOptions}
                containerProps={{
                  style: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url === "#" ? undefined : client.url}
                    target={
                      client.url && client.url !== "#" ? "_blank" : undefined
                    }
                    rel={
                      client.url && client.url !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    title={client.name}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        display: "block",
                        maxWidth: 60,
                        maxHeight: 40,
                        objectFit: "contain",
                      }}
                    />
                  </a>
                ))}
              </Cloud>
            </div>
          </div>

          {/* Legend chips */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base text-[#27405a]/85 mb-4 lg:mb-5">
              These are just some of the names who have woven DAB&apos;N&apos;KLEAN
              into their shelves, wards, rooms and carts.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {clients.map((client) => (
                <span
                  key={client.name + "-chip"}
                  className="
                    inline-flex items-center gap-2
                    rounded-full bg-white/80
                    px-3 py-1.5
                    border border-white/90
                    text-[11px] sm:text-xs text-[#11153f]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b9ce4]" />
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsGlobeSection;
