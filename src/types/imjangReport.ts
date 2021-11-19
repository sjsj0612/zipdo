export interface IimjangReport {
	reportId: string;
	userId: string;
	nickname: string;
	kaptCode: string;
	kaptName: string;
	authOn: number;
	uploadOn?: number;
	rating?: number;
	punchLine?: string;
	memo?: string;
}

export interface IimjangReportPhoto {
	reportId: string;
	photoUrlList: Array<string>;
}

export interface IimjangReportMaemool {
	reportId: string;
	maemoolList: any;
}
