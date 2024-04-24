export declare class WebPayReceiptDto {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        card: {
            pan: string;
            expire: string;
        };
    };
}
