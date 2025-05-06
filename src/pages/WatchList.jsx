import { useDispatch, useSelector } from "react-redux";

export default function WatchList() {
  const watchList = useSelector((state) => state);
  //   const dispatch = useDispatch();
  console.log(watchList);
}
