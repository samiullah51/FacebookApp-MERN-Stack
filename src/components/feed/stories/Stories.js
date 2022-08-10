import React, { useState } from "react";
import "./Stories.css";
import Story from "./story/Story";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function Stories() {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);
  // handle Scroll
  const handleScroll = () => {
    if (scroll < 400) {
      setScroll(scroll + 200);
      setShow(true);
    }
  };
  // handle back scroll
  const handleScrollBack = () => {
    if (scroll > 0) {
      setScroll(scroll - 200);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="stories">
      <div className="stories__header">
        <p className="active">Stories</p>
        <p>Reals</p>
        <p>Rooms</p>
      </div>

      {/* Stories */}
      <div className="stories__container">
        <KeyboardArrowRightIcon
          className="scroll__icon"
          onClick={handleScroll}
        />
        <KeyboardArrowLeftIcon
          className={!show ? "scroll__icon_back" : "scroll__icon_back active"}
          onClick={handleScrollBack}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://ichef.bbci.co.uk/news/976/cpsprodpb/111AB/production/_125995007_musk_getty.jpg"
          scroll={scroll}
        />
        <Story
          content="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Jeff_Bezos%27_iconic_laugh.jpg/170px-Jeff_Bezos%27_iconic_laugh.jpg"
          profileName="Josef Bezos"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfV4SyNWWjln92bDavxpH_DpfAHG8LPOA_Q&usqp=CAU"
          scroll={scroll}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://www.varietyinsight.com/images/honoree/Mark_Zuckerberg.png"
          scroll={scroll}
        />
        <Story
          content="https://images.theconversation.com/files/447300/original/file-20220218-46094-gy1x5i.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          profileName="Mark Z"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfV4SyNWWjln92bDavxpH_DpfAHG8LPOA_Q&usqp=CAU"
          scroll={scroll}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://ichef.bbci.co.uk/news/976/cpsprodpb/111AB/production/_125995007_musk_getty.jpg"
          scroll={scroll}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://ichef.bbci.co.uk/news/976/cpsprodpb/111AB/production/_125995007_musk_getty.jpg"
          scroll={scroll}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://ichef.bbci.co.uk/news/976/cpsprodpb/111AB/production/_125995007_musk_getty.jpg"
          scroll={scroll}
        />
        <Story
          content="https://nypost.com/wp-content/uploads/sites/2/2021/08/elon-musk-tesla.jpg?quality=75&strip=all&w=744"
          profileName="Elon Musk"
          profileImage="https://ichef.bbci.co.uk/news/976/cpsprodpb/111AB/production/_125995007_musk_getty.jpg"
          scroll={scroll}
        />
      </div>
    </div>
  );
}

export default Stories;
