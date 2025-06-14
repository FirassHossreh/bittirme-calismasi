import Slider from "../components/slider";
import FullScreenModal from "../Modals/full-screen-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faLightbulb,
  faRocket,
  faHeart,
  faStar,
  faSun,
  faUsers,
  faBookOpen,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import NewsBox from "../Modals/news-box";
import VMTBox from "../Modals/vmt-box";
const ourCoreValues = [
  {
    title: `Nurturing Care`,
    subTitle: `Creating a loving and supportive environment where every childfeels safe and valued`,
    icon: faHeart,
  },
  {
    title: `Excellence`,
    subTitle: `Committed to providing the highest quality early childhood education`,
    icon: faStar,
  },
  {
    title: `Growth`,
    subTitle: `Fostering development through play-based learning and exploration`,
    icon: faSun,
  },
];
const whyChooseUs = [
  {
    title: `Small Class Sizes`,
    subTitle: `Ensuring individual attention for each child's unique needs`,
    icon: faUsers,
  },
  {
    title: `Enriching Curriculum`,
    subTitle: `Balanced program focusing on academic and social development`,
    icon: faBookOpen,
  },
  {
    title: `Creative Expression`,
    subTitle: `Daily activities that spark imagination and creativity`,
    icon: faPalette,
  },
];

export default function Home() {
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
      <div className="flex justify-between items-stretch flex-wrap my-[3.125rem] mx-auto max-w-[1200px] gap-10 p-5">
        <VMTBox
          title={visionTitle}
          description={visionDescription}
          spanbgc={"teal"}
        >
          <FontAwesomeIcon
            icon={faLightbulb}
            size="3x"
            style={{ color: "teal" }}
          />
        </VMTBox>
        <VMTBox
          title={missionTitle}
          description={missionDescription}
          spanbgc={"red"}
        >
          <FontAwesomeIcon icon={faRocket} size="3x" style={{ color: "red" }} />
        </VMTBox>
        <VMTBox
          title={targetTitle}
          description={targetDescription}
          spanbgc={"orange"}
        >
          <FontAwesomeIcon
            icon={faBullseye}
            size="3x"
            style={{ color: "orange" }}
          />
        </VMTBox>
      </div>
      <FullScreenModal
        title={"Temel Değerlerimiz"}
        content={ourCoreValues}
        bgColor={"#007bff"}
        color={"white"}
      />
      <FullScreenModal
        title={"Neden Bizi Seçmelisiniz?"}
        content={whyChooseUs}
        bgColor={"white"}
        color={"#007bff"}
        descriptionColor={"#374151"}
      />

      <div className="w-full relative">
        <div className="w-full flex justify-center">
          <h1 className="text-center top-[28px] left-1/2 text-[#007bff] transform -translate-x-1/2 absolute bg-white w-[30%] capitalize">
            haberler ve duyrular
          </h1>
          <hr className="my-[50px] w-[80%] h-[2px] border-none bg-[#f1f1f1]" />
        </div>
        <div className="flex flex-wrap w-4/5 mx-auto">
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </div>
      </div>
    </>
  );
}
