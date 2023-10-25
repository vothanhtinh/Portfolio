"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Home from "../Home";
import Skills from "../Skills";
import Information from "../Infomation";

export default function HOMEPAGE() {
  return (
    <>
      <Fullpage className="h-auto">
        <FullpageNavigation />
        <FullPageSections className="mt-24">
          <FullpageSection>
            <Home />
          </FullpageSection>
          <FullpageSection>
            <Skills />
          </FullpageSection>
          <FullpageSection>
            <Information />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}
