export declare class CreateReceiptDto {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        ext_id: string;
        service: string;
        params: {
            amount: number;
        };
        receiver_id: string;
        hold: {
            holding_time: number;
            after_expired: string;
        };
    };
}
