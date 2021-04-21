import { makeAutoObservable } from 'mobx';
import { Pagination } from '../interfaces/default.interface';
import { ResponseSellors, Sellor } from '../interfaces/sellor.interface';

type TSellorStoreState = {
	list: Sellor[];
	pagination: Pagination;
};

const createSellorStore = () =>
	makeAutoObservable({
		list: [] as Sellor[],
		pagination: {} as Pagination,

		async loadSellors(next?: string) {
			next = this.next || next;
			if (next) {
				const response = await fetch(next);
				const data = JSON.parse(await response.text()) as ResponseSellors;
				this.pagination.next = data.pagination.next;
				this.list.push(...data.data);
				return data;
			}
		},
		get next() {
			return this.pagination?.next || '';
		},
		get len() {
			return this.list.length;
		},

		hydrate(hydrateData: TSellorStoreState) {
			if (!hydrateData) return;

			if (!this.list.length) {
				this.list = hydrateData.list;
				this.pagination = hydrateData.pagination;
			}
		},
	});

type TCreateSellorStore = ReturnType<typeof createSellorStore>;

export { createSellorStore };
export type { Sellor, TCreateSellorStore, TSellorStoreState };
