import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "aconst",
    name: "EWE Token Exchange",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [

        {
            exchange:
                "archway14dr02l0s2ad2mjp4d0hkzjh5vt6c8haecza9nle3hq93rkuuye6s4yj00j",
            cw20: "archway1ux5g6t9sczraq3s7gnhrcc3s9yyy8a8uxp3qd3cry764kpgxpa5snsvlqk",
            name: "EWE Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        },
    ],
};

export default CONFIG;
