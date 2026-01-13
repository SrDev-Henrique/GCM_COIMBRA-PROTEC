export const fixedContactButtonVariants = {
  initial: {
    width: "min(50vw, 57px)",
    height: "min(50vw, 57px)",
    borderRadius: "9rem",
    transition: {
      duration: 0.4,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
  animate: {
    width: "min(50vw, 220px)",
    height: "min(50vw, 195px)",
    borderRadius: "2rem",
    transition: {
      duration: 0.4,
      width: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.4, bounce: 0.15 },
    },
  },
};
