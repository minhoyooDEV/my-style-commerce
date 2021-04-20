import { BasicImage, CommonPaginationResponse } from './default.interface';

export interface Product {
	id: string; //# 상품 ID
	// # 상품 이미지
	image: BasicImage;
	// # 모바일용 상품 랜딩 URL
	mobileUrl: string;
	// # 상품가격
	price: number;
	// # 쇼핑몰 ID
	shopId: string;
	// # 쇼핑몰 이름
	shopName: string;
	// # 상품명
	title: string;
	// # 상품 랜딩 URL
	url: string;
	// # 무시해주세요.
	liked?: boolean;
	// # 무시해주세요.
	likedCount?: number;
}

export interface ResponseProducts extends CommonPaginationResponse<Product> {}
