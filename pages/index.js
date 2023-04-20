import FollowSection from "@/components/FollowSection";
import HangkopSection from "@/components/HangkopSection";
import HomeSection from "@/components/HomeSection";
import Service from "@/components/Service";



export default function Home() {
  return (
    <>
      <div>
        <HomeSection />
        <Service />
        {/* <HangkopSection /> */}
        <FollowSection />
      </div>
    </>
  )
}
