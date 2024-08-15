import React from "react";
import { TracingBeam } from "./components/ui/tracing-beam";
import { GridBeam } from "./components/ui/GridBeam";
import { Tiles } from "./tiles";
import { CursorComponent } from "./CursorComponent";
import { GridBeamExample } from "./GridBeamExample";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./lib/utils";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import { AnimatedModalDemo } from "./AnimatedModelExample";
import { HeroParallax } from "./components/ui/hero-parallax";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { WobbleCardDemo } from "./WobbleCardDemo";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo";
import { GlowingStarsBackgroundCardPreview } from "./GlowingStarsBackgroundCardPreview";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import { MockBrowserComponent } from "./MockBrowserComponent";
import { Faq } from "./Faq";
import { MarqueeExample } from "./MarqueeExample";
import { Skeleton } from "./Skeleton";

const AnimatedGridBackgroundSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={
        "w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center"
      }
    >
      <div className={"w-fit h-fit relative z-[2]"}>{children}</div>
      <div className={"absolute top-0 left-0 h-full w-full"}>
        <Tiles rows={30} cols={20} />
      </div>
    </div>
  );
};
const ContentSection = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
    <div>{children}</div>
  </section>
);

const Footer = () => (
  <footer className="p-4 mt-12 text-center">
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <>
      <div className="text-white bg-[#1A1A1A]">
        <Spotlight className="left-0 -top-40 md:left-60 md:-top-20" />
        <GridBeamExample />
        {/* <AnimatedGridBackgroundSection>
          <div className={"text-xl font-bold"}>
            This is a cool background effect
          </div>
        </AnimatedGridBackgroundSection> */}
        {/* <CursorComponent /> */}

        <TracingBeam>
          <div className="p-8">
            <h1 className="mb-8 text-4xl font-bold">
              Welcome to My Long Content Page
            </h1>

            <ContentSection title="Section 1: Introduction">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Quisque vel metus in lacus ullamcorper auctor. Suspendisse
                potenti. In hac habitasse platea dictumst. Curabitur tempus
                purus non nisi condimentum, ac vestibulum lorem aliquet. Fusce
                quis magna at lorem congue varius. Vivamus in magna felis. Sed
                dignissim nisi ut erat consectetur, ut suscipit magna malesuada.
                Maecenas nec odio id tortor blandit accumsan in vel mauris.
              </p>
            </ContentSection>

            <ContentSection title="Section 2: Detailed Overview">
              <p className="mb-4">
                Fusce ut velit laoreet, tempus arcu nec, ultricies nisi.
                Phasellus suscipit suscipit ligula, in posuere risus venenatis
                in. Maecenas a erat accumsan, blandit enim et, efficitur lectus.
                Pellentesque vulputate massa ut sapien sodales, ut interdum est
                volutpat. Phasellus nec metus id nisi consequat fermentum sit
                amet a risus. Proin consectetur diam vel quam fringilla, ac
                tincidunt justo tincidunt. Donec efficitur, erat id consequat
                condimentum, sapien odio lobortis massa, a aliquet orci nisi et
                orci.
              </p>
              <p>
                Donec vehicula lectus a mauris commodo, quis ullamcorper nisi
                dapibus. Suspendisse potenti. Integer at vestibulum felis.
                Aenean ut nisi vitae erat ornare scelerisque. In dignissim
                semper leo, ac lacinia magna fermentum a. Cras vel tincidunt
                leo. Vivamus vel nunc euismod, dignissim massa a, ultrices
                tortor. Ut nec urna ex. Duis ac pharetra magna, et viverra
                neque.
              </p>
            </ContentSection>

            <ContentSection title="Section 3: Further Insights">
              <p className="mb-4">
                Cras ac venenatis quam. Nam laoreet justo vitae malesuada
                malesuada. Integer auctor velit sit amet tortor feugiat, a
                interdum est bibendum. Donec gravida suscipit magna, ac
                pellentesque est aliquet ut. Nam nec magna non orci feugiat
                efficitur. Curabitur dictum eu odio at tempus. Nam tincidunt sem
                vel purus tempus, non vehicula risus feugiat. Suspendisse auctor
                laoreet turpis, eget pretium erat blandit a. Donec varius, arcu
                ac ullamcorper posuere, ex urna sollicitudin lectus, vitae
                efficitur metus erat a quam. Nulla facilisi.
              </p>
              <p>
                Mauris euismod nunc in nunc ornare, ut placerat dolor ultricies.
                Nulla facilisi. Ut pharetra euismod ante in egestas.
                Pellentesque mollis, leo non fermentum gravida, ligula sem
                luctus libero, nec viverra felis nisl et lacus. Curabitur
                lacinia risus eu turpis suscipit, a posuere neque faucibus.
                Praesent dictum accumsan felis. Aenean fringilla, augue a
                suscipit interdum, odio lorem viverra quam, et venenatis nunc
                justo in lorem. Nulla dapibus enim sit amet ligula malesuada,
                vel lacinia purus luctus.
              </p>
            </ContentSection>

            <ContentSection title="Section 4: Conclusion">
              <p className="mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nullam non nisi a turpis ullamcorper
                vulputate. Nullam id urna id mi convallis elementum. Vivamus
                scelerisque arcu non erat lobortis, ut vehicula purus ultrices.
                Curabitur sagittis, magna a tempus vehicula, nisi dolor suscipit
                eros, ut sodales dolor augue vel elit. Suspendisse dapibus
                dictum sapien, vel consectetur odio fermentum ac. Phasellus
                tincidunt lacus ac scelerisque laoreet. Nulla facilisi. Donec
                sit amet odio sit amet eros convallis dignissim. Donec nec arcu
                ipsum.
              </p>
              <p>
                Curabitur ultricies felis a urna efficitur, a fermentum risus
                consectetur. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Duis vitae ante
                velit. Phasellus tincidunt nisi erat, at auctor leo laoreet id.
                Suspendisse vitae augue in ex dignissim sollicitudin. Fusce
                sollicitudin justo non felis commodo, at laoreet mauris aliquet.
                Sed condimentum eros in mi facilisis varius.
              </p>
            </ContentSection>

            <Footer />
          </div>
        </TracingBeam>

        {/* blue side animation feature section */}
        <FeaturesSectionDemo />

        {/* btn click and pop up */}
        <AnimatedModalDemo />

        {/*Hero parallax seciton */}
        <HeroParallaxDemo />

        {/* wobblecard demo section */}
        <WobbleCardDemo />

        {/* placeholder demo section */}
        <PlaceholdersAndVanishInputDemo />
        <HoverBorderGradientDemo />
        {/* glowing starts card */}
        <GlowingStarsBackgroundCardPreview />

        {/* hover border gradient */}

        {/* mockBrowser component section */}
        <div className="flex justify-center w-full h-full py-10">
          <MockBrowserComponent
            url="https://google.com"
            className={"w-full max-w-[600px] h-[300px]"}
          >
            <section
              className={"w-full h-full flex items-center justify-center"}
            >
              <h1 className={"md:text-xl text-base"}>Hi!</h1>
            </section>
          </MockBrowserComponent>
        </div>
        {/* FAQ section */}
        <Faq/>

        {/* Marquee */}
<MarqueeExample/>

{/* Skeleten */}
<Skeleton/>
      </div>
    </>
  );
}

export default App;
