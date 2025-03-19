import { Status, Task } from '@prisma/client'

export type CreateTaskRequest = {
  code: string
  title: string
  parentId: number | null
}

export type ListTaskRequest = {
  code: string
  page: number
  per_page: number
}

export type GetTaskRequest = {
  code: string
  id: number
}

export type UpdateTaskRequest = {
  code: string
  id: number
  order: number | null
  title: string
  status: Status
}

export type RemoveTaskRequest = {
  code: string
  id: number
}

export type TaskResponse = {
  id: number
  order: number
  title: string
  status: string
  parentId: number | null
  level: number
  children: TaskResponse[]
}

export type ListTaskResponse = {
  data: TaskResponse[]
  pagination: {
    currentPage: number
    perPage: number
    totalPages: number
    totalItems: number
  }
}

export function toTaskResponse(task: Task): TaskResponse {
  return {
    id: task.id,
    order: task.order,
    title: task.title,
    status: task.status,
    parentId: task.parent_id,
    level: task.level,
    children: []
  }
}
