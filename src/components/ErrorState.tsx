import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
}

const ErrorState = ({ message = "Invitación no encontrada" }: ErrorStateProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-3">
          {message}
        </h2>
        <p className="text-muted-foreground">
          Por favor, verifica el enlace de tu invitación o contacta a los novios.
        </p>
      </div>
    </div>
  );
};

export default ErrorState;
