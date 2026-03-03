import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          className={cn(
            "flex flex-col items-center justify-center",
            "min-h-[200px] p-6 text-center",
            "bg-destructive/10 border border-destructive/20 rounded-lg",
            "text-destructive"
          )}
        >
          <AlertTriangle className="h-10 w-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Algo salió mal
          </h3>
          <p className="text-sm mb-4 text-muted-foreground">
            {this.state.error?.message || "Ha ocurrido un error inesperado"}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={this.handleReset}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

interface AsyncErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  onError?: (error: Error) => void
}

interface AsyncErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class AsyncErrorBoundary extends React.Component<
  AsyncErrorBoundaryProps,
  AsyncErrorBoundaryState
> {
  constructor(props: AsyncErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("AsyncErrorBoundary caught an error:", error, errorInfo)
    this.props.onError?.(error)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          className={cn(
            "flex flex-col items-center justify-center",
            "min-h-[200px] p-6 text-center",
            "bg-destructive/10 border border-destructive/20 rounded-lg",
            "text-destructive"
          )}
        >
          <AlertTriangle className="h-10 w-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Error al cargar datos
          </h3>
          <p className="text-sm mb-4 text-muted-foreground">
            {this.state.error?.message || "No se pudieron cargar los datos"}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={this.handleReset}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
