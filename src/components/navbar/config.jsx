import Logo from "@/assets/images/Destiny_Ritual_Fan_icon.png";
import DestinyRitualFanIcon from "@/assets/images/Destiny_Ritual_Fan_icon.png";
import GenesisRitualFanIcon from "@/assets/images/Genesis_Ritual_Fan_icon.png";
import ArcaneAuthenticSymbolSelectCoupon from  "@/assets/images/symbol/Arcane_Authentic_Symbol_Select_Coupon.png";

export const logo = {
  title: "MapleKit",
  src: Logo,
  url: "/",
  alt: "MapleKit",
};

export const menu = [
  // { title: "Home", url: "/" },
  {
    title: "工具",
    url: "#",
    items: [
      {
        title: "命運武器",
        icon: DestinyRitualFanIcon,
        url: "/calc/destiny-weapon",
      },
      {
        title: "創世武器",
        icon: GenesisRitualFanIcon,
        url: "/calc/genesis-weapon",
      },
    ],
  },
  {
    title: "資料",
    url: "#",
    items: [
      {
        title: "符文系統",
        icon: ArcaneAuthenticSymbolSelectCoupon,
        url: "/data/symbols",
      },
    ],
  },
  {
    title: "常見問題",
    url: "/faq",
  },
];