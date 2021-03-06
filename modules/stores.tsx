import React, { useMemo } from 'react';
import { enableStaticRendering } from 'mobx-react';
import { configure } from 'mobx';
import { createProductStore, TProductStoreState } from './productStore';
import { createSellorStore, TSellorStoreState } from './sellorStore';

const isServer = typeof window === 'undefined';
// ssr issuese
enableStaticRendering(isServer);

configure({
	useProxies: 'never',
	enforceActions: 'never',
});

type initializeStoreProps = {
	productStore: TProductStoreState;
	sellorStore: TSellorStoreState;
};

const makeStore = () => ({
	productStore: createProductStore(),
	sellorStore: createSellorStore(),
});

type TStore = ReturnType<typeof makeStore>;

let store: TStore;

function initializeStore(initialData: initializeStoreProps) {
	const _store: TStore = store ?? makeStore();

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
	if (initialData) {
		_store.productStore.hydrate(initialData.productStore);
		_store.sellorStore.hydrate(initialData.sellorStore);
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
}

export const storeContext = React.createContext<TStore | null>(null);
interface StoreProviderProps {
	children: React.ReactNode;
	store: TStore | null;
}
export const StoreProvider = ({ store, children }: StoreProviderProps) => (
	<storeContext.Provider value={store}>{children}</storeContext.Provider>
);

export const useStore = () => {
	return React.useContext(storeContext) as TStore;
};

export const useInitializeStore = (initialStore: initializeStoreProps) => {
	const store = useMemo(() => initializeStore(initialStore), [initialStore]);
	return store;
};
