export const navVariants = {
  initial: {
    width: "min(65vw, 365px)",
    height: "min(50vh, 58px)",
    borderRadius: "20px",
    transition: {
      duration: 0.5,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
  animate: {
    width: "min(80vw, 650px)",
    height: "min(80vh, 540px)",
    borderRadius: "30px",
    transition: {
      duration: 0.5,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
};
