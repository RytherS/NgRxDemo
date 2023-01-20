export interface ErrorState {
    isError: boolean;
    source: string;
    message: string;
    routeToErrorPage: boolean;
    data?: any;
}

export const initialErrorState: ErrorState = {
    isError: false,
    source: "",
    message: "",
    routeToErrorPage: false,
    data: null
}
