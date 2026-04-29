import type { PathParams, ROUTES } from "@/shared/model/routes";
import { useParams } from "react-router-dom";

function AppBoard() {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>()
  return <div>AppBoard {params.boardId}</div>;
}

export const Component = AppBoard;
