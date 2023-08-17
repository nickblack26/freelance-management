import React from 'react';
import { NewBusinessContext } from './BusinessContext';

const NewBusinessLayout = ({ children }: { children: React.ReactNode }) => {
	return <NewBusinessContext>{children}</NewBusinessContext>;
};

export default NewBusinessLayout;
