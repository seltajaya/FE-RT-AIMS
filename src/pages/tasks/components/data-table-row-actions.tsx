import { Row } from '@tanstack/react-table'

import { Button } from '@/components/custom/button'
import { taskSchema } from '../data/schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original)

  return (
    <div className='flex space-x-2 w-fit'>
      <Button variant='ghost'>Edit</Button>
      <Button variant='ghost'>Delete</Button>
    </div>
  )
}
