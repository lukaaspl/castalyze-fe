/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/insights/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Insights */
        get: operations["get_insights_api_insights__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/insights/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Insight By Id */
        get: operations["get_insight_by_id_api_insights__id__get"];
        /** Update Insight */
        put: operations["update_insight_api_insights__id__put"];
        post?: never;
        /** Delete Insight */
        delete: operations["delete_insight_api_insights__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/insights/create/manual": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Insight Manually */
        post: operations["create_insight_manually_api_insights_create_manual_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/insights/create/youtube": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Insight From Youtube Video */
        post: operations["create_insight_from_youtube_video_api_insights_create_youtube_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/insights/create/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Insight From File */
        post: operations["create_insight_from_file_api_insights_create_file_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Body_create_insight_from_file_api_insights_create_file_post */
        Body_create_insight_from_file_api_insights_create_file_post: {
            /**
             * File
             * Format: binary
             */
            file: string;
            /** Language Code */
            language_code?: string | null;
        };
        /** CreateInsightFromYouTube */
        CreateInsightFromYouTube: {
            /** Video Id */
            video_id: string;
        };
        /** CreateInsightManually */
        CreateInsightManually: {
            /** Title */
            title: string;
            source_type: components["schemas"]["InsightSourceType"];
            /** Source Url */
            source_url?: string | null;
            /** Transcription */
            transcription: string;
            /** Summary */
            summary: string;
            /** Is Limited */
            is_limited: boolean;
            /** Image */
            image?: string | null;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** Insight */
        Insight: {
            /** Id */
            id: string;
            /** Title */
            title: string;
            status: components["schemas"]["InsightProcessingStatus"];
            source_type: components["schemas"]["InsightSourceType"];
            /** Source Url */
            source_url?: string | null;
            /** Transcription */
            transcription: string;
            /** Summary */
            summary: string;
            /** Is Limited */
            is_limited: boolean;
            /** Image */
            image?: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** InsightPreview */
        InsightPreview: {
            /** Id */
            id: string;
            /** Title */
            title: string;
            status: components["schemas"]["InsightProcessingStatus"];
        };
        /**
         * InsightProcessingStatus
         * @enum {string}
         */
        InsightProcessingStatus: "pending" | "processing" | "complete" | "failed";
        /**
         * InsightSourceType
         * @enum {string}
         */
        InsightSourceType: "youtube" | "file" | "manual";
        /** UpdateInsight */
        UpdateInsight: {
            /** Title */
            title?: string | null;
            source_type?: components["schemas"]["InsightSourceType"] | null;
            /** Source Url */
            source_url?: string | null;
            /** Transcription */
            transcription?: string | null;
            /** Summary */
            summary?: string | null;
            /** Is Limited */
            is_limited?: boolean | null;
            /** Image */
            image?: string | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_insights_api_insights__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InsightPreview"][];
                };
            };
        };
    };
    get_insight_by_id_api_insights__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Insight"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_insight_api_insights__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateInsight"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Insight"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_insight_api_insights__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_insight_manually_api_insights_create_manual_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInsightManually"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Insight"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_insight_from_youtube_video_api_insights_create_youtube_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInsightFromYouTube"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Insight"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_insight_from_file_api_insights_create_file_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_create_insight_from_file_api_insights_create_file_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Insight"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
