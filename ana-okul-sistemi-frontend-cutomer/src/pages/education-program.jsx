import {
  faBaby,
  faSmile,
  faGraduationCap,
  faLanguage,
  faCalculator,
  faPaintBrush,
  faUsers,
  faMicroscope,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderForPages from "../components/header-for-pages";

const ageGroups = [
  {
    title: "3-4 Yaş Grubu",
    focus: "Temel motor beceriler, renkler, şekiller ve sosyal etkileşim",
    icon: faBaby,
  },
  {
    title: "4-5 Yaş Grubu",
    focus: "Dil gelişimi, hikaye anlatımı, grup oyunları",
    icon: faSmile,
  },
  {
    title: "5-6 Yaş Grubu",
    focus: "Okuma-yazmaya hazırlık, temel matematik, problem çözme",
    icon: faGraduationCap,
  },
];

const learningAreas = [
  { title: "Dil Gelişimi", icon: faLanguage },
  { title: "Matematik Temelleri", icon: faCalculator },
  { title: "Sanat ve Müzik", icon: faPaintBrush },
  { title: "Sosyal Etkileşim", icon: faUsers },
  { title: "STEM Etkinlikleri", icon: faMicroscope },
  { title: "Psikomotor Aktiviteler", icon: faRunning },
];

export default function EducationProgram() {
  return (
    <>
      <HeaderForPages>
        <h1 className="text-white text-[2.5rem] p-5">Eğitim Programımız</h1>
      </HeaderForPages>
      <div className="p-8 min-h-screen">
        <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Anaokulumuzda çocukların çok yönlü gelişimini destekleyen oyun
          temelli, yaşa uygun ve pedagojik temellere dayalı eğitim programları
          sunuyoruz.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#007bff] rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <FontAwesomeIcon
                icon={group.icon}
                className="text-4xl text-[#007bff] mb-4"
              />
              <h3 className="text-xl font-bold text-[#007bff] mb-2">
                {group.title}
              </h3>
              <p className="text-gray-700 text-sm">{group.focus}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[#007bff] mt-16 text-center">
          Öne Çıkan Öğrenme Alanları
        </h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
          {learningAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl text-center shadow border border-blue-100 w-full"
            >
              <FontAwesomeIcon
                icon={area.icon}
                className="text-3xl text-[#007bff] mb-2"
              />
              <h4 className="text-sm font-medium text-gray-700">
                {area.title}
              </h4>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[#007bff] mt-16 text-center">
          Günlük Program Akışı
        </h3>
        <div className="mt-6 max-w-3xl mx-auto">
          <table className="w-full bg-white shadow border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#007bff] text-white">
                <th className="p-3 text-left">Saat</th>
                <th className="p-3 text-left">Etkinlik</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["08:30 – 09:00", "Geliş ve Serbest Oyun"],
                ["09:00 – 10:00", "Grup Zamanı ve Dil Etkinliği"],
                ["10:00 – 10:30", "Ara Öğün"],
                ["10:30 – 11:30", "Atölye / Sanat / STEM Etkinliği"],
                ["11:30 – 12:00", "Fiziksel Aktivite"],
                ["12:00 – 13:00", "Öğle Yemeği"],
                ["13:00 – 14:30", "Dinlenme Zamanı"],
                ["14:30 – 16:00", "Oyun / Hikaye / Değerlendirme"],
              ].map(([time, activity], index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 text-sm text-gray-700">{time}</td>
                  <td className="p-3 text-sm text-gray-700">{activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
