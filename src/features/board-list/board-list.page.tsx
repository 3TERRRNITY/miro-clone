import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function AppBoardList() {
  return (
    <div>
      AppBoardList
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>Board 1 </Link>
    </div>
  );
}

export const Component = AppBoardList;
