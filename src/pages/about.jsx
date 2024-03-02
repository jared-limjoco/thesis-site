import Page from '@/ui/page';
import AboutSection from '@/features/about';

export default function LandingPage() {
  return (
    <Page
      title="About - Atlas"
      description="Learn more about Atlas, our crowdsourcing platform for street accessibility."
      contribute={false}
    >
      <AboutSection />
    </Page>
  );
}
