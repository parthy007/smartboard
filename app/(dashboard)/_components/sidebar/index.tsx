import List from "./list";
import NewButton from "./newButton";

const Sidebar = () => {
  return (
    <aside className="fixed text-white h-full left-0 flex flex-col p-3 gap-y-4 bg-blue-950 w-[60px]">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
