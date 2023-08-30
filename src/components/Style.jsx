const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  underLine: "h-1 bg-green-500 mb-4",
  inputBox: "mt-2 rounded-md p-2",
  heading1:
    "font-poppins font-semibold xs:text-[40px] text-[32px] text-white xs:leading-[32.8px] leading-[66.8px] w-full ",
  heading2:
    "font-poppins font-semibold xs:text-[32px] text-[24px] text-white xs:leading-[28.8px] leading-[32.8px] w-full pb-4",
  heading3:
    "font-poppins font-semibold xs:text-[24px] text-[16px] text-white xs:leading-[24.8px] leading-[28.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dark-500 text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexCenterCol: "flex justify-center items-center flex-col",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  overlaySlow:
    "absolute inset-0 bg-gradient-to-t from-bg-dark-900  via-dark-500 to-bg-dark-100",

  padding: "sm:px-16 px-6 sm:py-12 py-4",
  skyGradient: "bg-gradient-to-t from-sky-800 via-sky-500 to-sky-400 p-10",
  darkGradient: "bg-gradient-to-t from-sky-300 via-sky-200 to-sky-100 p-10",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  innerShadow: "shadow-inner bg-blue-500 bg-opacity-50 text-white p-4",

  hoveringNavBar:
    " hover:bg-green-400 hover:border-b-4 hover:font-bold border-green-800",
  hoveringSubmenuNavBar:
    " hover:bg-green-400 hover:border-l-4 hover:font-bold border-green-800",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const btnStyle = {
  defaultBtn:
    "bg-gradient-to-r from-sky-600 via-green-300 to-sky-400 text-white hover:cursor-pointer hover:text-sky-100 transition-all duration-300 flex justify-center items-center rounded-lg",

  smallBtn: ` h-8 px-8 py-2`,

  mediumBtn: ` h-12 px-8 py-4 text-xl`,

  bigBtn: ` h-16 px-24 py-16`,

  textBtnIcon: "text-2xl",
};

// export const icons = {
//   btnIcon1: <ion-icon name="arrow-forward-circle-outline"></ion-icon>,
// };
export default styles;

export const icons = [
  <ion-icon name="arrow-forward-circle-outline" key="0"/>,
  <ion-icon name="arrow-undo-circle-outline" key="1"/>,
  <ion-icon name="navigate-outline" key="2"/>,
];
export const socialMedia = [
  {
    id: 1,
    icon: <ion-icon name="logo-facebook"></ion-icon>,
    link: "",
  },
  {
    id: 2,
    icon: <ion-icon name="logo-instagram"></ion-icon>,
    link: "",
  },
  {
    id: 3,
    icon: <ion-icon name="logo-twitter"></ion-icon>,
    link: "",
  },
  {
    id: 4,
    icon: <ion-icon name="logo-whatsapp"></ion-icon>,
    link: "",
  },
];
