import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import {
  Blog,
  BlogFill,
  Home,
  HomeFill,
  Product,
  ProductFill,
  Solution,
  SolutionFill,
} from "../../asset/Icon";

const SideBar = () => {
  let location = window.location;
  let section = location?.pathname?.slice(1);
  let sectionFormat = section?.charAt(0)?.toUpperCase() + section?.slice(1);

  const [selected, setSelected] = useState([
    {
      name: "Home",
      icon: <Home />,
      icon_visited: <HomeFill />,
      link: "/",
      visited: false,
    },
    {
      name: "Product",
      icon: <Product />,
      icon_visited: <ProductFill />,
      link: "/product",
      visited: false,
    },
    {
      name: "Solution",
      icon: <Solution />,
      icon_visited: <SolutionFill />,
      link: "/solution",
      visited: false,
    },
    {
      name: "Blog",
      icon: <Blog />,
      icon_visited: <BlogFill />,
      link: "/blog",
      visited: false,
    },
  ]);

  return (
    <div className="side-bar-container">
      { selected?.map((val, index) => {
        return (
          <SideBarIcon
            index={ index }
            name={ val?.name }
            icon={ val?.icon }
            icon2={ val?.icon_visited }
            link={ val?.link }
            visited={ val?.visited }
            selected={ selected }
            setSelected={ setSelected }
            sectionFormat={ sectionFormat }

          />
        );
      }) }
    </div>
  );
};

export default SideBar;

const SideBarIcon = ({
  name,
  icon,
  icon2,
  link,
  selected,
  visited,
  setSelected,
  index,
  sectionFormat
}) => {
  const handleChangeEnter = (selected, setSelected, index) => {
    let temp = selected;
    temp[index].visited = !selected[index].visited;
    setSelected(temp);

  };

  return (
    <>
      <a href={ link }>
        <div
          className={
            (name === sectionFormat || (name === 'Home' && sectionFormat?.length === 0)) ? "side-bar-item-icon fill " : "side-bar-item-icon "
          }
          onClick={ () => handleChangeEnter(selected, setSelected, index) }
        >
          { name === sectionFormat || (name === 'Home' && sectionFormat?.length === 0) ? <span className="icon-selected"> { icon2 }</span> : <span className="icon-set"> { icon }</span> }
          <span className="icon-set visited"> { icon2 }</span>
          <div className="tooltip-container">
            <div className="option-toolkit-corner"></div>
            <div className="option-toolkit">{ name }</div>
          </div>
        </div>
      </a>
    </>
  );
};
