import React from 'react';
import { DataTable } from './tasks/data-table';
import { columns } from './tasks/columns';

const TasksListTab = ({ tasks }: { tasks: Task[] }) => {
	return <DataTable columns={columns} data={tasks} />;
};

export default TasksListTab;
