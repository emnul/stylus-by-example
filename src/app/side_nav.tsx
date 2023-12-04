import { Sidebar } from "@/components/app/sidebar";
import { basicExamples } from "@/data/sidebar";
import { Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";

const SIDEBAR_WIDTH = "256px";

export default function SideNav() {
  return (
    <Stack
      className={css({
        w: { base: "0", md: SIDEBAR_WIDTH },
        h: { base: "0", md: "full" },
        overflowY: "auto",
        borderRightWidth: "1px",
        borderColor: "stone.300",
        background: "stone.200",
        display: { base: "none !important", md: "flex !important" },
        _dark: {
          borderColor: "stone.800",
          background: "stone.900",
        },
      })}
    >
      <Sidebar basicExamples={basicExamples} />
    </Stack>
  );
}
