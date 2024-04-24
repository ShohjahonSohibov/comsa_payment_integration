export declare class WebVerifyReceiptDto {
    id: number;
    jsonrpc: string;
    method: string;
    params: {
        receipt_id: string;
        otp: string;
    };
}
