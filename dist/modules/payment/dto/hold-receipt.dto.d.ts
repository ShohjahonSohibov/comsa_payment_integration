export declare class HoldReceiptDto {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        action: string;
    };
}
