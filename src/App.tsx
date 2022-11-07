import { useDropdown } from "./hooks/useDropdown";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useStyles } from "./styles/App";

const items = [
  {
    id: 1,
    label: "Science 👨‍🔬",
    value: "Science",
  },
  {
    id: 2,
    label: "Art 🗿",
    value: "Art",
  },
  {
    id: 3,
    label: "Education 👨‍🎓",
    value: "Education",
  },
  {
    id: 4,
    label: "Sport 🚴‍♂️",
    value: "Sport",
  },
  {
    id: 5,
    label: "Games 🎮",
    value: "Games",
  },
  {
    id: 6,
    label: "Health 🏥",
    value: "Health",
  },
];

function App() {
  const classes = useStyles();
  const { Dropdown: CategoryDropDown1 } = useDropdown({
    items,
    placeholderText: "Select category",
  });
  const { Dropdown: CategoryDropDown2 } = useDropdown({
    items,
    placeholderText: "Select another category",
  });

  return (
    <div className={classes.appContainer}>
      <p className={classes.description}>
        To navigate use
        <kbd className={classes.kbd}>
          <ChevronUpIcon className={classes.arrows} />
        </kbd>
        <kbd className={classes.kbd}>
          <ChevronDownIcon className={classes.arrows} />
        </kbd>
        and to select/unselect use
        <kbd className={classes.kbd}>Enter</kbd>
      </p>
      <label className={classes.label}>Category one</label>
      <CategoryDropDown1 />
      <br></br>
      <label className={classes.label}>Category one</label>
      <CategoryDropDown2 />
    </div>
  );
}

export default App;
