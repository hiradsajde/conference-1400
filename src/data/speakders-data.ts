import miladMoafiAvatar from "assets/images/speakers/milad-moafi.png";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import speaker4Avatar from "assets/images/speakers/speaker-4.jpg";
import speaker5Avatar from "assets/images/speakers/speaker-5.jpg";

export const speakersList: speaker[] = [
  {
    name: "میلاد معافی",
    position: "توسعه‌دهنده‌ی ارشد فرانت‌اند",
    company: "بانک سامان",
    photo: miladMoafiAvatar,
    brandClass: "text-[#017be6]",
  },
  {
    name: "امیرعلی قلی",
    position: "توسعه دهنده‌ی جاوااسکریپت",
    company: "لیارا",
    photo: amirAliGholiAvatar,
    brandClass: "text-[#303030]",
  },
  {
    name: "میلاد اعظمی",
    position: "اینفولوئنسر فرانت‌اند",
    company: "فریلنسر",
    photo: miladAzamiAvatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
  },
  {
    name: "رعنا خوشه",
    position: "مدیر فنی",
    company: "لیارا",
    photo: speaker4Avatar,
    brandClass: "",
  },
  {
    name: "جواد جوادی",
    position: "مدیر تیم پشتیبانی",
    company: "جابینجا",
    photo: speaker5Avatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
  },
];

export interface speaker {
  name: string;
  position: string;
  company: string;
  brandClass?: string;
  photo: StaticImageData;
}
