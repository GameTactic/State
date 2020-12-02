export interface Collection {
    id: string;
    parentCollectionId: string | undefined;
    name: string;
    lockedBy: string | undefined;
    isPinned: boolean;
    createdBy: string;
}
