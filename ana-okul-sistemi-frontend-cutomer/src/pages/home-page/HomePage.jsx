import NewsAndAnnouncements from "../../components/news-and-announcements/NewsAndAnnouncements";
import Slider from "../../components/slider/Slider";
import VisionMissionTarget from "../../components/vision-mission-target/VisionMissionTarget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./homePage.css";

export default function HomePage() {
  const visionTitle = "vizyon";
  const visionDescription = `Fanasan Anaokulu olarak, çocukların merak duygularını besleyerek
            öğrenmeyi keşfetmeleri için ilham veren, güvenli ve sevgi dolu bir
            eğitim ortamı yaratmayı hedefliyoruz. Amacımız, her çocuğun bireysel
            yeteneklerini ve potansiyelini en üst düzeyde geliştirebileceği
            yenilikçi bir eğitim anlayışı sunmak ve geleceğin bilinçli,
            özgüvenli ve yaratıcı bireylerini yetiştirmektir.`;
  const missionTitle = "misyon";
  const missionDescription = `Fanasan Anaokulu olarak misyonumuz, her çocuğun öğrenme yolculuğunu
            bireysel ihtiyaçlarına göre şekillendiren çocuk merkezli bir eğitim
            modeli sunmaktır. Deneyimli kadromuzla, çocukların güvenli bir
            ortamda sosyo-duygusal gelişimlerini destekliyoruz. Yaratıcı
            faaliyetler ve modern materyallerle geleceğe hazırlarken, sağlıklı
            beslenme ve aktif yaşamı teşvik ederek beden ve zihin sağlıklarını
            güçlendirmeyi önemsiyoruz.`;
  const targetTitle = "hedef";
  const targetDescription = `Fanasan Anaokulu'nun hedefi, çocukların öğrenme sürecine aktif katılımını 
  sağlayarak bireysel yeteneklerini en üst düzeyde geliştirmek ve onları özgüvenli, yaratıcı bireyler 
  olarak geleceğe hazırlamaktır. Sosyal, duygusal ve akademik becerilerini destekleyerek, sağlıklı ve
   dengeli bir gelişim ortamı sunmayı amaçlıyoruz.`;

  return (
    <>
      <Slider />
      <div className="vision-mission-target">
        <VisionMissionTarget
          title={visionTitle}
          description={visionDescription}
          classTitle={"vision"}
        >
          <FontAwesomeIcon
            icon={faLightbulb}
            size="3x"
            style={{ color: "teal" }}
          />
        </VisionMissionTarget>
        <VisionMissionTarget
          title={missionTitle}
          description={missionDescription}
          classTitle={"mission"}
        >
          <FontAwesomeIcon icon={faRocket} size="3x" style={{ color: "red" }} />
        </VisionMissionTarget>
        <VisionMissionTarget
          title={targetTitle}
          description={targetDescription}
          classTitle={"target"}
        >
          <FontAwesomeIcon
            icon={faBullseye}
            size="3x"
            style={{ color: "orange" }}
          />
        </VisionMissionTarget>
      </div>
      <NewsAndAnnouncements />
    </>
  );
}
