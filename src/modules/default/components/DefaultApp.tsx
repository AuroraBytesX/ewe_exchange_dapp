"use client";
import { APP_ENV } from "@/appEnv";
import { Layout } from "@/modules/common/layout";
import { DiscoverPage } from "@/modules/discover";
import { KEPLR_AUTOCONNECT_KEY, connectAndromedaClient, initiateKeplr, useAndromedaStore } from "@/zustand/andromeda";
import { updateConfig } from "@/zustand/app";
import React, { FC, useEffect, useState } from "react"

interface Props {
}

const DefaultApp: FC<Props> = (props) => {
    const { } = props;
    const [mounted, setMounted] = useState(false);
    const isConnected = useAndromedaStore(state => state.isConnected)
    const chainId = useAndromedaStore(state => state.chainId)
    const isLoading = useAndromedaStore(state => state.isLoading)
    const keplr = useAndromedaStore(state => state.keplr)

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            initiateKeplr();
        }
    }, [mounted]);

    useEffect(() => {
        if (mounted) {
            const autoconnect = localStorage.getItem(KEPLR_AUTOCONNECT_KEY);
            if (!isLoading && typeof keplr !== "undefined" && autoconnect === keplr?.mode) {
                if (!isConnected || (isConnected && chainId !== APP_ENV.DEFAULT_CONFIG.chainId)) {
                    connectAndromedaClient(APP_ENV.DEFAULT_CONFIG.chainId);
                }
            }
        }
    }, [keplr, isConnected, isLoading, chainId, mounted]);

    useEffect(() => {
        if (mounted) {
            updateConfig(APP_ENV.DEFAULT_CONFIG);
        }
    }, [mounted])

    return (
        <Layout>
            <DiscoverPage />
        </Layout>
    )
}

export default DefaultApp