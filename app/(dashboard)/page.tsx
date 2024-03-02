"use client";
import React from "react";
import EmptyOrg from "./_components/emptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/boardList";

interface DashboardPageParams {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

const Dashboard = ({ searchParams }: DashboardPageParams) => {
  const { organization } = useOrganization();
  return (
    <main className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </main>
  );
};

export default Dashboard;
