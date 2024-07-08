/**
 * Type Partial récursif qui permet de définir un objet
 * dont toutes les propriétés sont optionnelles
 * y compris les propriétés des sous-objets.
 */
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
