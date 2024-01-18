import { ContentIcon } from "./ContentIconSideBar";

export default function IconSideBar({ sideBar, onclick }) {



  return(
    <ContentIcon close={sideBar} onClick={onclick}>
      <div className="line-one"></div>
      <div className="line-two"></div>
      <div className="line-three"></div>
    </ContentIcon>
  )
}