import { BasicImage, CommonPaginationResponse } from './default.interface';

export interface Sellor {
	// # 쇼핑몰 정보
	description: string;
	// # 쇼핑몰 ID
	id: string;
	// # 쇼핑몰 이미지
	image: BasicImage;
	// # 무시해주세요.
	liked?: boolean;
	// # 쇼핑몰 이름
	name: string;
	// # 쇼핑몰 랜딩 URL
	url: string;
}

export interface ResponseSellors extends CommonPaginationResponse<Sellor> {}
