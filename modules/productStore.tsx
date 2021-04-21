import { makeAutoObservable } from 'mobx';
import { Pagination } from '../interfaces/default.interface';
import { Product, ResponseProducts } from '../interfaces/product.interface';

type TProductStoreState = {
	list: Product[];
	pagination: Pagination;
};

const createProductStore = () =>
	makeAutoObservable({
		list: [] as Product[],
		pagination: {} as Pagination,

		async loadProducts(next?: string) {
			next = this.next || next;
			if (next) {
				const response = await fetch(next);
				const data = JSON.parse(await response.text()) as ResponseProducts;
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

		hydrate(hydrateData: TProductStoreState) {
			if (!hydrateData) return;

			if (!this.list.length) {
				this.list = hydrateData.list;
				this.pagination = hydrateData.pagination;
			}
		},
	});

type TCreateProductStore = ReturnType<typeof createProductStore>;

export { createProductStore };
export type { Product, TCreateProductStore, TProductStoreState };
