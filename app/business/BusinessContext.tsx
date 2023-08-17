'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type BasicUser = {
	id?: string;
	first_name?: string;
	last_name?: string;
};

// Define the type for the context data
interface BusinessContextData {
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	userId: string | undefined;
	setUserId: Dispatch<SetStateAction<string | undefined>>;
	name: string | undefined;
	setName: Dispatch<SetStateAction<string | undefined>>;
	color: string;
	setColor: Dispatch<SetStateAction<string>>;
}

// Create the context
const BusinessContext = createContext<BusinessContextData>({
	step: 3,
	setStep: (): number => 0,
	userId: undefined,
	setUserId: () => undefined,
	name: undefined,
	setName: (): string => '',
	color: 'bg-zinc-900',
	setColor: (): string => '',
});

// Create a provider for components to consume and subscribe to changes
type BusinessContextProviderProps = {
	children: React.ReactNode;
};

export const NewBusinessContext = ({ children }: BusinessContextProviderProps) => {
	const [step, setStep] = useState<number>(3);
	const [userId, setUserId] = useState<string | undefined>(undefined);
	const [name, setName] = useState<string | undefined>(undefined);
	const [color, setColor] = useState<string>('#18181b');

	useEffect(() => {
		const supabase = createClientComponentClient<Database>();

		const getUserInfo = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			if (!session) return;

			setUserId(session.user.id);
		};

		getUserInfo();
	}, []);

	return <BusinessContext.Provider value={{ step, setStep, userId, setUserId, name, setName, color, setColor }}>{children}</BusinessContext.Provider>;
};

export const useBusinessContext = () => useContext(BusinessContext);
