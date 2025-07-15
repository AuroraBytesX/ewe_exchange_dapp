"use client"
import { IConfig } from "@/lib/app/types";
import { updateConfig } from "@/zustand/app";
import React, { FC, ReactNode, useEffect, useState } from "react"

interface Props {
    children?: ReactNode;
    config: IConfig;
}

const Providers: FC<Props> = (props) => {
    const { children, config } = props;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            updateConfig(config);
        }
    }, [config, mounted]);

    return (
        <>
            {children}
        </>
    )
}

export default Providers