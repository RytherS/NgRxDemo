export interface ErrorState {
    isError: boolean;
    source: string;
    message: string;
    data: any;
}

export const initialErrorState: ErrorState = {
    isError: false,
    source: "",
    message: "",
    data: null
}
