export type Integration = {
	id: number;
	name: string;
	image: string;
	description: string;
	enabled: boolean;
	color: string;
	oAuthUrl?: string;
	urlParams?: OAuthUrlParams;
};

export type OAuthUrlParams = {
	client_id?: string;
	response_type?: string;
	scope?: string;
	redirect_uri?: string;
};
