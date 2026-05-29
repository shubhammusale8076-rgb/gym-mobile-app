
declare global {


    type TabIconType = {
        active: string;
        inactive: string;
    };

    type TabIconProps = {
        focused: boolean;
        icon: TabIconType;
    };

}

export { };