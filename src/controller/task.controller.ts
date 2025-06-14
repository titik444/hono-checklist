import { Hono } from 'hono'
import { response } from '../utils/response'
import { TaskService } from '../service/task.service'
import {
  CreateTaskRequest,
  GetTaskRequest,
  ListTaskRequest,
  RemoveTaskRequest,
  UpdateTaskRequest
} from '../model/task.model'
import { Status, TaskType } from '@prisma/client'

export const taskController = new Hono()

taskController.post('/checklist/:code/task', async (c) => {
  const formData = await c.req.formData()

  const request: CreateTaskRequest = {
    code: String(c.req.param('code')),
    title: formData.get('title')?.toString() || '',
    level: Number(formData.get('level')),
    order: Number(formData.get('order')) || null,
    type: (formData.get('type')?.toString() as TaskType) || ''
  }

  const taskResponse = await TaskService.create(request)

  return response(c, 201, 'Create task success', taskResponse)
})

taskController.get('/checklist/:code/task', async (c) => {
  const request: ListTaskRequest = {
    code: String(c.req.param('code')),
    page: Number(c.req.query('page')) || 1,
    per_page: Number(c.req.query('per_page')) || 10
  }

  const taskResponse = await TaskService.list(request)

  return response(c, 200, 'List task success', taskResponse)
})

taskController.get('/checklist/:code/task/:id', async (c) => {
  const request: GetTaskRequest = {
    code: String(c.req.param('code')),
    id: Number(c.req.param('id'))
  }

  const taskResponse = await TaskService.get(request)

  return response(c, 200, 'Get task success', taskResponse)
})

taskController.patch('/checklist/:code/task/:id', async (c) => {
  const formData = await c.req.formData()

  const request: UpdateTaskRequest = {
    code: String(c.req.param('code')),
    id: Number(c.req.param('id')),
    order: Number(formData.get('order')) || null,
    level: Number(formData.get('level')) || null,
    title: formData.get('title')?.toString() || '',
    status: (formData.get('status')?.toString() as Status) || '',
    type: (formData.get('type')?.toString() as TaskType) || ''
  }

  const taskResponse = await TaskService.update(request)

  return response(c, 200, 'Update task success', taskResponse)
})

taskController.delete('/checklist/:code/task/:id', async (c) => {
  const request: RemoveTaskRequest = {
    code: String(c.req.param('code')),
    id: Number(c.req.param('id'))
  }

  const taskResponse = await TaskService.remove(request)

  return response(c, 200, 'Remove task success', taskResponse)
})
