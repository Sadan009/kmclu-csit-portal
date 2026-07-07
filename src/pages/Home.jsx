import Hero from "../components/home/Hero";
import QuickAccessGrid from "../components/home/QuickAccessGrid";
import LatestNotices from "../components/home/LatestNotices";
import DepartmentHighlights from "../components/home/DepartmentHighlights";
import ImportantLinks from "../components/home/ImportantLinks";
import AchievementPreview from "../components/achievements/AchievementPreview";

export default function Home() {
  return (
    <>
      <title>CSIT Department | KMCLU Lucknow</title>
      <Hero />
      <QuickAccessGrid />
      <LatestNotices />
      <DepartmentHighlights />
      <AchievementPreview />
      <ImportantLinks />
    </>
  );
}
