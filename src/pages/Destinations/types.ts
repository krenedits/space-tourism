interface TabsProps {
    index: number;
    setIndex: (index: number) => void;
}

interface TabProps extends TabsProps {
    ownIndex: number;
}

export type {
    TabsProps,
    TabProps,
}