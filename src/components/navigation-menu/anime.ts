export const navVariants = {
  hidden: {
    opacity: 0,
    width: "min(83vw, 58px)",
    height: "min(50vh, 58px)",
    borderRadius: "20px",
    paddingTop: "12px",
  },
  initial: {
    opacity: 1,
    width: "min(83vw, 365px)",
    height: "min(50vh, 58px)",
    borderRadius: "20px",
    paddingTop: "12px",
    transition: {
      duration: 0.5,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      paddingTop: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
  animate: {
    opacity: 1,
    width: "min(90vw, 560px)",
    height: "min(80vh, 540px)",
    borderRadius: "30px",
    paddingTop: "20px",
    transition: {
      duration: 0.5,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      paddingTop: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
};
