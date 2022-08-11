import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(props) {
  const [view, setView] = useState(false);
  const onClickHander = () => {
    if (view === true) {
      setView(false);
    } else {
      setView(true);
    }
  };
  return (
    <div className="border-bottom">
      <div
        className="d-flex align-items-center p-3"
        onClick={() => onClickHander()}
      >
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">
          {props.first} {props.last}
        </span>
        <span>{view ? <IconChevronUp /> : <IconChevronDown />}</span>
      </div>
      {view ? (
        <UserCardDetail location={props.location} email={props.email} />
      ) : (
        false
      )}
    </div>
  );
}
