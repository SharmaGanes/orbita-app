import Link from "next/link";
import { Card, Cards } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-16 sm:px-8 md:px-16">
      <div className="max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-fd-primary">Welcome to Orbita App</span>
          <div className="mt-2 text-3xl sm:text-4xl md:text-5xl">
            Streamline your clinical trial data collection with ease
          </div>
        </h1>

        <p className="mb-8 text-lg text-fd-muted-foreground sm:text-xl">
          Developed by the Imperial NHS University Cardiology Group,
          <span className="font-semibold"> Orbita App</span> is a powerful and
          intuitive platform for gathering daily patient-reported outcomes. Used
          in renowned clinical trials like
          <span className="italic"> Orbita</span>,
          <span className="italic"> Orbita-2</span>,
          <span className="italic"> Orbita-Cosmic</span>, and
          <span className="italic"> Orbita-Star</span>, it ensures reliable,
          research-grade data with minimal effort.
        </p>

        <div className="mx-auto mb-12 w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.loom.com/embed/266041b88d7941f094916b02bf0b88a7?sid=0cd1d8fc-0abc-4fc3-b36e-f4c7c9816385"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>

        <div className="mb-16 space-y-12">
          <section>
            <h2 className="mb-8 text-3xl font-bold">Why Choose Orbita App?</h2>
            <Cards>
              <Card title="Proven Success" icon="📈" href="/docs/about">
                Utilized successfully by Imperial NHS University Cardiology
                Group, demonstrating significant improvements in data collection
                efficiency.
              </Card>

              <Card
                title="User-Friendly Interface"
                icon="👥"
                href="/docs/getting-started"
              >
                Designed with both researchers and patients in mind, simplifying
                complex data entry while maintaining superb quality.
              </Card>

              <Card title="Expanding Access" icon="🌍" href="/docs/test">
                Now available to institutions worldwide, enabling more research
                teams to benefit from streamlined symptom collection.
              </Card>

              <Card
                title="Comprehensive Documentation"
                icon="📚"
                href="/docs/test"
              >
                Detailed guides and resources to ensure smooth integration and
                effective usage in your trials.
              </Card>
            </Cards>
          </section>

          <div className="rounded-lg border border-fd-muted bg-fd-subtle p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Revolutionizing Clinical Research
            </h2>
            <p className="mb-6 text-fd-muted-foreground">
              <span className="font-semibold">Orbita App</span> is reshaping how
              patient-reported outcomes are collected, providing teams with a
              dependable solution for improving trial efficiency. Start
              collecting high-quality data today and advance your clinical
              research with ease.
            </p>
            <Link href="/docs" className="text-fd-primary hover:underline">
              Explore our documentation →
            </Link>
          </div>

          <section>
            <h2 className="mb-8 text-3xl font-bold">Our Published Research</h2>
            <Cards>
              <Card
                title="ORBITA"
                icon="📚"
                href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)32714-9/abstract"
                external={true}
              >
                The original ORBITA trial published in The Lancet, pioneering
                the use of placebo-controlled trials in interventional
                cardiology.
              </Card>

              <Card
                title="ORBITA-2"
                icon="🔬"
                href="https://www.nejm.org/doi/full/10.1056/NEJMoa2310610"
                external={true}
              >
                The follow-up ORBITA-2 trial published in The New England
                Journal of Medicine, further advancing our understanding.
              </Card>

              <Card
                title="ORBITA-STAR"
                icon="⭐"
                href="https://www.jacc.org/doi/10.1016/j.jacc.2024.04.001"
                external={true}
              >
                The ORBITA-STAR study published in JACC, exploring new frontiers
                in coronary intervention research.
              </Card>

              <Card
                title="ORBITA-COSMIC"
                icon="🌌"
                href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)00256-3/fulltext"
                external={true}
              >
                The ORBITA-COSMIC trial published in The Lancet, investigating
                cosmic radiation effects.
              </Card>
            </Cards>
          </section>
        </div>
      </div>
    </main>
  );
}
