import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  dropDownContainer: {
    width: "100%",
    fontSize: "1.1rem",
  },
  selectedItems: {
    display: "flex",
    flexWrap: "wrap",
    gap: 15,
    "& .item": {
      background: "#d2e2ff4e",
      borderRadius: "10px",
      color: "#3d81ff",
      paddingInline: 10,
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e7e7e7",
    padding: 16,
    borderRadius: 20,
    userSelect: "none",
    background: "white",
  },
  itemList: {
    margin: 0,
    padding: 20,
    position: "relative",
    top: 5,
    borderRadius: 20,
    listStyle: "none",
    border: "1px solid #e7e7e7",
    userSelect: "none",
    background: "white",
    overflow: "auto",
    maxHeight: 400,
    "& li": {
      padding: 15,
      display: "flex",
      justifyContent: "space-between",
      "&.active": {
        background: "#d2e2ff4e",
        borderRadius: "10px",
        color: "#3d81ff",
      },
    },
  },
  arrows: {
    height: 16,
    width: 16,
  },
});
