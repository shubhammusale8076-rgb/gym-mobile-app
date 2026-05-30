import activity from "@/assets/icons/activity.png";
import add from "@/assets/icons/add.png";
import adobe from "@/assets/icons/adobe.png";
import back from "@/assets/icons/back.png";
import canva from "@/assets/icons/canva.png";
import claude from "@/assets/icons/claude.png";
import dropbox from "@/assets/icons/dropbox.png";
import figma from "@/assets/icons/figma.png";
import github from "@/assets/icons/github.png";
import medium from "@/assets/icons/medium.png";
import menu from "@/assets/icons/menu.png";
import notion from "@/assets/icons/notion.png";
import openai from "@/assets/icons/openai.png";
import plus from "@/assets/icons/plus.png";
import setting from "@/assets/icons/setting.png";
import spotify from "@/assets/icons/spotify.png";
import wallet from "@/assets/icons/wallet.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


type IconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type TabIconConfig = {
  active: IconName;
  inactive: IconName;
};

export const icons = {
    wallet,
    setting,
    activity,
    add,
    back,
    menu,
    plus,
    notion,
    dropbox,
    openai,
    adobe,
    medium,
    figma,
    spotify,
    github,
    claude,
    canva,
} as const;

export const TAB_ICONS: Record<string,TabIconConfig> = { 
    HOME: { 
        active: "view-dashboard", 
        inactive: "view-dashboard-outline", 
    }, 
    MEMBERS: { 
        active: "account-multiple", 
        inactive: "account-multiple-outline", 
    }, 
    PAYMENTS: { 
        active: "wallet", 
        inactive: "wallet-outline", 
    }, 
    ATTENDANCE: { 
        active: "calendar-month", 
        inactive: "calendar-month-outline", 
    }, 
    
    Setting: { 
        active: "cog", 
        inactive: "cog-outline", 
    }, 

};

export type IconKey = keyof typeof icons;