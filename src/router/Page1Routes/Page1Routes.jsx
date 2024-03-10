import { Page1 } from "../../Page1";
import { Page1_A } from "../../Page1_A";
import { Page1_B } from "../../Page1_B";

export const page1Routes = [
    {
        path: "/",
        exact: true,
        children: <Page1 />
    },
    {
        path: "/A",
        exact: false,
        children: <Page1_A />
    },
    {
        path: "/B",
        exact: false,
        children: <Page1_B />
    },
];
