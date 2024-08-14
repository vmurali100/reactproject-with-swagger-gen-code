/// <reference path="./custom.d.ts" />

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:3200/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration!: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}


/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * Unique identifier for the item
     * @type {string}
     * @memberof Item
     */
    id?: string;
    /**
     * Name of the item
     * @type {string}
     * @memberof Item
     */
    name: string;
    /**
     * Description of the item
     * @type {string}
     * @memberof Item
     */
    description?: string;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsGet(options: any = {}): FetchArgs {
            const localVarPath = `/items`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdDelete(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling itemsIdDelete.');
            }
            const localVarPath = `/items/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdGet(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling itemsIdGet.');
            }
            const localVarPath = `/items/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an item by ID
         * @param {Item} body Item data to update
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdPut(body: Item, id: string, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling itemsIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling itemsIdPut.');
            }
            const localVarPath = `/items/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Item" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new item
         * @param {Item} body Item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsPost(body: Item, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling itemsPost.');
            }
            const localVarPath = `/items`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Item" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Item>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).itemsGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Delete an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdDelete(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).itemsIdDelete(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdGet(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Item> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).itemsIdGet(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Update an item by ID
         * @param {Item} body Item data to update
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdPut(body: Item, id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Item> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).itemsIdPut(body, id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Create a new item
         * @param {Item} body Item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsPost(body: Item, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Item> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).itemsPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Get all items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsGet(options?: any) {
            return DefaultApiFp(configuration).itemsGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Delete an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdDelete(id: string, options?: any) {
            return DefaultApiFp(configuration).itemsIdDelete(id, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get an item by ID
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdGet(id: string, options?: any) {
            return DefaultApiFp(configuration).itemsIdGet(id, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Update an item by ID
         * @param {Item} body Item data to update
         * @param {string} id The item ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsIdPut(body: Item, id: string, options?: any) {
            return DefaultApiFp(configuration).itemsIdPut(body, id, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Create a new item
         * @param {Item} body Item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        itemsPost(body: Item, options?: any) {
            return DefaultApiFp(configuration).itemsPost(body, options)(fetch, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get all items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public itemsGet(options?: any) {
        return DefaultApiFp(this.configuration).itemsGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Delete an item by ID
     * @param {string} id The item ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public itemsIdDelete(id: string, options?: any) {
        return DefaultApiFp(this.configuration).itemsIdDelete(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get an item by ID
     * @param {string} id The item ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public itemsIdGet(id: string, options?: any) {
        return DefaultApiFp(this.configuration).itemsIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Update an item by ID
     * @param {Item} body Item data to update
     * @param {string} id The item ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public itemsIdPut(body: Item, id: string, options?: any) {
        return DefaultApiFp(this.configuration).itemsIdPut(body, id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Create a new item
     * @param {Item} body Item to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public itemsPost(body: Item, options?: any) {
        return DefaultApiFp(this.configuration).itemsPost(body, options)(this.fetch, this.basePath);
    }

}
