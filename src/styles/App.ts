import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  appContainer: {
    maxWidth: 600,
    margin: "0 auto",
  },
  kbd: {
    border: "1px solid gray",
    boxShadow: "1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444",
    borderRadius: 3,
    marginInline: 10,
    padding: 2,
  },
  arrows: {
    height: 16,
    width: 16,
  },
  description: {
    paddingBlock: 15,
  },
   label: {
    paddingBlock: 5,
    display: "inline-block"
  }
});