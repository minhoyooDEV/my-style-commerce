export interface BasicImage {
	// 	# 무시해주세요.
	id: number;
	// 	# 상품 이미지 URL
	url: string;
}

export interface Pagination {
	next?: string;
}

export interface CommonPaginationResponse<T> {
	data: T[];
	pagination: Pagination;
}
