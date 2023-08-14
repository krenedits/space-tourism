interface StepperProps {
    index: number;
    setIndex: (index: number) => void;
}

interface StepProps extends StepperProps {
    active: number;
}

export type {
    StepperProps,
    StepProps
}