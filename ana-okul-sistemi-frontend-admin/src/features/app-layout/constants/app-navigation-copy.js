import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import ForumIcon from "@mui/icons-material/Forum";
import EqualizerIcon from "@mui/icons-material/Equalizer";

export const APP_NAVIGATION_COPY = [
  {
    kind: "header",
    title: "Ana Menu",
  },
  {
    segment: "home",
    title: "Ana Sayfa",
    icon: <HomeRoundedIcon />,
  },
  {
    segment: "teachers",
    title: "Öğretmenler",
    icon: <PersonIcon />,
  },
  {
    segment: "students",
    title: "Öğrenciler",
    icon: <PeopleIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Okul",
  },
  {
    segment: "school",
    title: "Okul",
    icon: <SchoolIcon />,
    children: [
      {
        segment: "lesson-schedule",
        title: "Ders Programı",
        icon: <CalendarMonthIcon />,
      },
      {
        segment: "food-list",
        title: "Yemek Listesi",
        icon: <RestaurantMenuIcon />,
      },
      {
        segment: "events",
        title: "Etkinlikler Sayfasi",
        icon: <CelebrationIcon />,
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Oyunlar",
  },
  {
    segment: "/Oyunlar",
    title: "Oyunlar",
    icon: <SportsEsportsIcon />,
    children: [
      {
        segment: "first-game",
        title: "Birinci Oyun",
        icon: <SportsEsportsIcon />,
      },
      {
        segment: "second-game",
        title: "Ikinci Oyun",
        icon: <SportsEsportsIcon />,
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Iletisim",
  },
  {
    segment: "chat",
    title: "chat",
    icon: <ForumIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Raporlar & İstatistikler",
  },
  {
    segment: "reports-statistics",
    title: "Raporlar & İstatistikler",
    icon: <EqualizerIcon />,
  },
];
