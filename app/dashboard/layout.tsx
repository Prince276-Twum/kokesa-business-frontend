import RequireAuth from "@/components/utils/RequireAuth";
import RequireBusinessComplete from "@/components/utils/RequireBusinessComplete";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function layout({ children }: Props) {
  return (
    <>
      <RequireAuth>
        <RequireBusinessComplete>{children}</RequireBusinessComplete>
      </RequireAuth>
    </>
  );
}

export default layout;
