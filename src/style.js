export const styles = {
  paddingX: "px-8 sm:px-12",
  paddingY: "py-8 sm:py-12",
  padding: "p-8 sm:p-12",

  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",

  boxWidth: "w-full xl:max-w-screen-xl mx-auto",
};

export const layout = {
  section: `${styles.boxWidth} ${styles.padding}`,
  sectionReverse: `${styles.flexCenter} flex-col-reverse sm:flex-row gap-10 sm:gap-2 ${styles.boxWidth} ${styles.padding}`,

  sectionFlex: `${styles.flexCenter} flex-col md:flex-row gap-10`,
};
