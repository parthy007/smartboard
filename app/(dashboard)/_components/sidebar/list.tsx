"use client";
import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <li key={mem.organization.id}>
          <Item
            name={mem.organization.name}
            id={mem.organization.id}
            key={mem.organization.id}
            imageUrl={mem.organization.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
