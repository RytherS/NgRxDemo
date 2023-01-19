export interface DataModel {
    stringValue: string;
    numberValue: number;
}

export const mockOrgDataModelList: DataModel[] = [
    { stringValue: 'Hello, World!', numberValue: 1 },
    { stringValue: 'Lorem ipsum dolor sit amet', numberValue: 2 },
];

export const mockPersonalDataModelList: DataModel[] = [
    { stringValue: 'NgRx is Rad!', numberValue: 3 },
    { stringValue: 'I declare Sebastian the coolest of them all!', numberValue: 4 },
];
