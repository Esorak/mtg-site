/**
 * Fonction récursive qui met à jour un objet en profondeur.
 * @param target L'objet à mettre à jour
 * @param updates Les mises à jour à appliquer (doivent être formatées comme l'objet mère - ici ProjectState)
 * @returns L'objet mis à jour (une copie de target avec les mises à jour appliquées)
 */
export default function updateDeepPartialObject<T>(target: T, updates: DeepPartial<T>): T {
  const result = { ...target };

  Object.keys(updates).forEach((key) => {
    const value = updates[key as keyof T];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      result[key as keyof T] = updateDeepPartialObject(target[key as keyof T], value);
    } else {
      result[key as keyof T] = value as T[keyof T];
    }
  });

  return result;
}
