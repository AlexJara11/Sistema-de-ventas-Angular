import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// Agrega aquí otros módulos si los necesitas

export const StandaloneSharedModules = importProvidersFrom(
  MatToolbarModule,
  MatIconModule,
  // Otros módulos reutilizables
);
