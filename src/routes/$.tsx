import { createFileRoute } from '@tanstack/react-router'
import BuilderPage from '@/builder-page'

export const Route = createFileRoute('/$')({
  component: BuilderPage,
})