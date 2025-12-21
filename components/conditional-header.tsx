"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function ConditionalHeader() {
    const pathname = usePathname();

    // Hide header on /projects page
    if (pathname === "/projects") {
        return null;
    }

    return <Header />;
}
