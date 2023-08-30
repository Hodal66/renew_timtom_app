
import NavBar from "../../components/navigation/NavBar"
import Apply from "./Apply"
import OurServices from "./OurServices"
import VideoBackground from "./VideoBackgound"
import WelcomeNotes from "./WelcomeNotes"
function HomePage() {
  return (
    <div>
      <NavBar />
      <VideoBackground/>
      <WelcomeNotes />
      <Apply />
      <OurServices />
    </div>
  )
}

export default HomePage
