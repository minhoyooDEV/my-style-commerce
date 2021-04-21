/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	export interface ProcessEnv {
		NEXT_PUBLIC_GOODS_FIRST_REQ_API: string;
		NEXT_PUBLIC_MALLS_FIRST_REQ_API: string;
	}
}
