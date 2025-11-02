import ClipboardShowcase from './clipboard-showcase/ClipboardShowcase';
import Footer from './footer/Footer';
import HeroText from './hero-text/HeroText';
import Hero from './hero/Hero';
import SnippetShowcase from './snippet-showcase/SnippetShowcase';
import Sponsor from './sponsor/Sponsor';
import Workflow from './workflow/Workflow';

function RootPage() {
  return (
    <div className="">
      <Hero className="mt-[130px] mb-[150px]" />
      <SnippetShowcase className="mb-[150px]" />
      <ClipboardShowcase className="mb-[170px]" />
      <Workflow className="mb-[170px]" />
      <Sponsor className="mb-[160px]" />

      <HeroText titleText="Clipboard for iOS and Mac OS" className="mb-[146px]">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud
        <br /> and you’re ready to start adding to your clipboard.
      </HeroText>

      <Footer />
    </div>
  );
}

export default RootPage;
