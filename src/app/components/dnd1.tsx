import { useConfiguredDnd } from "configured-dnd-context";
import SortableCollection from "./sortableCollection";

function Dnd1() {
  const { id, ...value } = useConfiguredDnd();

  return (
    <>
      <SortableCollection value={value} prefix="1-" dndCopy={true} />
      <SortableCollection value={value} prefix="2-" dndCopy={true} />     
    </>
  );
}

export default Dnd1;
