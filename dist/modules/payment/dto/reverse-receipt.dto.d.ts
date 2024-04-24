export declare class ReverseReceiptDto {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        reason: string;
    };
}
