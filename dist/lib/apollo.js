"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApollo = exports.initializeApollo = void 0;
const react_1 = require("react");
const client_1 = require("@apollo/client");
let apolloClient;
function createApolloClient() {
    return new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: '/graphql',
            credentials: 'include',
        }),
        cache: new client_1.InMemoryCache(),
    });
}
function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    if (typeof window === 'undefined')
        return _apolloClient;
    return _apolloClient;
}
exports.initializeApollo = initializeApollo;
function useApollo(initialState) {
    const store = react_1.useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
exports.useApollo = useApollo;
//# sourceMappingURL=apollo.js.map