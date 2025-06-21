import HeaderForPages from "../components/header-for-pages";
import ServicesBox from "../Modals/services-box";
import {
  faChalkboardTeacher,
  faAppleAlt,
  faBus,
  faPaintBrush,
  faRunning,
  faBrain,
  faLanguage,
  faHeartbeat,
  faBirthdayCake,
  faChessKnight,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Eğitim Programları",
    icon: faChalkboardTeacher,
    description: "Oyun temelli, yaşa uygun gelişim odaklı müfredat.",
  },
  {
    title: "Sağlıklı Beslenme",
    icon: faAppleAlt,
    description: "Diyetisyen onaylı, dengeli ve taze yemek menüleri.",
  },
  {
    title: "Servis Hizmeti",
    icon: faBus,
    description: "Güvenli ve GPS takipli servis araçları.",
  },
  {
    title: "Sanat ve El Becerileri",
    icon: faPaintBrush,
    description: "Yaratıcılığı artıran el işi ve sanat etkinlikleri.",
  },
  {
    title: "Fiziksel Aktivite ve Spor",
    icon: faRunning,
    description: "Açık hava oyunları ve çocuklara özel egzersizler.",
  },
  {
    title: "Zihinsel Gelişim Atölyeleri",
    icon: faBrain,
    description: "Problem çözme ve zeka oyunları ile zihinsel gelişim.",
  },
  {
    title: "Yabancı Dil Eğitimi",
    icon: faLanguage,
    description: "İngilizce öğrenimini destekleyen oyunlar ve şarkılar.",
  },
  {
    title: "Psikolojik Destek",
    icon: faHeartbeat,
    description: "Gelişim takibi ve rehberlik hizmetleri.",
  },
  {
    title: "Doğum Günü Organizasyonları",
    icon: faBirthdayCake,
    description: "Çocuklara özel eğlenceli kutlamalar.",
  },
  {
    title: "Satranç Eğitimi",
    icon: faChessKnight,
    description:
      "Strateji ve düşünme becerilerini geliştiren temel satranç dersleri.",
  },
];

export default function Services() {
  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">hizmetler</h1>
      </HeaderForPages>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {services.map((element, index) => {
          return (
            <div key={index}>
              <ServicesBox
                icon={element.icon}
                title={element.title}
                description={element.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
