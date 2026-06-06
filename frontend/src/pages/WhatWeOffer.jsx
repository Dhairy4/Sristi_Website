import React from "react";
import {
  Users,
  HandCoins,
  Wrench,
  ShieldCheck,
  Building2,
} from "lucide-react";

const offerings = [
  {
    title: "Advisory & Mentoring",
    icon: ShieldCheck,
  },
  {
    title: "Mentoring & Networking",
    icon: Users,
  },
  {
    title: "Financial Support & Seed Funding",
    icon: HandCoins,
  },
  {
    title: "Prototyping & Product Development",
    icon: Wrench,
  },
  {
    title: "Intellectual Property Rights (IPR) Facilitation",
    icon: ShieldCheck,
  },
  {
    title: "Access to Workspace & Labs",
    icon: Building2,
  },
];

const fundingSupport = [
  {
    title: "NABARD Grant",
    points: [
      "We provide financial support through NABARD Grants facilitated by the SDAU RBIC.",
    ],
  },
  {
    title: "Venture Capital Investment Support",
    points: [
      "We offer expert guidance on both Angel and VC funding, encompassing the following key areas:",
      "Identifying Angel Investors and Venture Capitalists.",
      "We assist in identifying potential Angel investors and VC firms suitable for your venture.",
      "Investment Readiness Assessment: We help assess your investment readiness, ensuring you meet the necessary criteria and are well-prepared to attract funding.",
      "Real-World Investment Journey: Our guidance includes insights and real-world experiences from navigating the investment landscape, helping you gain valuable perspectives on securing funding.",
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-sristi-green-700">
        <div className="relative overflow-hidden bg-sristi-green-700 py-24 lg:py-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Farming Greenery Background"
              className="h-full w-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sristi-green-700/90 to-transparent"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              What We Offer
            </h1>
            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-sristi-green-400"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            SRISTI Innovations supports innovators through mentorship,
            infrastructure, prototyping assistance, funding guidance, and
            access to facilities that help transform promising ideas into
            impactful ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all items-center justify-content duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 origin-center items-center justify-content scale-x-0 bg-sristi-green-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="inline-flex w-fit rounded-full bg-sristi-green-400/10 items-center justify-content text-sristi-green-700">
                  <Icon className="h-12 w-12" strokeWidth={1.5} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h2>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
           <h2 className="mb-14 text-center text-4xl font-semibold text-sristi-green-600">
           R & D
          </h2>
          <p className="mb-10 text-lg text-gray-600">1. Ongoing Projects</p>

          <h2 className="mb-14 text-center text-4xl font-semibold text-sristi-green-600">
            Funding
          </h2>

          <div className="max-w-5xl space-y-10 text-gray-600">
            {fundingSupport.map((item, index) => (
              <div key={item.title}>
                <h3 className="mb-3 text-[18px] font-bold text-gray-700">
                  {index + 1}. {item.title}
                </h3>

                <ul className="list-disc space-y-2 pl-8 text-base leading-9">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeOffer;