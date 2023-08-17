'use client';
import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

// Define the type for the context data
interface ContextData {
	organizationId: string | null;
	setOrganizationId: Dispatch<SetStateAction<string | null>>;

	projectId: string | null;
	setProjectId: Dispatch<SetStateAction<string | null>>;

	userId: string | null;
	setUserId: Dispatch<SetStateAction<string | null>>;

	clientId: string | null;
	setClientId: Dispatch<SetStateAction<string | null>>;

	userUrl: string | null;
	setUserUrl: Dispatch<SetStateAction<string | null>>;
}

// Create the context
const GlobalContext = createContext<ContextData>({
	organizationId: null,
	setOrganizationId: (): string => '',
	projectId: null,
	setProjectId: (): string => '',
	userId: null,
	setUserId: (): string => '',
	clientId: null,
	setClientId: (): string => '',
	userUrl: null,
	setUserUrl: (): string => '',
});

// Create a provider for components to consume and subscribe to changes
type GlobalContextProviderProps = {
	children: React.ReactNode;
};

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
	const [organizationId, setOrganizationId] = useState<string | null>(null);
	const [projectId, setProjectId] = useState<string | null>(null);
	const [userId, setUserId] = useState<string | null>(null);
	const [clientId, setClientId] = useState<string | null>(null);
	const [userUrl, setUserUrl] = useState<string | null>(null);

	return (
		<GlobalContext.Provider
			value={{ organizationId, setOrganizationId, projectId, setProjectId, userId, setUserId, clientId, setClientId, userUrl, setUserUrl }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
