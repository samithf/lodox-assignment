import { FunctionComponent, useEffect, useRef, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import { useKeyPress } from "./useKeyPress";
import { useStyles } from "../styles/Dropdown";

type Item = {
  id: number;
  label: string;
  value: string;
};

type DropDownProps = {
  items: Item[];
  placeholderText: string;
};

type ItemListProps = {
  selectedItems: Item[];
  cursor: number;
};

type DropDownReturnTypes = {
  Dropdown: FunctionComponent;
  // selectedItems: Item[];
};

export const useDropdown: (props: DropDownProps) => DropDownReturnTypes = ({
  items,
  placeholderText,
}) => {
  const classes = useStyles();
  const dropdownRef = useRef<any>(null);

  const ItemList: React.FC<ItemListProps> = ({ selectedItems, cursor }) => {
    return (
      <ul className={classes.itemList}>
        {items.map((item, i) => (
          <li key={item.id} className={i === cursor ? "active" : ""}>
            <span>{item.label}</span>
            {selectedItems.map((item) => item.id).includes(item.id) ? (
              <span>☑️</span>
            ) : null}
          </li>
        ))}
      </ul>
    );
  };

  const Dropdown: React.FC = () => {
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const downPress = useKeyPress("ArrowDown", dropdownRef);
    const upPress = useKeyPress("ArrowUp", dropdownRef);
    const enterPress = useKeyPress("Enter", dropdownRef);
    const [showItems, setShowItems] = useState(false);
    const [cursor, setCursor] = useState(0);

    // handle arrow down
    useEffect(() => {
      if (items.length && downPress) {
        setCursor((prevState) =>
          prevState < items.length - 1 ? prevState + 1 : prevState
        );
      }
    }, [downPress]);

    //  handle arrow up
    useEffect(() => {
      if (items.length && upPress) {
        setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      }
    }, [upPress]);

    // when press enter, if the item is not in the list
    // then it will add it or otherwise remove it
    useEffect(() => {
      const selectedItem = items[cursor];
      if (items.length && enterPress) {
        const found = selectedItems.find((item) => item.id === selectedItem.id);
        if (found) {
          setSelectedItems(
            selectedItems.filter((item) => item.id !== found.id)
          );
          return;
        }
        if (selectedItem) {
          setSelectedItems([...selectedItems, selectedItem]);
        }
      }
    }, [enterPress]);

    const toggleList = () => {
      setShowItems(!showItems);
    };

    return (
      <div className={classes.dropDownContainer} tabIndex={0} ref={dropdownRef}>
        <div className={classes.header} onClick={toggleList}>
          <div className={classes.selectedItems}>
            {selectedItems.length ? (
              selectedItems.map((item) => (
                <span key={item.id} className="item">
                  {item.value}
                </span>
              ))
            ) : (
              <span>{`<${placeholderText}>`}</span>
            )}
          </div>

          {showItems ? (
            <ChevronUpIcon className={classes.arrows} />
          ) : (
            <ChevronDownIcon className={classes.arrows} />
          )}
        </div>
        {showItems ? (
          <ItemList selectedItems={selectedItems} cursor={cursor} />
        ) : null}
      </div>
    );
  };

  return { Dropdown };
};
